export default class StatementPrinter {
    static printStatement = (account) => {
        console.log(`${"date".padEnd(10)} || ${"credit".padEnd(7)} || ${"debit".padEnd(7)} || balance`);
    }
}