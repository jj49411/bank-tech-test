describe('Transaction', function() {
  var transaction = new Transaction;

  it('can add money', function() {
    expect(transaction.add(500)).toBe(500);
  });

  it('can remove money', function() {
    expect(transaction.remove(500)).toBe(-500);
  });
});

