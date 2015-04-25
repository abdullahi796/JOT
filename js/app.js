
angular.module('jokeApp', [])
  .controller('jokeController', function($scope, data) {
  
    $scope.jokes = data.allJokes()
    
    this.voteUp = function(punchline) {
      if(punchline.voted === "n/a"){
        punchline.voted = 'up';
        punchline.likes +=1;
        punchline.colorUp='green'
      }
      else if(punchline.voted === 'down'){
        punchline.voted = 'n/a';
        punchline.likes +=1;
        punchline.colorDown='na'
      }
      else if(punchline.voted === 'up'){
        punchline.voted = 'n/a';
        punchline.likes -=1;
        punchline.colorUp='na'
      }
    };
    this.voteDown = function(punchline) {
      if(punchline.voted === "n/a"){
        punchline.voted = 'down';
        punchline.likes -=1;
        punchline.colorDown='red'
      }
      else if(punchline.voted === 'up'){
        punchline.voted = 'n/a';
        punchline.likes -=1;
        punchline.colorUp='na'
      }
      else if(punchline.voted === 'down'){
        punchline.voted = 'n/a';
        punchline.likes +=1;
        punchline.colorDown='na'
      }
    };    
  });

