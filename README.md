GitDown
========
Version: 0.1.0

Javascript library to provide recent events from git based on user id.

For example the code below...

```
  ...
  <body>
    <div class="github-events"></div>
  </body>
  ...

  <script>
    $('.github-events').gitdown('JeremyCarlsten', 10);
  </script>

```
would pull down ten of handsome guy's github event list.


Todo:
  - [ ] get rid of that pesky Qunit i used to like.
  - [ ] write more tests... wishing I had followed TDD..
  - [ ] discover what's missing by looking at aforementioned tests.
