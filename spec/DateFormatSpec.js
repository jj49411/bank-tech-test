describe('DateFormat', function() {
  var today;

  beforeEach(function() {
    today = new Date(2020,1,14)
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should return the date of today', function() {
    jasmine.clock().mockDate(today);    
    var date = new DateFormat;
    expect(date.dateFormat()).toEqual('14/02/2020')
  });

}); 
