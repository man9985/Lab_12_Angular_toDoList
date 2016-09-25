var app = angular.module('myModule', []);
// This is declaring a module.
app.controller('myController', function($scope){
$scope.toDo = ['Grocery Shopping', 'Clean', 'Take out Garbage', 'Make Bed'];
$scope.addToDo = function(input){
    $scope.toDo.push(input);
};
});
