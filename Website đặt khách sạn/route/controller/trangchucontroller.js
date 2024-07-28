window.trangchucontroller=function($scope){
 $scope.title="Trang chu"
 $scope.themmoi=function(){
    // lấy  toàn bộ dữ liệu form 
    console.log($scope.inputValue);
    //  lấy ra từng thông tin 
    console.log($scope.inputValue.name);
    console.log($scope.inputValue.add);

 }
 $scope.tinhTong=function(){
    $scope.sum=parseFloat($scope.number.one)+parseFloat($scope.number.two);
 }
}