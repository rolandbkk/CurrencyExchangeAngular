 // mobile toggle
app.controller("ChangeController",function($scope){

$scope.changeMode = changeMode;


function changeMode(fromlab,tolab,fromicon,toicon,ratiolab) {
  

           $scope.from_label_output =fromlab;
           $scope.to_label_output = tolab;
           $scope.img_url_from = fromicon;
           $scope.img_url_to = toicon;
           $scope.ratio = ratiolab;

           $scope.to_num = parseInt($scope.from_num, 10)*$scope.ratio;


 }

});