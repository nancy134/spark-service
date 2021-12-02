const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const sparkService = require('./spark');
const utilities = require('./utilities');

const url = require('url');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/properties', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getProperties(accessToken).then(function(properties){
        res.json(properties);
    }).catch(function(err){
        res.status(400).json(err);
    });
});


app.get('/members', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getMembers(accessToken).then(function(members){
        res.json(members);
    }).catch(function(err){
        res.status(400).json(err);
    });
});


app.get('/offices', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getOffices(accessToken).then(function(offices){
        res.json(offices);
    }).catch(function(err){
        res.status(400).json(err);
    });
});



app.get('/openhouses', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getOpenHouses(accessToken).then(function(openhouses){
        res.json(openhouses);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/properties/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getProperty(accessToken, req.params.id).then(function(property){
        res.json(property);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/members/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getMember(accessToken, req.params.id).then(function(member){
        res.json(member);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/offices/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getOffice(accessToken, req.params.id).then(function(office){
        res.json(office);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});



app.get('/openhouses/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getOpenHouse(accessToken, req.params.id).then(function(openhouse){
        res.json(openhouse);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    var urlParts  = url.parse(req.url);
    var queryStr = urlParts.query;
    console.log(queryStr);
    sparkService.getListings(accessToken, queryStr).then(function(listings){
        res.json(listings);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/system', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getSystem(accessToken).then(function(system){
        res.json(system);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/listingcarts', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getListingCarts(accessToken).then(function(listingcarts){
        res.json(listingcarts);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});



app.get('/', (req, res) => {
    res.send("spark-service");
});


app.get('/listings/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getListing(accessToken, req.params.id).then(function(listing){
        res.json(listing);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/listingcarts/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getListingCart(accessToken, req.params.id).then(function(listingcart){
        res.json(listingcart);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/listings/:id/photos', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getListingPhotos(accessToken, req.params.id).then(function(listingphotos){
        res.json(listingphotos);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/accounts/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getAccount(accessToken, req.params.id).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContacts(accessToken).then(function(contacts){
        res.json(contacts);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContact(accessToken, req.params.id).then(function(contact){
        res.json(contact);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/collectionListings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getCollectionListings(accessToken, req.body).then(function(listings){
        res.json(listings);
    }).catch(function(err){
        res.status(400).json(err);
    });
});


app.post('/listingcarts', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.addListingCart(accessToken, req.body).then(function(listingcart){
        res.json(listingcart);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/listingcarts/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.addListingToCart(accessToken, req.params.id, req.body).then(function(listingcart){
        res.json(listingcart);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/accounts/:id/profile', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getAccountProfile(accessToken, req.params.id).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/accounts/meta', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getAccountMeta(accessToken, req.params.id).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/brokertours', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getBrokerTours(accessToken).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/savedsearches', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getSavedSearches(accessToken).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

exports.getSavedSearch = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/savedsearches/" + id;
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

app.get('/savedsearches/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getSavedSearch(accessToken, req.params.id).then(function(account){
        res.json(account);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/quicksearches', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getQuickSearches(accessToken).then(function(searches){
        res.json(searches);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.delete('/listingcarts/:id/listings/:listingId', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.deleteListingCart(accessToken, req.params.id, req.params.listingId).then(function(listingcart){
        res.json(listingcart);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts/:id/portal', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContactPortal(accessToken, req.params.id).then(function(contact){
        res.json(contact);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts/:id/savedsearches', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContactSavedSearches(accessToken, req.params.id).then(function(contact){
        res.json(contact);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts/:id/activity', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContactActivity(accessToken, req.params.id).then(function(contact){
        res.json(contact);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/standardfields', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getStandardFields(accessToken).then(function(fields){
        res.json(fields);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/contacts/export/all', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getContactsExport(accessToken).then(function(contact){
        res.json(contact);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/emails/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.createEmail(accessToken, req.params.id).then(function(email){
        res.json(email);
    }).catch(function(err){
        res.status(400).json(err);
    });
});

app.get('/sharedLinks', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getSharedLinks(accessToken).then(function(sharedLinks){
        res.json(sharedLinks);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/sharedLinks/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    //sparkService.createSharedLink(accessToken).then(function(sharedLink){
    sparkService.createSharedLink(accessToken, req.body).then(function(sharedLink){
        res.json(sharedLink);
        }).catch(function(err){
            console.log(err);
            res.status(400).json(err);
        });
});

app.get('/sharedlinks/:id', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getSharedLink(accessToken, req.params.id).then(function(sharedLink){
        res.json(sharedLink);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/sharedLinks/search', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.createSharedLinkSearch(accessToken, req.body).then(function(sharedLink){
        res.json(sharedLink);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/my/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getMyListings(accessToken).then(function(listings){
        res.json(listings);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/office/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getOfficeListings(accessToken).then(function(listings){
        res.json(listings);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/company/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.getCompanyListings(accessToken).then(function(listings){
        res.json(listings);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/listings', (req, res) => {
    var accessToken = utilities.getAccessToken(req);
    sparkService.createListing(accessToken, req.body).then(function(listing){
        res.json(listing);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.listen(PORT, HOST);
