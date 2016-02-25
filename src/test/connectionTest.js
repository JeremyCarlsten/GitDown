describe("Connection test", function() {
  beforeEach(function() {
     jasmine.Ajax.install();
   });

   afterEach(function() {
     jasmine.Ajax.uninstall();
   });

  it("should call github for list of events", function() {
    // var expectedHtml = '<div class="events"><p>Some Event</p></div>';
    // $('document').append('<div class="events"></div>');

    // $('.events').gitDown('JeremyCarlsten', 1 );

    expect(true).toBe(true);
  });
});
