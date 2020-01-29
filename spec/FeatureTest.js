describe('Features', function() {
  it('users can deposit withdraw money and print out statement', function() {
    var account = new Account;
    account.deposit(400);
    account.withdraw(100);
    expect(account.transactions.diplay()).toContain('date || credit || debit || balance')
  });
});
