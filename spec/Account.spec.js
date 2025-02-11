import Account from "../src/Account.js";
import Transaction from "../src/Transaction.js";

describe("Account Initialisation Tests: ", () => {
    let testAccount, testName;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
    });

    afterEach(() => {
        testAccount = undefined;
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
        expect(() => new Account(testName)).toThrowError("Name cannot be null");
    });
    
    it("should have an initial balance of 0", () => {
        // Arrange
        // Act
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    });
});

describe("Account Deposit/Withdraw Tests: ", () => {
    let testAccount, testName, testDeposit1, testDeposit2, testWithdrawal, testBalance;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
    });

    afterEach(() => {
        testDeposit1 = 0;
        testDeposit2 = 0;
        testWithdrawal = 0;
        testBalance = 0;
        testAccount = undefined;
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
        expect(() => testAccount.deposit(testDeposit1)).toThrowError("Cannot deposit negative funds.");
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
        expect(() => testAccount.withdraw(testWithdrawal)).toThrowError("Cannot withdraw negative funds.");
    });
    
    it("should throw an error if attempts to withdraw more than balance", () => {
        // Arrange
        testDeposit1 = 10;
        testAccount.deposit(testDeposit1);
        testWithdrawal = 20;
        // Act
        // Assert
        expect(() => testAccount.withdraw(testWithdrawal)).toThrowError("Insufficient funds.");
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
});

describe("Account Transaction Tests: ", () => {
    let testAccount, testName, testDeposit1, testWithdrawal, testDate, initial;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
    });

    afterEach(() => {
        testDeposit1 = 0;
        testWithdrawal = 0;
        testDate = "12/12/2024";
        initial = undefined;
    });

    it("should add a transaction to the transactions array when a deposit is made", () => {
        // Arrange
        initial = testAccount.transactions.length;
        // Act
        testAccount.deposit(testDeposit1, testDate);
        // Assert
        expect(testAccount.transactions.length).toBe(initial + 1);
    });

    it("should add a transaction to the transactions array when a withdrawal is made", () => {
        // Arrange
        initial = testAccount.transactions.length;
        // Act
        testAccount.withdraw(testWithdrawal, testDate);
        // Assert
        expect(testAccount.transactions.length).toBe(initial + 1);
    });

    it('should have transactions as an array of Transactions', () => {
        // Arrange
        testAccount.deposit(testDeposit1);
        testAccount.withdraw(testWithdrawal);
        // Act
        // Assert
        for (const transaction of testAccount.transactions) {
            expect(transaction).toBeInstanceOf(Transaction);
        }
    });
});

describe("Account Overdraft Tests: ", () => {
    let testAccount, testName, testDeposit1, testWithdrawal, testLimit;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
    });

    afterEach(() => {
        testDeposit1 = 0;
        testWithdrawal = 0;
    });

    // Strips colours to easier match outputs (found regex using chatGPT)
    function stripColours(text) {
        const colorRegex = /\x1B\[[0-9;]*[JKmsu]/g;
        return text.replace(colorRegex, '');
    }

    it("should toggle overdraft on with enableOverdraft", () => {
        // Arrange
        // Act
        testAccount.enableOverdraft();
        // Assert
        expect(testAccount.overdraftEnabled).toBeTrue();
    });

    it("should toggle overdraft off with disableOverdraft", () => {
        // Arrange
        testAccount.enableOverdraft();
        // Act
        testAccount.disableOverdraft();
        // Assert
        expect(testAccount.overdraftEnabled).toBeFalse();
    });

    it("should set overdraft limit with setOverdraft", () => {
        // Arrange
        testLimit = 500;
        // Act
        testAccount.setOverdraft(testLimit);
        // Assert
        expect(testAccount.overdraftLimit).toBe(testLimit);
    });

    it("should not throw an error if amount greater than balance and overdraftEnabled is true", () => {
        // Arrange
        testDeposit1 = 500;
        testAccount.enableOverdraft();
        // testAccount.setOverdraft(testLimit);
        testAccount.deposit(testDeposit1);
        testWithdrawal = 1000;
        // Act
        // Assert
        expect(() => testAccount.withdraw(testWithdrawal)).not.toThrowError("Insufficient funds.");
    });

    it("should throw an error if overdraftEnabled is true but withdrawal is greater than balance + overdraftLimit", () => {
        // Arrange
        testLimit = 500;
        testDeposit1 = 1000;
        testAccount.enableOverdraft();
        testAccount.setOverdraft(testLimit);
        testAccount.deposit(testDeposit1);
        testWithdrawal = 2000;
        // Act
        // Assert
        expect(() => testAccount.withdraw(testWithdrawal)).toThrowError("Insufficient funds.")
    });

    it("should allow withdrawal that takes account to overdraft limit", () => {
        // Arrange
        testLimit = 500;
        testDeposit1 = 500;
        testAccount.enableOverdraft();
        testAccount.setOverdraft(testLimit);
        testAccount.deposit(testDeposit1);
        testWithdrawal = 1000;
        // Act
        testAccount.withdraw(testWithdrawal);
        // Assert
        expect(testAccount.getBalance()).toBe(-500);
    });
});

describe("Account Printer Tests: ", () => {
    let testAccount, testName, testDeposit1, testLimit, clgSpy, accountNumber, actual;

    beforeEach(() => {
        testName = "Test Name";
        testAccount = new Account(testName);
        clgSpy = spyOn(console, 'log');
    });

    afterEach(() => {
        testDeposit1 = 0;
    });

    // Strips colours to easier match outputs (found regex using chatGPT)
    function stripColours(text) {
        const colorRegex = /\x1B\[[0-9;]*[JKmsu]/g;
        return text.replace(colorRegex, '');
    };

    it("should have a printer that calls getName()", () => {
        // Arrange
        spyOn(testAccount, 'getName').and.callThrough();
        // Act
        testAccount.printAccountDetails();
        // Assert
        expect(testAccount.getName).toHaveBeenCalled();
    });

    it("should have a printer that calls getAccountNumber()", () => {
        // Arrange
        spyOn(testAccount, 'getAccountNumber').and.callThrough();
        // Act
        testAccount.printAccountDetails();
        // Assert
        expect(testAccount.getAccountNumber).toHaveBeenCalled();
    });

    it("should have a printer that calls getOverdraftDetails", () => {
        // Arrange
        spyOn(testAccount, 'getOverdraftDetails').and.callThrough();
        // Act
        testAccount.printAccountDetails();
        // Assert
        expect(testAccount.getOverdraftDetails).toHaveBeenCalled();
    });

    it("should have a printer that calls currentAvailable", () => {
        // Arrange
        spyOn(testAccount, 'currentAvailable').and.callThrough();
        // Act
        testAccount.printAccountDetails();
        // Assert
        expect(testAccount.currentAvailable).toHaveBeenCalled();
    });

    it("should properly format printAccountDetails", () => {
        // Arrange
        testLimit = 1000;
        testDeposit1 = 500;
        testAccount.enableOverdraft();
        testAccount.setOverdraft(testLimit);
        testAccount.deposit(testDeposit1);
        accountNumber = testAccount.getAccountNumber();
        // Act
        testAccount.printAccountDetails();
        // Assert
        actual = clgSpy.calls.argsFor(0)[0];  // Gets the actual logged input
        expect(stripColours(actual)).toEqual(`            Account Name:         Test Name
          Account Number:          ${accountNumber}
         Overdraft Limit:          £1000.00
       Available Balance:          £1500.00`);
    });
});

