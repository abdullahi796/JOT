
angular.module('jokeApp')
.factory('data',function dataFactory() {
    
    return {
        updateForm: function(joke,userLine) {
         //alert('Updated Form');
          joke.punchline.push(userLine);
        },
        updateCloud: function() {
          Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");

        },
        updateSetup: function(jokes,$scope) {
            Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
            var setup = Parse.Object.extend("Setup");
            var query = new Parse.Query(setup);     
            query.find({
              success: function(results) {
                alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) { 
                  var object = results[i];
                  var tempJokes = 
                    {
                      setup:{
                        text: object.get('text'),
                        author: object.get('author'),
                        },
                      punchline: [
                        {
                          text: ' ',
                          author: ' ',
                          likes:0,
                          voted: 'n/a',
                          colorUp: 'na',
                          colorDown: 'na',
                          parentId: 'na'
                        }
                      ],
                      num: i
                    };
                      jokes.push(tempJokes);  
                      $scope.$apply();
                    }
                  },
                   error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                    }
                  });
        }
        
    };
});
