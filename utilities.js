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

            console.log(listing);
            emailData.push(listing);
        }
    }
    return(emailData);
}
