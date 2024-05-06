import Transaction from "../src/Transaction.js";
import StatementPrinter from "../src/StatementPrinter.js"

describe("Statement Printer Tests: ", () => {
    let testAccount, clgSpy;
    beforeEach(() => {
        testAccount = {
            transactions: [
                // new Transaction('debit', 500, 1500, '13/12/2024'),
                // new Transaction('credit', 2000, 2000, '12/12/2024')
            ]
        };
        clgSpy = spyOn(console, 'log');
    })

    it("should print a header", () => {
        // Arrange
        // Act
        StatementPrinter.printStatement(testAccount);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith("date       || credit  || debit   || balance")
    })
})