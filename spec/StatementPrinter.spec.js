import StatementPrinter from "../src/StatementPrinter.js";

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

    it("should call transaction.printTransaction once if one transaction in array", () => {
        // Arrange
        const testTransaction = {
            printTransaction: jasmine.createSpy('printTransaction')
        };
        testAccount.transactions.unshift(testTransaction);
        // Act
        StatementPrinter.printStatement(testAccount);
        // Assert
        expect(testTransaction.printTransaction).toHaveBeenCalledTimes(1);
    })

    it("should call transaction.printTransactions 2 times if 2 transactions in array", () => {
        // Arrange
        const testTransaction = {
            printTransaction: jasmine.createSpy('printTransaction')
        };
        testAccount.transactions.unshift(testTransaction);
        testAccount.transactions.unshift(testTransaction);
        // Act
        StatementPrinter.printStatement(testAccount);
        // Assert
        expect(testTransaction.printTransaction).toHaveBeenCalledTimes(2);
    })

    it("should format transactions correctly", () => {
        // Arrange
        const testTransaction = {
            date: "12/12/2024",
            credit: 2000,
            debit: undefined,
            balance: 2000,
            printTransaction: function () {
                console.log(`${this.date.padEnd(10)} || ${this.credit ? this.credit.toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.debit ? this.debit().toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.balance.toFixed(2).padStart(7)}`);
            }
        }
        testAccount.transactions.unshift(testTransaction);
        const testTransaction2 = {
            date: "13/12/2024",
            credit: undefined,
            debit: 500,
            balance: 1500,
            printTransaction: function () {
                console.log(`${this.date.padEnd(10)} || ${this.credit ? this.credit().toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.debit ? this.debit.toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.balance.toFixed(2).padStart(7)}`);
            }
        }
        testAccount.transactions.unshift(testTransaction2);
        // Act
        StatementPrinter.printStatement(testAccount);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith("date       || credit  || debit   || balance");
        expect(clgSpy).toHaveBeenCalledWith("13/12/2024 ||         ||  500.00 || 1500.00");
        expect(clgSpy).toHaveBeenCalledWith("12/12/2024 || 2000.00 ||         || 2000.00");
    })
})
