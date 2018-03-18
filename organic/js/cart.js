/**
 * Created by Administrator on 2017/8/23.
 */
var cart = angular.module('cart', []);
cart.controller("cartCtrl", function ($scope) {
    $scope.total = 0;
    $scope.step1 = true;
    $scope.step2 = false;
    $scope.step3 = false;
    $scope.checkAll = true;
    $scope.editPanel = false;
    $scope.switchPanel = true;
    $scope.addressChecked = 0;
    $scope.paymentChecked = 0;
    $scope.addressEdit = {};
    $scope.orders = [];
    //products to show
    $scope.products = [
        {
            id: 1,
            title: "有机杏仁",
            desc: "来自有机牧场的有机杏仁，营养好吃不脏手",
            img: "../img/cart/cart-sm-1.jpg",
            price: 30,
            count: 1,
            unit: "KG",
            chose: true
        },
        {
            id: 2,
            title: "有机红椒",
            desc: "来自有机牧场的有机红椒，营养好吃不上火",
            img: "../img/cart/cart-sm-2.jpg",
            price: 16,
            count: 1,
            unit: "KG",
            chose: true
        },
        {
            id: 3,
            title: "有机洋葱",
            desc: "来自有机牧场的有机红椒，营养好吃更健康",
            img: "../img/cart/cart-sm-3.jpg",
            price: 28,
            count: 1,
            unit: "KG",
            chose: true
        }
    ];
    //addresses for choosing
    $scope.addressBook = [
        {
            id: 1,
            name: "菲尼克斯",
            area: "有机省果蔬市果蔬大道",
            address: "蘑菇街1668号",
            phone: "+86 66666666",
            email: "fenix@gmail.com"
        },
        {
            id: 2,
            name: "艾泽拉斯",
            area: "有机省果蔬市果蔬大道",
            address: "蘑菇街1566号",
            phone: "+86 77777777",
            email: "azeroth@gmail.com"
        },
        {
            id: 3,
            name: "尼格买提",
            area: "有机省果蔬市果蔬大道",
            address: "蘑菇街1416号",
            phone: "+86 65658874",
            email: "ngmt@gmail.com"
        }
    ];
    //payment methods for choosing
    $scope.paymentMethods = [
        {id: 1, icon: "icon-transfer", way: "银行转账"},
        {id: 1, icon: "icon-alipay", way: "支付宝"},
        {id: 1, icon: "icon-get", way: "货到付款"}
    ];
    //function subtract
    $scope.subtract = function (index) {
        $scope.products[index].count <= 0 ? $scope.products[index].count = 0 : $scope.products[index].count -= 1;
    };
    //function add
    $scope.add = function (index) {
        $scope.products[index].count += 1;
    };
    //function delete
    $scope.delete = function (index) {
        $scope.products.splice(index, 1);
    };
    $scope.deleteChecked = function () {
        for (var i = 0; i < $scope.products.length;) {
            if ($scope.products[i].chose) {
                $scope.products.splice(i, 1);
            } else {
                i++;
            }
        }
        $scope.checkAll = false;
    };
    //function choose one product
    $scope.selectSingle = function () {
        var num = 0;
        for (var i in $scope.products) {
            if ($scope.products.hasOwnProperty(i) && $scope.products[i].chose) {
                num++;
            }
        }
        num === $scope.products.length ? $scope.checkAll = true : $scope.checkAll = false;
    };
    //function choose all products
    $scope.selectAll = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.products[i].chose = $scope.checkAll;
        }
    };
    //watch products to update the total price
    $scope.$watch("products", function () {
        var tmp = 0;
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].chose) {
                tmp += $scope.products[i].price * $scope.products[i].count;
            }
        }
        $scope.total = tmp;
    }, true);
    //move to step two
    $scope.toStep2 = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].chose) {
                $scope.orders.push($scope.products[i]);
            }
        }
        if ($scope.orders.length) {
            $scope.step1 = false;
            $scope.step2 = true;
        }
    };
    //edit address
    $scope.editHandler = function (index) {
        $scope.editPanel = true;
        $scope.switchPanel = false;
        if ($scope.editPanel) {
            $scope.addressEdit = $scope.addressBook[index];
        }
    };
    //save address
    $scope.saveAddress = function () {
        $scope.editPanel = false;
    };
    //delete address
    $scope.deleteAddress = function (index) {
        if (!$scope.editPanel) {
            $scope.addressBook.splice(index, 1);
        }
    };
    //check address
    $scope.checkAddress = function (index) {
        $scope.addressChecked = index;
    };
    //check payment method
    $scope.checkPayment = function (index) {
        $scope.paymentChecked = index;
    };
    //move to step three
    $scope.toStep3 = function () {
        $scope.step2 = false;
        $scope.step3 = true;
    }
});