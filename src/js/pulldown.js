$.fn.pullDownGithubEvents = function (username, maxNumber) {
    var element = $(this);
    $.ajax("https://api.github.com/users/" + username + "/events", {dataType: 'json'})
        .done(function (data) {
            $(data).each(function (i, item) {
                if (i <= maxNumber) {
                    $(element).append('<p>' + item.type + '</p>');
                }
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            console.log("you've messed it all up." + error)
        });
};