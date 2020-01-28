describe('Bank', function() {
  var bank;

  it('can deposit money in an account', function() {
    bank = new Bank;
    expect(bank.deposit(30)).toBe(30)
  });
}); 
