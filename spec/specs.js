describe('BankAccount', function(){
  it("create a new bank account with the given specifications", function() {
    var testAccount = new BankAccount("Savage", 100000000000);
    expect(testAccount.acctName).to.equal("Savage");
    expect(testAccount.balance).to.equal(100000000000);
  });

  it("add a given amount to the balance of an acct", function(){
    var testAccount = new BankAccount("Savage", 100);
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(200);
  });

  it("subtract a given amount to the balance of an acct", function(){
    var testAccount = new BankAccount("Savage", 200);
    testAccount.withdrawal(100);
    expect(testAccount.balance).to.equal(100);
  });

});
