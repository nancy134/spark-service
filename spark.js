const axios = require('axios');
const utilities = require('./utilities');

exports.getProperties = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Property";
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


exports.getMembers = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Member";
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


exports.getOffices = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Office";
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


exports.getOpenHouses = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/OpenHouse";
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


exports.getProperty = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Property" + "('" + id + "')";
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


exports.getMember = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Member" + "('" + id + "')";
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




exports.getOffice = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Office" + "('" + id + "')";
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



exports.getOpenhouse = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Openhouse" + "('" + id + "')";
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


exports.getListings = function(accessToken, query){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings";
        console.log(query);
        if (query){
            url += "?" + query;
        }
        console.log(url);
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            //var emailData = utilities.getEmailData(result);
            var emailData = utilities.getEmailData(result.data);
            resolve(emailData);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}



exports.getSystem = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/system";
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


exports.getListingCarts = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts";
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


exports.getListing = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings/" + id ;
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


exports.getListingCart = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts/" + id ;
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

exports.getListingPhotos = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings/" + id + "/photos" ;
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


exports.getAccount = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/accounts/" + id ;
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            var account = utilities.getAccountData(result.data);
            resolve(account);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getContacts = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts";
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


exports.getContact = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/" + id ;
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

exports.getCollectionListings = function(accessToken, body){
    return new Promise(function(resolve, reject){
        var promises = [];
        var getListingPromise;
        for (var i=0; i<body.listings.length; i++){
            getListingPromise = exports.getListing(accessToken, body.listings[i]);
	    promises.push(getListingPromise);
        }
        Promise.all(promises).then(function(results){
            var newResults = [];
            var result;
            for (var j=0; j<results.length; j++){
                result = results[j].D.Results[0];
                newResults.push(result);
            }
            resolve(newResults);
        }).catch(function(err){
            reject(err);
        });
    });
}


exports.addListingCart = function(accessToken, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts";
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'POST',
            headers: headers,
            data: body
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.addListingToCart = function(accessToken, id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts/" + id;
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'POST',
            headers: headers,
            data: body
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getAccountProfile = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/accounts/" + id  + "/profile";
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


exports.getAccountMeta = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/accounts/meta";
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


exports.getBrokerTours = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/brokertours";
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

exports.getSavedSearches = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/savedsearches";
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


exports.getQuickSearches = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/searchtemplates/quicksearches";
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

exports.deleteListingCart = function(accessToken, id, listingId){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts/" + id + "/listings/" + listingId;
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'DELETE',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getContactPortal = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/" + id + "/portal" ;
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

exports.getContactSavedSearches = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/" + id + "/savedsearches" ;
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

exports.getContactActivity = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/" + id + "/activity" ;
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

exports.getStandardFields = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/standardfields";
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

exports.getContactsExport = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/export/all";
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

exports.createEmail = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings" +
        "?_expand=Photos&_filter=SavedSearch Eq '" + id + "'";

        console.log(url);
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            var emailData = utilities.getEmailData(result.data);
            var dataSources = [];

            var dataSource = {};
            var email = {}
            dataSource.name = "Saved search name";
            dataSource.type = "RAW";
            dataSource.value = [];

            // Header
            var header = { id: "header_logo"};
            dataSource.value.push(header);

            // 3 Listing Row
            var content = [];
            for (var i=0; i<3; i++){
                var title = utilities.createTitle(emailData[i]);
                var data = {
                    id: "listing_1_of_3",
                    values: {
                        p_price: emailData[i].price,
                        p_image: emailData[i].photo,
                        p_name: title,
                        p_description: emailData[i].address
                    }
                }
                content.push(data);
            }

            var emptyStructure3 = {
                id: "empty_structure_3",
                content: content
            };

            dataSource.value.push(emptyStructure3);

            // 2 Listing Row
            content = [];
            title = utilities.createTitle(emailData[3]);
            data = {
                id: "listing_2_left",
                values: {
                    p_price: emailData[3].price,
                    p_image: emailData[3].photo,
                    p_description: emailData[3].address,
                    p_name: title
                
                }
            };
            content.push(data);
            title = utilities.createTitle(emailData[4]);

            data = {
                id: "listing_2_right",
                values: {
                    p_price: emailData[4].price,
                    p_image: emailData[4].photo,
                    p_description: emailData[4].address,
                    p_name: title
                }
            };
            content.push(data);
            
            
            var emptyStructure2 = {
                id: "empty_structure_2",
                content: content
            };

            dataSource.value.push(emptyStructure2);

            // Horizontal left
            title = utilities.createTitle(emailData[5]);
            var horizontalLeft = { 
                id: "listing_horizontal_left",
                values: {
                    p_price: emailData[5].price,
                    p_image: emailData[5].photo,
                    p_description: emailData[5].address,
                    p_name: title

                }
            };
            dataSource.value.push(horizontalLeft);

            // Horizontal right
            title = utilities.createTitle(emailData[6]);
            var horizontalRight = { 
                id: "listing_horizontal_right",
                values: {
                    p_price: emailData[6].price,
                    p_image: emailData[6].photo,
                    p_description: emailData[6].address,
                    p_name: title

                }
            };
            dataSource.value.push(horizontalRight);

            // Footer
            var footer = { 
                id: "footer"
            };
            dataSource.value.push(footer);

            dataSources.push(dataSource);
            email.dataSources = dataSources;
            email.templateId = "1073691";
            email.emailName = "Saved search name";
            resolve(email);

        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}