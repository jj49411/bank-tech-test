describe('Features', function() {
  var account;
  var today;
  var amount;

  beforeEach(function() {
    account = new Account;
    amount = 500
    today = new Date(2020,1,14)
    jasmine.clock().install();
    jasmine.clock().mockDate(today);  
  })

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('user can deposit money in an account', function() {
    account.deposit(amount);
    expect(account.balance).toEqual(500)
  });

  it('user can withdraw money in an account', function() {
    account.deposit(amount);
    account.withdraw(amount);
    expect(account.balance).toEqual(0)
  });

  it('should record the date of deposit', function() {
    account.deposit(amount);
    expect(account.transactions.display()).toContain('14/02/2020')
  });

  it('user can print the bank statement', function() {
    account.deposit(amount);
    expect(account.transactions.display()).toContain('14/02/2020 || 500.00 || || 500.00')
  });


});
