 // mobile toggle
app.controller("Numpad",function($scope){


$scope.addNum = addNum;
$scope.deleteLastNum = deleteLastNum;
$scope.addDecimal = addDecimal;
$scope.changeRate = changeRate;








function changeRate() {

    $scope.to_num =  parseInt($scope.from_num, 10)*$scope.ratio;



}




function addNum(num) {

if($scope.from_num.length<=4){


$scope.from_num = $scope.from_num + num;
changeRate();


}

}

function deleteLastNum() {
  $scope.from_num  = $scope.from_num.slice(0, - 1);
changeRate();
}

function addDecimal() {
    if($scope.from_num.length<=4){
  $scope.from_num = $scope.from_num + ".";
 changeRate();
}}




   
});
