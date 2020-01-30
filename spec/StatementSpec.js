describe('Statement', function() {
  var transactions;

  beforeEach(function() {
    transactions = [['14/02/2020', 1000, 1000], ['15/02/2020', -200, 800]]
  });

  it('should add new transaction in transactions', function() {
    var statement = new Statement();
    expect(statement.display(transactions)).toContain('15/02/2020 || || 200.00 || 800.00')
  });

  it('should display the header', function() {
    var statement = new Statement();
    expect(statement.display(transactions)).toContain('date || credit || debit || balance')
  });

  it('should return null if transactions is empty', function() {
    var statement = new Statement();
    expect(statement.display([])).toEqual('date || credit || debit || balance\nnull')
  });
}); 

 