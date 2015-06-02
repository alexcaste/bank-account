// BankAccount
//
// deposit
// withdrawal
// balance
//
// name
//
// name and adeposit
//
function BankAccount(acctName, balance) {
  this.acctName = acctName;
  this.balance = balance;
}
BankAccount.prototype.deposit = function(number) {
  this.balance = this.balance + number;
}

BankAccount.prototype.withdrawal = function(number) {
  this.balance = this.balance - number;
}
