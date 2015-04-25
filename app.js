(function() {
  var app = angular.module('jokeApp', []);
  app.controller('jokeController',function () {
    this.header = 'The who';
    this.alertClick = function() {
        alert('Click');
    }
    this.jokes = [
        {
        setup:{
            text: 'Why did the chicken run across the road?',
            author: 'Abdullahi Mahamed'
        },
        punchline: [
            {
              text: 'She wanted to stretch her legs.',
              author:'Jackie Marthart ',
            },
            {
              text: 'To prove to the possum it could actually be done!',
              author:'Larry Ball',
            },
            {
              text: 'She was afraid someone would caesar!',
              author:'Ibrahim Mahamed',
            },
            {
              text: 'She wanted to lay it on the line.',
              author:'Kate Hammer',
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
            },
            {
              text: 'The horse, incapable of speaking, proceeds to run around the bar, breaking several items in the process.',
              author:'Larry Ball',
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
            },
            {
              text: "For throwing out all the W's",
              author:'Larry Ball',
            },
            {
              text: 'For trying to alphabetize them',
              author:'Ibrahim Mahamed',
            },
        ],
        num: 3
    }    
    ];
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
      this.addPunchline = function (joke) {
        joke.punchline.push(this.userLine)
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