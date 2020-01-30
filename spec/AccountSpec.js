describe('Account', function() {
  var account = new Account();
  var today;

  beforeEach(function() {
    account = new Account;
    today = new Date(2020,1,14);
    jasmine.clock().install();
    jasmine.clock().mockDate(today);  
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe('#deposit', function(){
    it('should return the updated balance', function() {
      expect(account.deposit(300)).toEqual(300);
    });
  });

  describe('#withdraw', function(){
    it('should return the updated balance', function() {
      account.deposit(1000);
      expect(account.withdraw(400)).toEqual(600);
    });
  });

  describe('#statement', function() {
    it('should return the account statement', function() {
      account.deposit(1000);
      expect(account.statement()).toContain('14/02/2020 || 1000.00 || || 1000.00')
    });
  });
});

