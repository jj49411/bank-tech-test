function Account() {
  this.balance = 0;
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction;
  this.balance += transaction.add(amount);
};

Account.prototype.withdraw = function(amount) {
  var transaction = new Transaction;
  this.balance += transaction.remove(amount);
};

