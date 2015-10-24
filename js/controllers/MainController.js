app.controller('mainController', function($scope, $http,currencies) {

 // Cant grant Access to this Amazon S3 bucket.Json get & jsonp solution doesnt work with this link. 
 //   var url = "https://s3-ap-southeast-2.amazonaws.com/ubiquity-utilities/frontend_test/currencies.json?callback=JSON_CALLBACK";

   //   $http.jsonp(url)
   //   .success(function(data){
     //    console.log('success');
   //   })
    //  .error(function () {
    //    console.log('error')
  //    });



 // using local stored json for testing the json paramater parsing.set start parameter use first value in json array as default.
    $scope.contents = null;
    $http.get('currency.json')
        .success(function(data) {
            $scope.contents=data;

           $scope.from_label_output =$scope.contents[0].from_label;
           $scope.to_label_output = $scope.contents[0].to_label;
           $scope.img_url_from = $scope.contents[0].from_icon;
           $scope.img_url_to = $scope.contents[0].to_icon;
           $scope.ratio = $scope.contents[0].ratio;
           
           $scope.from_num = '1';   
           $scope.to_num = '0.78' ;

        })
        .error(function(data,status,error,config){
            $scope.contents = [{heading:"Error",description:"Could not load json   data"}];
        });



});

