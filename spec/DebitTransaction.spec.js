describe("Debit Transaction Tests", () => {
    let testAmount, testBalance, testDate;
    it("should inherit properties and methods from the base Transaction class", () => {
        // Arrange
        testAmount = 50;
        testBalance = 100;
        testDate = '12/12/2012'
        // Act
        const debitTransaction = new DebitTransaction(testAmount, testBalance, testDate);
        // Assert
        expect(debitTransaction.getAmount()).toBe(testAmount);
        expect(debitTransaction.getBalance()).toBe(testBalance);
        expect(debitTransaction.getDate()).toBe(testDate);
    });
})