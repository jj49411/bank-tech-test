function Account() {
  this.balance = 0;
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction;
  return this.balance += transaction.add(amount);
}

