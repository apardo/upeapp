angular.module('upe', ['ionic'])

.controller('ItemCtrl', function($scope, Modal) {
  // No need for testing data anymore
  $scope.items = [];

  // Create and load the Modal
  Modal.fromTemplateUrl('new-item.html', function(modal) {
    $scope.itemModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createItem = function(item) {
    $scope.items.push(item);
    $scope.itemModal.hide();
  };

  // Open our new item modal
  $scope.newItem = function() {
    $scope.itemModal.show();
  };

  // Close the new item modal
  $scope.closeNewItem = function() {
    $scope.itemModal.hide();
  };
});