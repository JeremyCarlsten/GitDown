$.fn.gitDownGithubEventsList = (username, maxNumber) =>
  element = $(this);
  $.ajax("https://api.github.com/users/" + username + "/events", {dataType: 'json'})
    .done (data) =>
      $(data).each (i, item) =>
        if (i <= maxNumber)
#          $(element).append('<h3>'+ item +'</h3>')
          $(element).append('<p>' + item.type + '</p>')

    .fail (jqxhr, textStatus, error) =>
      console.log("you've messed it all up." + error)

