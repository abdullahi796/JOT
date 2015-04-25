angular.module('jokeApp')
.factory('data',function dataFactory() {
    var jokes = [
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
    
    return {
        allJokes: function() {
            return jokes;
        },
        updateCloud: function(joke,userLine) {
          alert('fdsf');
          joke.punchline.push(userLine);
        }
        
    }
})