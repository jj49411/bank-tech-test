describe('Bank', function() {
  var bank;

  it('can deposit money in an account', function() {
    bank = new Bank;
    expect(bank.deposit(30)).toBe(30)
  });

  it('can add add on value in the account when deposit money', function() {
    bank = new Bank;
    bank.deposit(40);
    expect(bank.deposit(50)).toBe(90)
  })
  
}); 
