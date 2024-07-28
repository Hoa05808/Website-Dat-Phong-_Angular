window.ListStudentController = function ($scope, $http){
    $scope.title = "Danh sách ";

    // Thực hiện việc call API
    const apistudents = "http://localhost:3000/students";

    // Tham số $http (là giao thức để thực hiện việc call api)
    // $http.phương thức sử dụng(link api).then()
    function getData() {
        $http.get(apistudents).then(function(response){
            console.log(response);
            // Truy cập vào dữ liệu
            console.log(response.data);
            if (response.status == 200 ){
                $scope.liststudents = response.data;
            }
        })
    }
    getData();
    $scope.deleteStudent= function(deleteId){
        if(deleteId){
            let confim= window.confirm(" bạn có muốn xóa không");
            if(confim){
                $http.delete(
                    `${apistudents}/${deleteId}`
                ).then(function(response){
                    if(response.status==200){
                        alert("xóa thành công ");
                    }
                })
            }
        }
    }


}