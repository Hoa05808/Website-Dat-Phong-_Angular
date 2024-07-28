var app = angular.module('app', []);

app.controller('AppController',myFunction);

function myFunction($scope){
    $scope.pagetitle = "Trang Chủ";
    $scope.settitle = function(title){
        $scope.pagetitle = title;
    }
};

app.controller('gioithieuController', function ($scope) {
    $scope.pagetitle = 'Gioi thiệu ';
    // Hàm để thiết lập tiêu đề cho từng trang
    $scope.setPageTitle = function (title) {
        $scope.pageTitle = title;
    };
});
app.controller('phongController', function ($scope) {
    $scope.pagetitle = 'phong ';
    // Hàm để thiết lập tiêu đề cho từng trang
    $scope.setPageTitle = function (title) {
        $scope.pageTitle = title;
    };
});
app.controller('nhahangController', function ($scope) {
    $scope.pagetitle = 'nhà hàng  ';
    // Hàm để thiết lập tiêu đề cho từng trang
    $scope.setPageTitle = function (title) {
        $scope.pageTitle = title;
    };
});
app.controller('matxaController', function ($scope) {
    $scope.pagetitle = 'mát xa ';
    // Hàm để thiết lập tiêu đề cho từng trang
    $scope.setPageTitle = function (title) {
        $scope.pageTitle = title;
    };
});
app.controller('phonggymController', function ($scope) {
    $scope.pagetitle = 'phòng gym ';
    // Hàm để thiết lập tiêu đề cho từng trang
    $scope.setPageTitle = function (title) {
        $scope.pageTitle = title;
    };
});