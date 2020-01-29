describe('Account', function() {
  var account = new Account;

  beforeEach(function() {
    account = new Account;
  });

  describe('#deposit', function(){
    it('can deposit money in an account', function() {
      account.deposit(300)
      expect(account.balance).toBe(300);
    });

    it('can add on value in the account when deposit money', function() {
      account.deposit(100);
      account.deposit(400)
      expect(account.balance).toBe(500);
    });
  });

  describe('#withdraw', function(){
    it('can withdraw money from an account', function() {
      account.deposit(1000);
      account.withdraw(400)
      expect(account.balance).toBe(600);
    });
  });
});

