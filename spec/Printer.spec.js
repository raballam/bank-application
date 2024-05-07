import Printer from "../src/Printer.js";

describe("Printer Account and Statement Tests: ", () => {
    let testAccount, clgSpy;
    beforeEach(() => {
        testAccount = {
            transactions: [],
            printAccountDetails: jasmine.createSpy('printAccountDetails'),
            withdraw: jasmine.createSpy('withdraw'),
            deposit: jasmine.createSpy('deposit'),
        };
        clgSpy = spyOn(console, 'log');
    })

    it("should print a header", () => {
        // Arrange
        // Act
        Printer.printStatement(testAccount);
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
        Printer.printStatement(testAccount);
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
        Printer.printStatement(testAccount);
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
        Printer.printStatement(testAccount);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith("date       || credit  || debit   || balance");
        expect(clgSpy).toHaveBeenCalledWith("13/12/2024 ||         ||  500.00 || 1500.00");
        expect(clgSpy).toHaveBeenCalledWith("12/12/2024 || 2000.00 ||         || 2000.00");
    })

    it("should call account.printAccountDetails once", () => {
        // Arrange
        // Act
        Printer.printAccount(testAccount);
        // Assert
        expect(testAccount.printAccountDetails).toHaveBeenCalledTimes(1);
    })
});
describe("Printer Withdraw and Deposit Tests: ", () => {
    let testAccount, clgSpy, clgErrSpy;
    beforeEach(() => {
        testAccount = {
            transactions: [],
            printAccountDetails: jasmine.createSpy('printAccountDetails'),
            withdraw: jasmine.createSpy('withdraw'),
            deposit: jasmine.createSpy('deposit'),
        };
        clgSpy = spyOn(console, 'log');
        clgErrSpy = spyOn(console, 'error');
    })

    it("should print a success message if withdrawal successful", () => {
        // Arrange
        testAccount.withdraw.and.returnValue(undefined);
        let testAmount = 500;
        let testDate = "12/12/2012";
        
        // Act
        Printer.printWithdrawal(testAmount, testDate, testAccount);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith(`Withdrawal successful!
        £500.00 has been withdrawn from your account.`);
    })

    it("should print an error message if withdrawal unsuccessful", () => {
        // Arrange
        testAccount.withdraw.and.throwError("Insufficient funds.");
        let testAmount = 500;
        let testDate = "12/12/2012";
        // Act
        Printer.printWithdrawal(testAmount, testDate, testAccount);
        // Assert
        expect(clgErrSpy).toHaveBeenCalledWith("Insufficient funds.");
    })

    it("should print a success message if deposit is successful", () => {
        // Arrange
        testAccount.deposit.and.returnValue(undefined);
        let testAmount = 600;
        let testDate = "13/12/2012";
        // Act
        Printer.printDeposit(testAmount, testDate, testAccount);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith(`Deposit successful!
        £600.00 has been added to your account.`)
    })

    it("should print an error message if deposit unsuccessful", () => {
        // Arrange
        testAccount.deposit.and.throwError("Unsuccessful. Please try again.");
        let testAmount = 600;
        let testDate = "13/12/2012";
        // Act
        Printer.printDeposit(testAmount, testDate, testAccount);
        // Assert
        expect(clgErrSpy).toHaveBeenCalledWith("Unsuccessful. Please try again.")
    })
    
});
