var buildHtml, githubApiUserUrl;

githubApiUserUrl = "https://api.github.com/users/";

$.fn.gitDown = function(username, maxNumber) {
    var element;
    element = $(this);
    return $.getJSON(githubApiUserUrl + username + "/events").done(function(data) {
      console.log(data);
      return buildHtml(data, maxNumber, element);
    }).fail(function(jqxhr, textStatus, error) {
      return console.log("you've messed it all up." + error);
    });
  };


buildHtml = (function(_this) {
  return function(data, maxNumber, element) {
    return $(data).each(function(i, item) {
      if (i <= maxNumber) {
        console.log(item);
        console.log(element);
        return $(element).append('<p>' + item.type + '</p>');
      }
    });
  };
})(this);
