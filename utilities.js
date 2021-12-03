const Strings = {};
Strings.orEmpty = function( entity ) {
    return entity || "";
};


exports.processAxiosError = function(error){
    if (error.response){
        return(error.response.data);
    } else if (error.request){
        return(error.request);
    } else {
        return(error.message);
    }
}

exports.createHeaders = function(accessToken){
    var bearerToken = "Bearer " + accessToken;
    var headers = {
        "Authorization" : bearerToken,
        "X-SparkApi-User-Agent": "MurbanSW"
    };
    return headers;
}

exports.getAccessToken = function(req){
    var authorization = req.get("Authorization");

    if (authorization){
        var array = authorization.split(" ");
        var token = array[1];
        return token;
    } else {
        return "noAuthorizationHeader";
    }
}

exports.getEmailData = function(listings){
    var emailData = [];
    if (listings.D && listings.D.Results){
        for (var i=0; i<listings.D.Results.length; i++){
            var listing = {};
            var f = listings.D.Results[i].StandardFields;
            
            listing.baths = f.BathsTotal;
            listing.beds = f.BedsTotal;

            var address = 
                Strings.orEmpty(f.StreetNumber) + " " +
                Strings.orEmpty(f.StreetDirPrefix) + " " +
                Strings.orEmpty(f.StreetName) + " " +
                Strings.orEmpty(f.StreetSuffix) + " "  +
                Strings.orEmpty(f.StreetDirSuffix) + " " +
                Strings.orEmpty(f.StreetAdditionalInfo);
            
            listing.address = address

            var city = f.City + ", " + f.StateOrProvince;
            listing.city = city;
            listing.sqft = f.BuildingAreaTotal;
            listing.description = f.PublicRemarks;

            listing.price = f.ListPrice;

            if (f.Photos && f.Photos.length){
                listing.photo = f.Photos[0].Uri300;
            }

            emailData.push(listing);
        }
    }
    return(emailData);
}


exports.getAccountData = function(accounts){
    var account = {};
    if (accounts.D && accounts.D.Results.length){
    
        var f = accounts.D.Results[0];

        account.first = f.FirstName;
        account.last = f.LastName;

        var i = 0;
        if (f.Emails){
            for (i = 0; i<f.Emails.length; i++){
                if (f.Emails[i].ProfileDisplay === true){
                    account.email = f.Emails[i].Address;
                }
            }
        }
      
        if (f.Phones){
            for (i = 0; i<f.Phones.length; i++){
                if (f.Phones[i].ProfileDisplay === true){
                    account.phone = f.Phones[i].Number;
                }
            }
        }

        if (f.Websites){
            for (i = 0; i<f.Websites.length; i++){
                if (f.Websites[i].ProfileDisplay === true){
                    account.website = f.Websites[i].Uri;
                }
            }
        }

        if (f.Addresses){
            for (i = 0; i<f.Addresses.length; i++){
                if (f.Addresses[i].ProfileDisplay === true){
                    account.address = f.Addresses[i].Address;
                }
            }
        }

        
    }
    return(account);
}

exports.numberWithCommas = function(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.createTitle = function(emailData){

    var title = "";
    
    if (emailData.description){
        var strArray = emailData.description.split(' ');
        if (strArray.length >= 3){
            title = strArray[0]+" "+strArray[1]+" "+strArray[2];
        }
    }
    return(title);
}

exports.createSharedLinkBody = function(listings){
    var sharedLinkBody = {};
    var listingIds = [];
    if (listings.D && listings.D.Results){
        for (var i=0; i<listings.D.Results.length; i++){
            var f = listings.D.Results[i].StandardFields;
            listingIds.push(f.ListingKey);
        }
        sharedLinkBody.D = {
            ListingIds: listingIds
        };
    }
    return(sharedLinkBody);
}

exports.formatPrice = function(price){
    var formattedPrice = "$" + exports.numberWithCommas(price);
    return formattedPrice;
}

exports.createSpecs = function(emailData){
    var beds = emailData.beds;
    var baths = emailData.baths;
    var sqft = emailData.sqft;

    var specs = beds + " bd, " + baths + " ba, " + exports.numberWithCommas(sqft) + " sqft";
    return(specs);
}