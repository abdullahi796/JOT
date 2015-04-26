
angular.module('jokeApp', [])
  .controller('jokeController', function($scope, data , setupData) {

    $scope.jokes = [];
    $scope.num = 0;
    
    (function(){
      setupData.getSetup($scope.jokes,$scope,$scope.num);
    })(); 
    
    
    
    
    
    /*
    $scope.setupRan = false;
    $scope.punchlineRan = false;
    
    if($scope.setupRan === true){
      $scope.punchlineRan = punchlineData.getPunchline($scope.jokes,$scope,$scope.setupRan);   
    }
    else{
      $scope.setupRan = setupData.getSetup($scope.jokes,$scope);
    }
    
    if($scope.punchlineRan === false){
      $scope.punchlineRan = punchlineData.getPunchline($scope.jokes,$scope,$scope.punchlineRan);       
    }
    */
    
    /*
    (function(){
      setupData.getSetup($scope.jokes,$scope);
      $scope.setupRan = true;
    })();
    
    (function(){
      punchlineData.getPunchline($scope.jokes,$scope);
      $scope.punchlineRan = true;
    })();
    
    if($scope.setupRan === false){
      setupData.getSetup($scope.jokes,$scope);      
    }
    
    if($scope.punchlineRan === false){
      punchlineData.getPunchline($scope.jokes,$scope);     
    }
    */
    console.log("Punchline Data : " + $scope.punchlineRan)
    console.log('Setup Data : ' + $scope.setupRan)
  
          
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

