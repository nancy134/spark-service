const axios = require('axios');
const utilities = require('./utilities');

exports.getProperties = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Property";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getMembers = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Member";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getOffices = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Office";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getOpenHouses = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/OpenHouse";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getProperty = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Property" + "('" + id + "')";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getMember = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Member" + "('" + id + "')";
        var headers = utilities.createHeaders(body.access_token);
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




exports.getOffice = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Office" + "('" + id + "')";
        var headers = utilities.createHeaders(body.access_token);
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



exports.getOpenhouse = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/Reso/OData" + "/Openhouse" + "('" + id + "')";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getListings = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getSystem = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/system";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getListingCarts = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getListing = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings/" + id ;
        var headers = utilities.createHeaders(body.access_token);
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


exports.getListingCart = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listingcarts/" + id ;
        var headers = utilities.createHeaders(body.access_token);
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

exports.getListingPhotos = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/listings/" + id + "/photos" ;
        var headers = utilities.createHeaders(body.access_token);
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


exports.getAccount = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/accounts/" + id ;
        var headers = utilities.createHeaders(body.access_token);
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

exports.getContacts = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts";
        var headers = utilities.createHeaders(body.access_token);
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


exports.getContact = function(id, body){
    return new Promise(function(resolve, reject){
        var url = "https://sparkapi.com/v1" + "/contacts/" + id ;
        var headers = utilities.createHeaders(body.access_token);
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