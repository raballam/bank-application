import Account from "../src/Account.js";

describe("Account Tests: ", () => {
    let testAccount, testName, testDeposit1, testDeposit2, testWithdrawal, testBalance, testDate, actual;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
    });

    afterEach(() => {
        testDeposit1 = 0;
        testDeposit2 = 0;
        testWithdrawal = 0;
        testBalance = 0;
        testDate = "12/12/2024";
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
        // Act
        // Assert
        expect(testAccount.name).toBe(testName);
    });
    
    it("should not set name to null", () => {
        // Arrange
        testName = null;
        // Act
        // Assert
        expect(() => new Account(testName)).toThrowError("Name cannot be null")
    });
    
    it("should have an initial balance of 0", () => {
        // Arrange
        // Act
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    });

    it("should increase balance when funds are deposited when balance is 0", () => {
        // Arrange
        testDeposit1 = 50;
        // Act
        testAccount.deposit(testDeposit1);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit1);
    });

    it("should increase balance when funds are deposited when balance is not 0", () => {
        // Arrange
        testDeposit1 = 50;
        testAccount.deposit(testDeposit1);
        testDeposit2 = 10;
        // Act
        testAccount.deposit(testDeposit2);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit1 + testDeposit2);
    });

    it("should throw an error if negative funds deposited", () => {
        // Arrange
        testDeposit1 = -50;
        // Act
        // Assert
        expect(() => testAccount.deposit(testDeposit1)).toThrowError("Cannot deposit negative funds");
    });

    it("should decrease the balance when funds are withdrawn", () => {
        // Arrange
        testDeposit1 = 100;
        testAccount.deposit(testDeposit1);
        testWithdrawal = 75;
        // Act
        testAccount.withdraw(testWithdrawal);
        // Assert
        expect(testAccount.getBalance()).toBe(testDeposit1 - testWithdrawal);
    });

    it("should throw an error if negative funds withdrawn", () => {
        // Arrange
        testWithdrawal = -10;
        // Act
        // Assert
        expect(() => testAccount.withdraw(testWithdrawal)).toThrowError("Cannot withdraw negative funds");
    });
    
    it("should throw an error if attempts to withdraw more than balance", () => {
        // Arrange
        testDeposit1 = 10;
        testAccount.deposit(testDeposit1);
        testWithdrawal = 20;
        // Act
        // Assert
        expect(() => testAccount.withdraw(testWithdrawal)).toThrowError("Insufficient funds")
    });

    it("should allow full balance to be withdrawn", () => {
        // Arrange
        testBalance = 50;
        testAccount.deposit(testBalance);
        testWithdrawal = 50;
        // Act
        testAccount.withdraw(testWithdrawal);
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    });

    it("should add a transaction to the transactions array when a deposit is made", () => {
        // Arrange
        actual = testAccount.transactions.length;
        // Act
        testAccount.deposit(testDeposit1, testDate);
        // Assert
        expect(testAccount.transactions.length).toBe(actual + 1);
    });
});