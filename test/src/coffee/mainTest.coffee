USERNAME = 'jeremycarlsten'
MAX_NUMBER = 10

#$.mockAjax("json", {
#  'users': {status: -1},
#  'users/(.*)': (matches) =>
#    return {status: 1, user: 'sample user'}
#})

test "Test Github is up", =>
#  expect(1)
  stop()
  $.ajax 'https://api.github.com/users/jeremyCarlsten/events', (data) =>
    ok(data, "Github API is up and running")
    start()


test "Pull Down Events", =>
  expect(1)

  stop()
  $.getJSON '/users', (data) =>
    ok(data, "data was returned from the server")
    equal(data.status, '-1', "no user was specified returned -1")
    start();
