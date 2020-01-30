function Statement() {
};

Statement.prototype.display = function(transactions) {
  var header = 'date || credit || debit || balance' + '\n';
  var body = transactions.length ? transactions.reverse().map(function(transaction) {
    if(transaction[1] > 0) {
      return transaction[0] + ' || ' + transaction[1] + '.00 || || ' + transaction[2] + '.00\n';
    }
    if(transaction[1] < 0) {
      return transaction[0] + ' || || ' + (-transaction[1]) + '.00 || ' + transaction[2] + '.00\n';
    }
  }).join('') : null;
  return header + body;
};

