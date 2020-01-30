describe('Account', function() {
  
  transaction = jasmine.createSpyObj('transaction', ['add', 'remove']);
  date = jasmine.createSpyObj('date', ['dateFormat']);
  statement = jasmine.createSpyObj('statement', ['display']);
  var account = new Account(transaction, date, statement);
  var today;

  beforeEach(function() {
    today = new Date(2020,1,14);
    jasmine.clock().install();
    jasmine.clock().mockDate(today);  
    transaction.add.and.returnValue(300);
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
      transaction.remove.and.returnValue(-100);  
      expect(account.withdraw(100)).toEqual(200);
    });

    it('should return the error message when the balance is 0', function() {
      transaction.remove.and.returnValue(-200);  
      account.withdraw(200)
      console.log(account)
      expect(account.withdraw(200)).toEqual('Error');
    });
  });

  describe('#statement', function() {
    it('should return the account statement', function() {
      account.deposit(1000);
      statement.display.and.returnValue('14/02/2020 || 1000.00 || || 1000.00')
      expect(account.bankStatement()).toContain('14/02/2020 || 1000.00 || || 1000.00')
    });
  });
});

