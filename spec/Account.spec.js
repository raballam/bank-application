import Account from "../src/Account.js";

describe("Account Tests: ", () => {
    let testAccount, testName, testDeposit;

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

    it("should increase balance when funds are deposited", () => { 
        // Arrange
        testAccount = new Account(testName);
        testDeposit = 50;
        // Act
        testAccount.deposit(testDeposit);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit);
    });

});