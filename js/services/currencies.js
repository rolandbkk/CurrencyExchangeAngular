 // Cant grant Access to this Amazon S3 bucket.Json get & jsonp solution doesnt work with this link. 
app.factory('currencies', ['$http', function($http) { 
  return $http.get('https://s3-ap-southeast-2.amazonaws.com/ubiquity-utilities/frontend_test/currencies.json') 
            .success(function(data) { 
                console.log('success');
              return data; 
            }) 
            .error(function(err) { 
                console.log("error $http.get('https://s3-ap-southeast-2.amazonaws.com/ubiquity-utilities/frontend_test/currencies.json') ");
              return err; 
            }); 
}]);