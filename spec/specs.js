describe('BankAccount', function(){
  it("create a new bank account with the given specifications", function() {
    var testAccount = new BankAccount("Savage", 100000000000);
    expect(testAccount.acctName).to.equal("Savage");
    expect(testAccount.balance).to.equal(100000000000);
  });
});
