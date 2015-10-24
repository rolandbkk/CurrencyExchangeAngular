 // mobile toggle
app.controller("Numpad",function($scope){


$scope.addNum = addNum;
$scope.deleteLastNum = deleteLastNum;
$scope.addDecimal = addDecimal;
$scope.changeRate = changeRate;

$scope.changeMode = changeMode;


function changeMode(fromlab,tolab,fromicon,toicon,ratiolab) {
  

           $scope.from_label_output =fromlab;
           $scope.to_label_output = tolab;
           $scope.img_url_from = fromicon;
           $scope.img_url_to = toicon;
           $scope.ratio = ratiolab;
           



           $scope.to_num = parseInt($scope.from_num, 10)*$scope.ratio;


}




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