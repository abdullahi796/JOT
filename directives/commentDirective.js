
angular.module('jokeApp')
  .directive('comment',function(){
    return{
      restrict: 'E',
      templateUrl: 'directivescomment.html'
    };
  });