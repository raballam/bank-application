import Account from "../src/Account.js";

describe("Account Tests: ", () => {
    let testAccount, testName, testDeposit1, testDeposit2;

    beforeEach(() => {
        testName = "Test Name";
        testAccount;
    });

    it("should be instance of Account", () => {
        // Arrange
        testAccount = new Account();
        // Act
        // Assert
        expect(testAccount instanceof Account).toBe(true);
    });

    it("should have a name", () => {
        // Arrange
        testName = "Test Name";
        testAccount = new Account(testName);
        // Act
        // Assert
        expect(testAccount.name).toBe(testName);
    });
    
    it("should not set name to null", () => {
        // Arrange
        testName = null;
        // Act
        // Assert
        expect(() => new Account(testName)).toThrowError(Error)
    });
    
    it("should have an initial balance of 0", () => {
        // Arrange
        testAccount = new Account(testName);
        // Act
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    });

    it("should increase balance when funds are deposited when balance is 0", () => { 
        // Arrange
        testAccount = new Account(testName);
        testDeposit1 = 50;
        // Act
        testAccount.deposit(testDeposit1);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit1);
    });

    it("should increase balance when funds are deposited when balance is not 0", () => {
        // Arrange
        testAccount = new Account(testName);
        testDeposit1 = 50;
        testAccount.deposit(testDeposit1);
        testDeposit2 = 10;
        // Act
        testAccount.deposit(testDeposit2);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit1 + testDeposit2);
    });

    it("should not change balance is funds deposited are null", () => { 
        // Arrange
        testAccount = new Account(testName);
        testDeposit1 = null;
        // Act
        testAccount.deposit(testDeposit1);
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    });
});