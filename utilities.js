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

            listing.address = address.trim();

            var city = f.City + ", " + f.StateOrProvince;
            listing.city = city;
            listing.sqft = f.BuildingAreaTotal;
            listing.description = f.PublicRemarks;

            listing.price = f.ListPrice;
            listing.id = f.ListingKey;

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

    var specs = "";
    if (beds){
        specs += beds + " bed ";
    }
    if (baths){
        specs += baths + " bath ";
    }
    if (sqft){
        specs += exports.numberWithCommas(sqft) + " sq ft";
    }
    return(specs);
}

exports.getProfileData = function(profile){

    var ret = {};
    ret.name = profile.Name;

    ret.company = profile.Company;
    ret.disclaimer = profile.disclaimer;

    var email = null;
    if (profile.Emails){
        for (var i=0; i<profile.Emails.length; i++){
            if (profile.Emails[i].Primary === true && profile.Emails[i].ProfileDisplay === true){
                email = profile.Emails[i].Address;
            }
        }
    }
    ret.email = email;

    var phone = null;
    if (profile.Phones){
        for (i=0; i<profile.Phones.length; i++){
            if (profile.Phones[i].Primary === true && profile.Phones[i].ProfileDisplay === true){
                phone = profile.Phones[i].Number;
            }
        }
    }
    ret.phone = phone;

    var website = null;
    if (profile.Websites){
        for (i=0; i<profile.Websites.length; i++){
            if (profile.Websites[i].Primary === true && profile.Websites[i].ProfileDisplay === true){
                website = profile.Websites[i].Uri;
            }
        }
    }
    ret.website = website;


    var image = null;
    if (profile.Images){
        for (i=0; i<profile.Images.length; i++){
            if (profile.Images[i].Primary === true){
                image = profile.Images[i].Uri;
            }
        }
    }
    ret.image = image;

    var address = null;
    if (profile.Addresses){
        for (i=0; i<profile.Addresses.length; i++){
            if (profile.Addresses[i].Primary === true){
                address = profile.Addresses[i].Address;
            }
        }
    }
    ret.address = address;

    return (ret);
}


exports.isExpired = function(link){
    if (!link) return true;
    var dt = new Date();
    var now = dt.getTime(); 
    var expiresAt = Date.parse(link.expiresAt);

    var diff = expiresAt - now;
    var days = Math.round((expiresAt-now)/(1000*60*60*24));
    if (days < 7) return true;
    else return false;
}

exports.createSparkContactData = function(json2){

    var contact = {
        D: {
        }
    }
   
    if (json2.first && json2.last && !contact.D.DisplayName){
        contact.D.DisplayName = json2.first + " " + json2.last;
    }
    if (json2.email && !contact.D.PrimaryEmail){
        contact.D.PrimaryEmail = json2.email;
    }
    if (json2.first && !contact.D.GivenName){
        contact.D.GivenName = json2.first;
    }
    if (json2.last && !contact.D.FamilyName){
        contact.D.FamilyName = json2.last;
    }
    if (json2.middle && !contact.D.MiddleName){
        contact.D.MiddleName = json2.middle;
    }
    if (json2.phone_work && !contact.D.WorkPhoneNumber){
        contact.D.WorkPhoneNumber = json2.phone_work;
    }
    if (json2.phone_mobile && !contact.D.MobilePhoneNumber){
        contact.D.MobilePhoneNumber = json2.phone_mobile;
    }
    if (json2.phone_other && !contact.D.OtherPhoneNumber){
        contact.D.OtherPhoneNumber = json2.phone_other;
    }
    if (json2.phone_home && !conatct.D.HomePhoneNumber){
        conatct.D.HomePhoneNumber = jsonn2.phone_home;
    }
    if (json2.phone_primary && !contact.D.PrimaryPhoneNumber){
        contact.D.PrimaryPhoneNumber = json2.phone_primary;
    }    
    if (json2.phone_pager && !contact.D.PagerPhoneNumber){
        contact.D.PagerPhoneNumber = json2.phone_pager;
    }
    if (json2.address_home_street && !contact.D.HomeStreetAddress){
        contact.D.HomeStreetAddress = json2.address_home_street;         
    }
    if (json2.address_home_city && !contact.D.HomeLocality){
        contact.D.HomeLocality = json2.address_home_city;         
    }
    if (json2.address_home_state && !contact.D.HomeRegion){
        contact.D.HomeRegion = json2.address_home_state;         
    }
    if (json2.address_home_zip && !contact.D.HomePostalCode){
        contact.D.HomePostalCode = json2.address_home_zip;         
    }
    if (json2.address_work_street && !contact.D.WorkStreetAddress){
        contact.D.WorkStreetAddress = json2.address_work_street;         
    }
    if (json2.address_work_city && !contact.D.WorkLocality){
        contact.D.WorkLocality = json2.address_work_city;         
    }
    if (json2.address_work_state && !contact.D.WorkRegion){
        contact.D.WorkRegion = json2.address_work_state;         
    }
    if (json2.address_work_zip && !contact.D.WorkPostalCode){
        contact.D.WorkPostalCode = json2.address_work_zip;         
    }
    return contact;
}
