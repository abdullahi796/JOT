angular.module('userApp')
.factory('user',function dataFactory() {
    return {
        logIn: function(username,password) {
            Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
            Parse.User.logIn(username, password, {
              success: function(user) {
                new indexView();
              },
              error: function(user, error) {
                alert('Error');
              }
            });
            
            if (Parse.User.current()) {
              new indexView();
            } else {
              new LogInView();
            }
            
             var indexView = Parse.View.extend({
              urlRoot: "/index.html"
            });
            
             var LogInView = Parse.View.extend({
              urlRoot: "login.html"
            });
            
        }
    };
});
