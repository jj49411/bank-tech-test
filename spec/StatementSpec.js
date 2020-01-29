describe('Statement', function() {
  var account = new Account;
  var transactions;
  var statement = new Statement;

  beforeEach(function() {
    transactions = [['14/02/2020', 1000, 1000], ['15/02/2020', -200, 800]]
    spyOn(account, 'transactions');
  });

  it('should add new transaction in transactions', function() {
    statement.log(transactions);
    expect(statement.transactions).toContain([['14/02/2020', 1000, 1000], ['15/02/2020', -200, 800]])
  });

  it('should display the header', function() {
    var statement = new Statement(transactions);
    expect(statement.display()).toContain('date || credit || debit || balance')
  });
}); 

