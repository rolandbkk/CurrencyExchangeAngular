 // mobile toggle
app.controller("ToggleMobile",function($scope){
   $scope.class2 = "side-menu-main";
$scope.class === "set-body"; 

    
    $scope.pushCans = function(){

                if ($scope.class2 === "side-menu-main"){
            $scope.class = "set-body set-body-open";
              $scope.class2 = "side-menu-main side-main-open";}
         else{   if ($scope.class2 === "side-menu-main side-main-open"){
            $scope.class =  "set-body";
      $scope.class2 =  "side-menu-main";}}



 
};



   
});