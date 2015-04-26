  angular.module('jokeApp')
  .controller('commentController',function($scope,data) {
      this.userLine = {};
      this.userLine.author = "anonymous"
      this.userLine.likes = 0;       
      this.userLine.voted = "n/a";
      this.userLine.colorUp = 'na';
      this.userLine.colorDown = 'na';
      this.addPunchline = function (joke) {
        data.updateForm(joke,this.userLine);
        data.updateForm(this.joke,this.userLine);
        /*
        joke.punchline.push(this.userLine);
        */
        this.userLine = {};
        this.userLine.author = "anonymous"
        this.userLine.likes = 0;       
        this.userLine.voted = "n/a";
        this.userLine.colorUp = 'na';
        this.userLine.colorDown = 'na';    
      };
  });