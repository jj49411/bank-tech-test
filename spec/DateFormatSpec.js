describe('DateFormat', function() {
  var today;


  it('should return the date of today', function() {
    today = new Date(2020,1,14)
    jasmine.clock().install();
    jasmine.clock().mockDate(today);    
    var date = new DateFormat;
    expect(date.dateFormat()).toEqual('14/02/2020')
    jasmine.clock().uninstall();
  });

  it('should return the date of anotherday', function() {
    anotherday = new Date(2020,1,04)
    jasmine.clock().install();
    jasmine.clock().mockDate(anotherday);    
    var date = new DateFormat;
    expect(date.dateFormat()).toEqual('04/02/2020')
    jasmine.clock().uninstall();
  });
}); 
