var app = angular.module("myApp", []);
app.controller("employeeCtrl", function($scope){

  $scope.employeeList = [
    {
      emp_id:'emp_01',
      firstName:'Lokendra',
      lastName: 'Prajapati',
      role: 'Product Manager',
      salary:'50000'
    },
    {
      emp_id:'emp_02',
      firstName:'Alex',
      lastName: 'goerg',
      role:'Developer',
      salary:'20000'
    },
    {
      emp_id: 'emp_03',
      firstName:'Anil',
      lastName:'Tailor',
      role:'Developer',
      salary:'25000'
    }
  ];

});