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
    console.log(listings);
    console.log("length: "+listings.D.Results.length);
    var emailData = [];
    if (listings.D && listings.D.Results){
        for (var i=0; i<listings.D.Results.length; i++){
            var listing = {};
            //listing.baths = listings.D.Results[i].BathsTotal;
            //listing.beds = listings.D.Results[i].BedsTotal;
            listing.baths = listings.D.Results[i].StandardFields.BathsTotal;
            listing.beds = listings.D.Results[i].StandardFields.BedsTotal;

            listing.StreetNumber = listings.D.Results[i].StandardFields.StreetNumber
            listing.StreetDirPrefix = listings.D.Results[i].StandardFields.StreetDirPrefix
            listing.StreetName = listings.D.Results[i].StandardFields.StreetName

            listing.StreetSuffix = listings.D.Results[i].StandardFields.StreetSuffix
            listing.StreetDirSuffix = listings.D.Results[i].StandardFields.StreetDirSuffix
            listing.StreetAdditionalInfo = listings.D.Results[i].StandardFields.StreetAdditionalInfo
            

            console.log(listing);
            emailData.push(listing);
        }
    }
    return(emailData);
}
