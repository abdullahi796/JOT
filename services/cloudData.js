angular.module('jokeApp')
.factory('data',function dataFactory() {
    var jokes = [
        {
        setup:{
            text: '',
            author: '',
        },
        punchline: [],
        num: 1
            
        },
        {
        setup: {
            text: '',
            author: '',
        },
        punchline: [],
        num: 2
    },
        {
        setup: {
            text: '',
            author: '',
        },
        punchline: [],
        num: 3
    }    
    ];
    
    var punchlineArr = [];
    var setupArr = [];
    
    return {
        getData: function() {
              Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
              var punchline = Parse.Object.extend("Punchline");
              var query = new Parse.Query(punchline);
              query.find({
                success: function(results) {
                  alert("Successfully retrieved " + results.length + " scores.");
                  // Do something with the returned Parse.Object values
                    for (var c = 0; c < results.length; c++) { 
                      var object = results[c];
                      var punchlineObj = {
                        text: object.get('text'),
                        author: object.get('author'),
                        likes: object.get('likes'),
                        voted: object.get('voted'),
                        colorUp: object.get('colorUp'),
                        colorDown: object.get('colorDown'),
                        parentId: object.get('parent')
                      }
                      punchlineArr.push(punchlineObj);
                      console.log(punchlineArr);
                    }
                },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              });
              
              var setup = Parse.Object.extend("Setup");
              var query = new Parse.Query(setup);
              query.find({
                success: function(results) {
                  alert("Successfully retrieved " + results.length + " scores.");
                  // Do something with the returned Parse.Object values
                    for (var c = 0; c < results.length; c++) { 
                      var object = results[c];
                      var setupObj = {
                        text: object.get('text'),
                        author: object.get('author'),
                        objectId: object.id
                      }
                      setupArr.push(setupObj);
                      console.log(setupArr)
                    }
                },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              }); 
              
//              for(var i=0;i<jokes.length;)
              
              
        },
        allJokes: function() {
            return jokes;
        },
        updateForm: function(joke,userLine) {
         //alert('Updated Form');
          joke.punchline.push(userLine);
        },
        updateCloud: function() {
          Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");

        }
        
    };
});