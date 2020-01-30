function Account() {
  this._balance = 0;
  this.transactions = [];
  this.transaction = new Transaction;
  this.date = new DateFormat;
  this.statement = new Statement;
};

Account.prototype.deposit = function(amount) {
  this._balance += this.transaction.add(amount);
  this.transactions.push([this.date.dateFormat(), amount, this._balance]);
  return this._balance;
};

Account.prototype.withdraw = function(amount) {
  if(this._balance <= 0) {
    return 'Error'
  }else {
  this._balance += this.transaction.remove(amount);
  this.transactions.push([this.date.dateFormat(), -amount, this._balance]);  
  return this._balance;
  }
};

Account.prototype.bankStatement = function() {
  return this.statement.display(this.transactions);
};

