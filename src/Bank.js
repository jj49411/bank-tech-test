function Bank() {
  this.balance = 0;
};

Bank.prototype.deposit = function(amount) {
    return this.balance += amount;
};

