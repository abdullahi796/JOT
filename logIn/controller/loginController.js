angular.module('userApp',[])
.controller('loginController',function(user) {
    this.username;
    this.password;
    
    this.addUser = function() {
        console.log(this.username)
        console.log(this.password)
        user.logIn(this.username,this.password)
    }
});