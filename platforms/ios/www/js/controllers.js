angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('RecipesCtrl', function($scope, Recipes) {
 $scope.Recipes = new Recipes();
 $scope.Recipes.loadRecipes();
})

.controller('RecipeDetailCtrl', function($scope, $stateParams, Recipes, $sce) {
  $scope.Recipes = new Recipes();
  $scope.Recipes.loadRecipes(function () {
  	$scope.recipe = $scope.Recipes.get($stateParams.recipeId);
  	console.log($scope.recipe);
  });
})

.controller('WorkoutsCtrl', function($scope, Videos, $sce) {
 $scope.Videos = new Videos();
 $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
 $scope.Videos.loadVideos(function () {
 });
 $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})

.controller('AccountCtrl', function($scope) {

});
