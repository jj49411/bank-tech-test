describe('Statement', function() {
  var account = new Account;
  var transactions;

  beforeEach(function() {
    transactions = [['14/02/2020', 1000, 1000], ['15/02/2020', -200, 800]]
    // spyOnProperty(account, 'transactions').and.returnValue(transactions)
    // spyOn(account, 'transactions');
  });

  it('should add new transaction in transactions', function() {
    // var testStatement = new Statement(account.transactions)
    var statement = new Statement(transactions);
    expect(statement.display()).toContain('15/02/2020 || || 200.00 || 800.00')
  });

  it('should display the header', function() {
    var statement = new Statement(transactions);
    expect(statement.display()).toContain('date || credit || debit || balance')
  });
}); 

 