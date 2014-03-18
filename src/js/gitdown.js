(function() {
  $.fn.gitDownGithubEventsList = (function(_this) {
    return function(username, maxNumber) {
      var element;
      element = $(_this);
      return $.ajax("https://api.github.com/users/" + username + "/events", {
        dataType: 'json'
      }).done(function(data) {
        return $(data).each(function(i, item) {
          if (i <= maxNumber) {
            return $(element).append('<p>' + item.type + '</p>');
          }
        });
      }).fail(function(jqxhr, textStatus, error) {
        return console.log("you've messed it all up." + error);
      });
    };
  })(this);

}).call(this);
