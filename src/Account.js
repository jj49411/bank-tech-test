function Account() {
  this.balance = 0;
  this.transactions = new Statement;
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction;
  var date = new DateFormat;
  this.balance += transaction.add(amount);
  this.transactions.log([date.dateFormat(), amount, this.balance]);
};

Account.prototype.withdraw = function(amount) {
  var transaction = new Transaction;
  var date = new DateFormat;
  this.balance += transaction.remove(amount);
  this.transactions.log([date.dateFormat(), -amount, this.balance]);
};

