var githubApiUserUrl;

githubApiUserUrl = "https://api.github.com/users/";

var buildHtml = function(data, maxNumber, element) {
  return $(data).each(function(i, item) {
    if (i <= maxNumber) {
      return $(element).append('<p>' + item.type + '</p>');
    }
  });
};

$.fn.gitDown = function(username, maxNumber) {
    var element;
    element = $(this);
    $.getJSON(githubApiUserUrl + username + "/events").done(function(data) {
      return buildHtml(data, maxNumber, element);
    }).fail(function(jqxhr, textStatus, error) {
      return console.log("you've messed it all up." + error);
    });
};
