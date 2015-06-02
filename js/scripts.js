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

function resetFields() {
  $("input#new-name").val("");
  $("input#initial-deposit").val("");
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}


$(document).ready(function(){
  event.preventDefault();

  var currentAccount1 = 0;

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#new-name").val();
    var inputStartDeposit = parseInt($("input#initial-deposit").val());
    var newAccount = new BankAccount(inputName, inputStartDeposit);
    $(".current-balance").text(newAccount.balance);

    resetFields();
    currentAccount1 = newAccount;
  });

  $("form#deposit-withdrawal").submit(function(event) {
    event.preventDefault();

    var newAccount = currentAccount1;
    var inputDeposit = parseInt($("input#deposit").val());
    var inputWithdrawal = parseInt($("input#withdrawal").val());

    if (isNaN(inputDeposit)===false) {
      newAccount.deposit(inputDeposit);
    } else {
      newAccount.withdrawal(inputWithdrawal);
    };

    $(".current-balance").text(newAccount.balance);

    resetFields();

    currentAccount1 = newAccount;


  });

});
