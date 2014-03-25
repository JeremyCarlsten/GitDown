githubApiUserUrl = "https://api.github.com/users/"

$.fn.pullDownGithubEvents = (username, maxNumber) =>
  element = $(this)
  $.getJSON(githubApiUserUrl + username + "/events")
  .done (data) =>
    console.log(data)
    buildHtml(data)
  .fail (jqxhr, textStatus, error) =>
    console.log("you've messed it all up." + error)

buildHtml = (data) =>
  $(data).each (i, item) =>
    if (i <= maxNumber)
      $(element).append('<p>' + item.type + '</p>')
