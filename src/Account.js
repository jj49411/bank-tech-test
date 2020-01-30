function Account(transaction = new Transaction, date = new DateFormat, statement = new Statement(this.transactions)) {
  this.balance = 0;
  this.transactions = [];
  this.transaction = transaction;
  this.date = date;
  this.statement = statement;
};

Account.prototype.deposit = function(amount) {
  this.balance += this.transaction.add(amount);
  this.transactions.push([this.date.dateFormat(), amount, this.balance]);
  return this.balance;
};

Account.prototype.withdraw = function(amount) {
  this.balance += this.transaction.remove(amount);
  this.transactions.push([this.date.dateFormat(), -amount, this.balance]);  
  return this.balance;
};

Account.prototype.bankStatement = function() {
  return this.statement.display(this.transactions);
};

