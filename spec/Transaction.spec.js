import Transaction from "../src/Transaction.js";

describe("Transaction Initialisation Tests: ", () => {
    let testType, testTransaction, testAmount, testBalance, testDate;

    beforeEach(() => {
        testDate = "12/12/2012";
        testAmount = 1000;
        testBalance = 1000;
    })

    afterEach(() => {
        testTransaction = undefined;
        testType = undefined;
        testAmount = undefined;
        testBalance = undefined;
        testDate = undefined;
    })

    it("should return the amount of the transaction", () => {
        // Arrange
        testAmount = 50;
        testTransaction = new Transaction(testType, testAmount);
        // Act
        // Assert
        expect(testTransaction.getAmount()).toBe(testAmount);
    });
    
    it("should return the total balance after the transaction", () => {
        // Arrange
        testBalance = 100;
        testTransaction = new Transaction(testType, testAmount, testBalance);
        // Act
        // Assert
        expect(testTransaction.getBalance()).toBe(testBalance);
    });

    it("should return the date of the transaction", () => {
        // Arrange
        testDate = "12/12/2024";
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        // Act
        // Assert
        expect(testTransaction.getDate()).toBe(testDate);
    });

    it("should set debit to amount if type is debit", () => {
        // Arrange
        testDate = "12/12/2024";
        testType = 'debit';
        testAmount = 500;
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        // Act
        // Assert
        expect(testTransaction.getDebit()).toBe(testAmount);
    });

    it("should set credit to amount if type is credit", () => {
        // Arrange
        testDate = "12/12/2024";
        testType = 'credit';
        testAmount = 500;
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        // Act
        // Assert
        expect(testTransaction.getCredit()).toBe(testAmount);
    });
});

describe("Transaction Initialisation Tests: ", () => {
    let testType, testTransaction, testAmount, testBalance, testDate, clgSpy, actual;

    beforeEach(() => {
        testDate = "12/12/2012";
        testAmount = 1000;
        testBalance = 1000;
        clgSpy = spyOn(console, 'log');

    })

    afterEach(() => {
        testTransaction = undefined;
        testType = undefined;
        testAmount = undefined;
        testBalance = undefined;
        testDate = undefined;
        actual = undefined;
    })

    // Strips colours to easier match outputs (found regex using chatGPT)
    function stripColours(text) {
        const colorRegex = /\x1B\[[0-9;]*[JKmsu]/g;
        return text.replace(colorRegex, '');
    }

    it("should call getDate when printTransaction is called", () => {
        // Arrange
        testType = 'debit';
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getDate').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getDate).toHaveBeenCalled();
    });

    it("should call getDebit when printTransaction is called", () => {
        // Arrange
        testType = 'debit';
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getDebit').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getDebit).toHaveBeenCalled();
    });

   it("should call getCredit when printTransaction is called", () => {
        // Arrange
        testType = 'credit';
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getCredit').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getCredit).toHaveBeenCalled();
    });

    it("should call getBalance when printTransaction is called", () => {
        // Arrange
        testType = 'credit';
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getBalance').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getBalance).toHaveBeenCalled();
    });

    it("should log the correct output when type is credit and amount is 4 digits", () => {
        // Arrange
        testType = 'credit';
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        // Act
        testTransaction.printTransaction();
        // Assert
        actual = clgSpy.calls.argsFor(0)[0];  // Gets the actual logged input
        expect(stripColours(actual)).toEqual("12/12/2012 || 1000.00 ||         || 1000.00")
    });

    it("should log the correct output when type is debit and 3 digits", () => {
        // Arrange
        testType = 'debit';
        testAmount = 500;
        testBalance = 500;
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        // Act
        testTransaction.printTransaction();
        // Assert
        actual = clgSpy.calls.argsFor(0)[0];  // Gets the actual logged input
        expect(stripColours(actual)).toEqual("12/12/2012 ||         ||  500.00 ||  500.00")
    });
});
