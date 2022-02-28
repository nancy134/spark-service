const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const syncCCContact = process.env.AWS_SQS_CC_SYNC_CONTACT_TO_SPARK

const { Consumer } = require('sqs-consumer');
const sparkService = require('./spark');

const utilities = require('./utilities');


exports.handleSQSMessage = function(message){
    var json = JSON.parse(message.Body);
    var json2 = JSON.parse(json.Message);
    var queryStr = "?email="+json2.email;
    var accessToken = json2.token;

    sparkService.getContacts(accessToken, queryStr).then(function(contacts){
        if (contacts.D && contacts.D.Results && contacts.D.Results.length > 0){
            var first = contacts.D.Results[0].GivenName;
            var last = contacts.D.Results[0].FamilyName;

            id = contacts.D.Results[0].Id
            
            var body = utilities.createSparkContactData(json2);
            console.log(body);
            
            if (body.D.GivenName || body.D.FamilyName){
                sparkService.updateContact(accessToken, id, body).then(function(contact){
                    console.log(json2.email + " successfully updated");
                }).catch(function(err){
                    console.log(err);
                });
            } else {
                console.log("No changes for "+json2.email);
            }
            
        } else {

            var contact = utilities.createSparkContactData(json2);
            console.log(contact);

            sparkService.createContact(accessToken, contact).then(function(newContact){
                console.log(newContact);
            }).catch(function(err){
                console.log(err);
            });
        }
    }).catch(function(err){
        console.log(err);
    });

}

exports.sqsApp = Consumer.create({
    queueUrl: syncCCContact,
    handleMessage: module.exports.handleSQSMessage,
    sqs: new AWS.SQS()
});

exports.handleError = function(err){
    console.log(err);
}

module.exports.sqsApp.on('error', (err) => {
    module.exports.handleError(err);
});


module.exports.sqsApp.start();
