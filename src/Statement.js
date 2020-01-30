function Statement(transactions = []) {
  this.transactions = transactions;
};

Statement.prototype.display = function() {
  var header = 'date || credit || debit || balance' + '\n';
  return header + this.transactions.reverse().map(function(transaction) {
    if(transaction[1] > 0) {
      return transaction[0] + ' || ' + transaction[1] + '.00 || || ' + transaction[2] + '.00\n'
    }
    if(transaction[1] < 0) {
      return transaction[0] + ' || || ' + (-transaction[1]) + '.00 || ' + transaction[2] + '.00\n'
    }
  }).join('')
};

