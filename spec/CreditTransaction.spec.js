import CreditTransaction from "../src/CreditTransaction.js";

describe("Credit Transaction Tests", () => {
    let testAmount, testBalance, testDate, creditTransaction, clgSpy, actual;
    beforeEach(() => {
        testAmount = 50,
            testBalance = 100,
            testDate = '12/12/2012',
            creditTransaction = new CreditTransaction(testAmount, testBalance, testDate);
        clgSpy = spyOn(console, 'log');
    });

    // Strips colours to easier match outputs (found regex using chatGPT)
    function stripColours(text) {
        const colorRegex = /\x1B\[[0-9;]*[JKmsu]/g;
        return text.replace(colorRegex, '');
    };

    it("should inherit properties and methods from the base Transaction class", () => {
        // Arrange
        // Act
        // Assert
        expect(creditTransaction.getAmount()).toBe(testAmount);
        expect(creditTransaction.getBalance()).toBe(testBalance);
        expect(creditTransaction.getDate()).toBe(testDate);
    });

    it("should set property debit to amount", () => {
        // Arrange
        // Act
        // Assert
        expect(creditTransaction.getCredit()).toBe(testAmount);
    });

    it("should log correct output when printTransaction is called", () => {
        // Arrange
        // Act
        creditTransaction.printTransaction();
        // Assert
        actual = clgSpy.calls.argsFor(0)[0];  // Gets the actual logged input
        expect(stripColours(actual)).toEqual("12/12/2012 ||   50.00 ||         ||  100.00");
    });
});