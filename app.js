(function() {
  var app = angular.module('jokeApp', []);
  app.controller('jokeController',function () {
    this.alertClick = function() {
        alert('Click');
    }
    this.jokes = [
        {
        setup:{
            text: 'Why did the chicken run across the road?',
            author: 'Abdullahi Mahamed',
        },
        punchline: [
            {
              text: 'She wanted to stretch her legs.',
              author:'Jackie Marthart ',
              likes: 3,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: 'To prove to the possum it could actually be done!',
              author:'Larry Ball',
              likes: 13,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: 'She was afraid someone would caesar!',
              author:'Ibrahim Mahamed',
              likes: 5,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: 'She wanted to lay it on the line.',
              author:'Kate Hammer',
              likes: 10,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
        ],
        num: 1
            
        },
        {
        setup: {
            text: 'A horse walks into a bar The bartender asks "Why the long face? ',
            author: 'Abdullahi Mahamed'
        },
        punchline: [
            {
              text: 'The horse says I m clinically depressed',
              author:'Jackie Marthart ',
              likes: 5,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: 'The horse, incapable of speaking, proceeds to run around the bar, breaking several items in the process.',
              author:'Larry Ball',
              likes: 25,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
        ],
        num: 2
    },
        {
        setup: {
            text: 'Why was the blonde fired from the M&Ms factory ?',
            author: 'Abdullahi Mahamed'
        },
        punchline: [
            {
              text: 'For absenteeism and theft of property.',
              author:'Jackie Marthart ',
              likes: 1,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: "For throwing out all the W's",
              author:'Larry Ball',
              likes: 45,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
            {
              text: 'For trying to alphabetize them',
              author:'Ibrahim Mahamed',
              likes: 10,          
              voted: "n/a",
              colorUp:'na',
              colorDown:'na'
            },
        ],
        num: 3
    }    
    ];
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
  app.controller('panelController',function() {
        this.tab = 1;
   
        this.isPanel = function(check) {
            return this.tab === check;
        };
        
        this.panelClick = function(newValue) {
            this.tab = newValue;
        };
  });
  
  app.controller('commentController',function() {
      this.userLine = {};
      this.userLine.author = "anonymous"
      this.userLine.likes = 0;       
      this.userLine.voted = "n/a";
      this.userLine.colorUp = 'na';
      this.userLine.colorDown = 'na';
      this.addPunchline = function (joke) {
        joke.punchline.push(this.userLine);
        this.userLine = {};
        this.userLine.author = "anonymous"
        this.likes = 0;         
        this.voted = "n/a";
        this.colorUp = 'na';
        this.colorDown = 'na';      
      };
  });
  
  
  app.directive('jokeSetup',function(){
    return{
      restrict: 'E',
      templateUrl: 'joke-setup.html'
    };
  });
  
  app.directive('jokePunchline',function(){
    return{
      restrict: 'E',
      templateUrl: 'joke-punchline.html'
    };
  });
  
    
  app.directive('comment',function(){
    return{
      restrict: 'E',
      templateUrl: 'comment.html'
    };
  });
})();