  angular.module('jokeApp')
  .controller('commentController',function() {
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
        this.userLine.likes = 0;       
        this.userLine.voted = "n/a";
        this.userLine.colorUp = 'na';
        this.userLine.colorDown = 'na';    
      };
  });