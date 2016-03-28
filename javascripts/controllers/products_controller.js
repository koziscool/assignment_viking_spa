viking.controller('ProductsCtrl', ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService) {

  console.log('got to products controller');
  debugger;

  $scope.product;
  $scope.currentCategory = 0;
  $scope.products = [];

  if( !$scope.products.length ) {
    productService.setupProducts();
    $scope.categories = productService.getCategories();
    $scope.products = productService.getProducts();
  }

  $scope.addProduct = function(product) {
    $scope.products.push(product);
  };

  // $scope.setFilter = function(filterParam) {
  //   $scope.currentCategory = filterParam;
  // };

  $scope.findProduct = function( id)  {
    var retProd;

    // console.log($scope.products.length);
    $scope.products.forEach( function(product){ 
      if( product.id === +id ) {
        retProd = product;
      } 
    });

    return retProd;
  }

  if ($stateParams.id !== undefined) {
    $scope.product = $scope.findProduct( $stateParams.id )
  };


}]);