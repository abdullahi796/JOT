angular.module('jokeApp')
.factory('data',function dataFactory() {
    return {
        updateForm: function(joke,userLine) {
         //alert('Updated Form');
          joke.punchline.push(userLine);
        },
        updateCloud: function(joke,userLine) {
          Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
          var Punchline = Parse.Object.extend("Punchline");
          var punchline = new Punchline();
           
          punchline.set("text", userLine.text);
          punchline.set("author", "Sean Plott");
          punchline.set("likes", userLine.likes);
          punchline.set('voted',userLine.voted);
          punchline.set('colorUp',userLine.colorUp);
          punchline.set('colorDown',userLine.colorDown);   
          punchline.set('parent',joke.setup.objectId)
           
          punchline.save(null, {
            success: function(punchline) {
              // Execute any logic that should take place after the object is saved.
              alert('New object created with objectId: ' + punchline.id);
            },
            error: function(punchline, error) {
              // Execute any logic that should take place if the save fails.
              // error is a Parse.Error with an error code and message.
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });     
        }
        
    };
});
