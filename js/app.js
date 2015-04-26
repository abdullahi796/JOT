
angular.module('jokeApp', [])
  .controller('jokeController', function($scope, data) {
    
    $scope.called = false;

    //setInterval(function() {data.getData()}, 3000);
    
    $scope.jokes = [];
  
    /*
    Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
    var setup = Parse.Object.extend("Setup");
    var query = new Parse.Query(setup);     
    
    query.count({
      success: function(count) {
        // The count request succeeded. Show the count
        for(var i=0;i<count;i++){
          data.pushJoke($scope.jokes)  
          $scope.$apply();
        }
        alert("Sean has played " + $scope.jokes.length + " games");
      },
      error: function(error) {
        // The request failed
      }
    });
    */
    data.updateSetup($scope.jokes,$scope);
    $scope.$apply();
    
          
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

