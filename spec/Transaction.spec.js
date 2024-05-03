import Transaction from "../src/Transaction.js";

describe("Transaction Tests: ", () => {
    let testType, testTransaction;

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
});
