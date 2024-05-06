import Transaction from "../src/Transaction.js";

describe("Transaction Tests: ", () => {
    let testType, testTransaction, testAmount, testBalance, testDate;

    it("should return credit if type is credit", () => {
        // Arrange
        testType = "credit";
        testTransaction = new Transaction(testType);
        // Act
        // Assert
        expect(testTransaction.getType()).toBe(testType);
    });

    it("should return debit if type is debit", () => {
        // Arrange
        testType = "debit";
        testTransaction = new Transaction(testType);
        // Act
        // Assert
        expect(testTransaction.getType()).toBe(testType);
    });

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

    it("should call getDate when printTransaction is called", () => {
        // Arrange
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getDate').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getDate).toHaveBeenCalled();
    });

    it("should call getDebit when printTransaction is called", () => {
        // Arrange
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getDebit').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getDebit).toHaveBeenCalled();
    });

    it("should call getCredit when printTransaction is called", () => {
        // Arrange
        testTransaction = new Transaction(testType, testAmount, testBalance, testDate);
        spyOn(testTransaction, 'getCredit').and.callThrough();

        // Act
        testTransaction.printTransaction();
        // Assert
        expect(testTransaction.getCredit).toHaveBeenCalled();
    });
});
