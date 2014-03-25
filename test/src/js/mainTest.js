(function() {
  var MAX_NUMBER, USERNAME;

  USERNAME = 'jeremycarlsten';

  MAX_NUMBER = 10;

  test("Test Github is up", (function(_this) {
    return function() {
      stop();
      return $.ajax('https://api.github.com/users/jeremyCarlsten/events', function(data) {
        ok(data, "Github API is up and running");
        return start();
      });
    };
  })(this));

  test("Pull Down Events", (function(_this) {
    return function() {
      expect(1);
      stop();
      return $.getJSON('/users', function(data) {
        ok(data, "data was returned from the server");
        equal(data.status, '-1', "no user was specified returned -1");
        return start();
      });
    };
  })(this));

}).call(this);
