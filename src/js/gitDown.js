(function() {
  var buildHtml, githubApiUserUrl;

  githubApiUserUrl = "https://api.github.com/users/";

  $.fn.gitDown = (function(_this) {
    return function(username, maxNumber) {
      var element;
      element = $(_this);
      return $.getJSON(githubApiUserUrl + username + "/events").done(function(data) {
        console.log(data);
        return buildHtml(data);
      }).fail(function(jqxhr, textStatus, error) {
        return console.log("you've messed it all up." + error);
      });
    };
  })(this);

  buildHtml = (function(_this) {
    return function(data) {
      return $(data).each(function(i, item) {
        if (i <= maxNumber) {
          return $(element).append('<p>' + item.type + '</p>');
        }
      });
    };
  })(this);

}).call(this);
