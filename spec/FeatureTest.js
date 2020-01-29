describe('Features', function() {
  var account;
  var amount;

  beforeEach(function() {
    account = new Account;
    amount = 500
  })

  it('user can deposit money in an account', function() {
    account.deposit(amount);
    expect(account.balance).toEqual(500)
  });

  it('user can withdraw money in an account', function() {
    account.deposit(amount);
    account.withdraw(amount);
    expect(account.balance).toEqual(0)
  });

});
