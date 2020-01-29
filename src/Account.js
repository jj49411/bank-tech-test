function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction;
  var date = new DateFormat;
  this.balance += transaction.add(amount);
  this.transactions.push([date.dateFormat(), amount, this.balance]);
};

Account.prototype.withdraw = function(amount) {
  var transaction = new Transaction;
  this.balance += transaction.remove(amount);
};

