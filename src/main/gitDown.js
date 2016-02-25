var githubApiUserUrl;
var username;
githubApiUserUrl = "https://api.github.com/users/";

var buildHtml = function (data, maxNumber, element) {
    return $(data).each(function (i, item) {
        if (i <= maxNumber) {
            if (item.type == "PushEvent") {
                parsePushEvents(element, item);
            } else if (item.type == "CreateEvent") {
                parseCreateEvents(element, item);
            }

            //todo:
            // IssueCommentEvent
            // WatchEvent
            // ForkEvent
        }
    });
};

$.fn.gitDown = function (usrname, maxNumber) {
    var element;
    element = $(this);
    username = usrname;
    $.getJSON(githubApiUserUrl + usrname + "/events").done(function (data) {
        return buildHtml(data, maxNumber, element);
    }).fail(function (jqxhr, textStatus, error) {
        return console.log("you've messed it all up." + error);
    });
};

function parsePushEvents(element, event) {
    $(element).append('<h3>Commited to ' + getRepoName(event.repo.name) + '</h3>');
    $(element).append('<p>' + formatDate(event.created_at) + '</p>');
    $(event.payload.commits).each(function (c, commit) {
        $(element).append('<p>' + commit.sha.substring(0, 5) + ' : ' + commit.message + '</p>');
    });
}

function parseCreateEvents(element, event) {
    console.log(event);
    $(element).append('<h3>Created new repository ' + getRepoName(event.repo.name) + '</h3>');
    $(element).append('<p>' + event.created_at + '</p>');
    $(event.payload.commits).each(function (c, commit) {
        $(element).append('<p>' + commit.sha.substring(0, 5) + ' : ' + commit.message + '</p>');
    });
}

function getRepoName(name) {
    console.log(username.length);
    return name.substring(username.length + 1);
}

function formatDate(dateStr) {
    var date = new Date(dateStr);
    console.log(date);
    console.log(date.getMonth());

    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}
