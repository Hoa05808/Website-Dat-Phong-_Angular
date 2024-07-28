// khai báo 1 ang nhân viên
window.gioithieuchucontroller = function ($scope) {
    // $scope.title = "giới thiệu "
    // $scope.thongtin = function () {
    //     $scope.ten = "  ";
    //     $scope.ngaysinh = "";
    //     $scope.chuyennganh = " ";

    // }
    $scope.nhanvien = [
        {
            ten: 'Dang an hoa',
            namsinh: 2003,
            chuyennganh: 'ptpm'
        },
        {
            ten: 'huy',
            namsinh: 2003,
            chuyennganh: 'ptpm'
        }

    ];
    $scope.createStudent=function(){
        let newStudent={
            ten:$scope.student.name,
            namsinh:$scope.student.year,
            chuyennganh:student.couse
        }
        console.log(newStudent);
        $scope.nhanvien.push(newStudent)
    }
}