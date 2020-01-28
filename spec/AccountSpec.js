describe('Account', function() {
  var account = new Account;

  beforeEach(function() {
    account = new Account;
  });

  it('can deposit money in an account', function() {
    expect(account.deposit(300)).toBe(300);
  });

  it('can add on value in the account when deposit money', function() {
    account.deposit(100);
    expect(account.deposit(400)).toBe(500);
  })
});
