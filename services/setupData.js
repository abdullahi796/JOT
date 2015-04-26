/*
angular.module('jokeApp')
.factory('call',function dataFactory() {
    var setupArr = []
    var jokes = [];
    return {
        initJokes:function() {
          Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
          var setup = Parse.Object.extend("Setup");
          var query = new Parse.Query(setup);     
          var length = 0;
                
          query.count().then(function(count) {
            for(var i=0;i<count;i++){
              var obj = [
                {
                    setup:{
                      text: ' ',
                      author: ' ',
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
                    num: 1
                  }
                ];
                
              jokes.push(obj)
            }
          });
        },
        getData: function() {
              var setupArrLength = 0;
              Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
              console.log('Got Data from cloud')
              var setup = Parse.Object.extend("Setup");
              var query = new Parse.Query(setup);
              query.find({
                success: function(results) {
                 // alert("Successfully retrieved " + results.length + " scores.");
                  // Do something with the returned Parse.Object values
                    for (var c = 0; c < results.length; c++) { 
                      var object = results[c];
                      var setupObj = {
                        text: object.get('text'),
                        author: object.get('author'),
                        objectId: object.id
                      }
                      setupArr.push(setupObj);
                    }
                },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              }); 
              return setupArr
        },
        getJokes: function() {
          return jokes
        }
    };
});
*/