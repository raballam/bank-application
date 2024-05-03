import Account from "../src/Account.js";

describe("Account Tests: ", () => {
    let testAccount, testName;

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

});