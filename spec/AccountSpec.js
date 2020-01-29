describe('Account', function() {
  var account = new Account;
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
    it('can deposit money in an account', function() {
      account.deposit(300);
      expect(account.balance).toBe(300);
    });

    it('can add on value in the account when deposit money', function() {
      account.deposit(100);
      account.deposit(400);
      expect(account.balance).toBe(500);
    });

    // it('should add a transaction when deposit money', function() {  
    //   account.deposit(500);
    //   console.log(account.transactions.statement)
    //   expect(account.transactions).toEqual({ transactions: [ [ '14/02/2020', 500, 500 ] ] })
    // });
  });

  describe('#withdraw', function(){
    it('can withdraw money from an account', function() {
      account.deposit(1000);
      account.withdraw(400);
      expect(account.balance).toBe(600);
    });

    // it('should add a transaction when withdraw money', function() {
    //   account.deposit(1000);
    //   account.withdraw(200);
    //   expect(account.transactions).toContain(['14/02/2020', -200, 800])
    // });
  });
});

