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
        if (query){
            url += "?" + query;
        }
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            //var emailData = utilities.getEmailData(result.data);
            //resolve(emailData);
            resolve(result.data);
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
       
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };

        axios(options).then(function(result){
            var sharedLinkBody = utilities.createSharedLinkBody(result.data);
            
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

            // Title
            var title = {id: "header3"};
            dataSource.value.push(title);

            // 3 Listing Row
            if (emailData.length >= 3){
                var content = [];
                for (var i=0; i<3; i++){
                    var title = utilities.createTitle(emailData[i]);
                    var specs = utilities.createSpecs(emailData[i]);

                    var data = {
                        id: "listing_1_of_3",
                        values: {
                            //p_price: emailData[i].price,
                            p_price: utilities.formatPrice(emailData[i].price),
                            p_image: emailData[i].photo,
                            p_name: title,
                            p_address: emailData[i].address,
                            p_city: emailData[i].city,
                            p_description: emailData[i].description,
                            p_spec: specs
                        }
                    }
                    content.push(data);
                } 

                var emptyStructure3 = {
                    id: "empty_structure_3",
                    content: content
                };

                dataSource.value.push(emptyStructure3);
            }

            // 2 Listing Row
            if (emailData.length >= 5){
                content = [];
                title = utilities.createTitle(emailData[3]);
                data = {
                    id: "listing_2_left",
                    values: {
                        p_price: utilities.formatPrice(emailData[3].price),
                        p_image: emailData[3].photo,
                        p_address: emailData[3].address,
                        p_city: emailData[3].city,
                        p_name: title,
                        p_description: emailData[3].description,
                        p_spec: specs
                    }
                };
                content.push(data);

                title = utilities.createTitle(emailData[4]);
            
                data = {
                    id: "listing_2_right",
                    values: {
                        p_price: utilities.formatPrice(emailData[4].price),
                        p_image: emailData[4].photo,
                        p_address: emailData[4].address,
                        p_city: emailData[4].city,
                        p_name: title,
                        p_description: emailData[4].description,
                        p_spec: specs
                    }
                };
                content.push(data);
            
                var emptyStructure2 = {
                    id: "empty_structure_2",
                    content: content
                };

                dataSource.value.push(emptyStructure2);
            }

            if (emailData.length >= 7){

                // Horizontal left
                title = utilities.createTitle(emailData[5]);
                var horizontalLeft = { 
                    id: "listing_horizontal_left",
                    values: {
                        p_price: utilities.formatPrice(emailData[5].price),
                        p_image: emailData[5].photo,
                        p_address: emailData[5].address,
                        p_city: emailData[5].city,
                        p_name: title,
                        p_description: emailData[5].description
                    }
                };
                dataSource.value.push(horizontalLeft);

                // Horizontal right
                title = utilities.createTitle(emailData[6]);
                var horizontalRight = { 
                    id: "listing_horizontal_right",
                    values: {
                        p_price: utilities.formatPrice(emailData[6].price),
                        p_image: emailData[6].photo,
                        p_address: emailData[6].address,
                        p_city: emailData[6].city,
                        p_name: title,
                        p_description: emailData[6].description,
                        p_spec: specs
                    }
                };
                dataSource.value.push(horizontalRight);
            }

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


exports.getSharedLinks = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/sharedlinks";
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

exports.createSharedLink = function(accessToken, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/sharedlinks/listings";
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

exports.getSharedLink = function(accessToken, id){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/sharedlinks/" + id ;
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

exports.createSharedLinkSearch = function(accessToken, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/sharedlinks/search";
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


exports.getMyListings = function(accessToken, query){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/my/listings";
        if (query){
            url += "?" + query;
        }
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

exports.getOfficeListings = function(accessToken, query){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/office/listings";
        if (query){
            url += "?" + query;
        }
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

exports.getCompanyListings = function(accessToken, query){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/company/listings";
        if (query){
            url += "?" + query;
        }
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

exports.createListing = function(accessToken, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings";
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

exports.createEmailMustache = function(accessToken, id){

    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings" +
        "?_expand=Photos&_filter=SavedSearch Eq '" + id + "'";

        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };

        axios(options).then(function(result){
            exports.createEmailLinks(accessToken, id).then(function(links){
                exports.getProfilesMe(accessToken).then(function(profile){
                    var emailData = utilities.getEmailData(result.data);
                    var mustacheData = [];

                    for (var i=0; i<emailData.length; i++){
                        var title = utilities.createTitle(emailData[i]);
                        var specs = utilities.createSpecs(emailData[i]);
                        var url = "";
                        for (var j=0; j<links.length; j++){
                            var ListingKey = links[j].D.Results[0].ListingIds[0];
                            if (ListingKey === emailData[i].id){
                                url = links[j].D.Results[0].SharedUri;
                                break;
                            }
                        }
                        var data = {
                            p_price: utilities.formatPrice(emailData[i].price),
                            p_image: emailData[i].photo,
                            p_name: title,
                            p_address: emailData[i].address,
                            p_city: emailData[i].city,
                            p_description: emailData[i].description,
                            p_spec: specs,
                            p_url: url
                        }
                        mustacheData.push(data);
                    }
                    profile = profile.D.Results[0];
                    var retProfile = utilities.getProfileData(profile);
                    var ret = {
                        listings: mustacheData,
                        profile: retProfile
                    };
                    resolve(ret);
                }).catch(function(err){
                    reject(err);
                });
            
            }).catch(function(err){
                reject(err);
            });
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.createEmailLinks = function(accessToken, id){

    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings" +
        "?_filter=SavedSearch Eq '" + id + "'";

        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };

        axios(options).then(function(result){
            var promises = [];
            var listings = result.data;
            if (listings.D && listings.D.Results){
                for (var i=0; i<listings.D.Results.length; i++){
                    var f = listings.D.Results[i].StandardFields;
                    var sharedLinkBody = {};
                    sharedLinkBody.D = {
                        ListingIds: [f.ListingKey]
                    };
                    var promise = exports.createSharedLink(accessToken, sharedLinkBody);
                    promises.push(promise);
                }
            }
            Promise.all(promises).then(function(links){
                resolve(links);
            }).catch(function(err){
                reject(utilities.processAxiosError(err));
            });

        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getProfilesMe = function(accessToken){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/system";
        var headers = utilities.createHeaders(accessToken);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(system){
            exports.getAccountProfile(accessToken, system.data.D.Results[0].Id).then(function(profile){

                var mlsId = system.data.D.Results[0].MlsId;
                var f = system.data.D.Results[0].DisplayCompliance;
                var disclaimer = f[mlsId].DisclaimerText;
                profile.D.Results[0].disclaimer = disclaimer;
                resolve(profile);
            }).catch(function(err){
                reject(err);
            });
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}
