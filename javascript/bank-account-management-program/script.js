class BankAccount {
    constructor() {
        // Set default balance to zero.
        this.balance = 0;
        // Set transactions to be an empty array to store record objects.
        this.transactions = [];
    }

    deposit(amount) {
        // Check if the deposit is invalid.
        if (amount <= 0) {
            // Return an invalidity message.
            return "Deposit amount must be greater than zero.";
        }

        // Record the deposit within the transactions array.
        this.transactions.push({
            type: "deposit",
            amount: amount
        });

        // Update the balance.
        this.balance += amount;

        // Return a confirmation message.
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        // Check for valid withdrawal.
        if (amount <= 0 || amount > this.balance) {
            // Return an invalidity message.
            return "Insufficient balance or invalid amount.";
        }

        // Record the withdrawal within the transactions array.
        this.transactions.push({
            type: "withdraw",
            amount: amount
        });

        // Update the balance.
        this.balance -= amount;

        // Return a confirmation message.
        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    checkBalance() {
        // Return the current balance as a formatted string.
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
        // Define a string to represent all deposits.
        let depositsString = "Deposits: "

        // Define an array to store the deposit amounts to later be formatted.
        let depositsAmounts = new Array();

        // Iterate through transactions.
        for (let transaction of this.transactions) {
            // Filter out non-deposit transactions.
            if (transaction.type != 'deposit') { continue }

            // Add the amount to the array.
            depositsAmounts.push(transaction.amount);
        }

        // Return the string of all deposits.
        return depositsString + depositsAmounts.join(',');
    }

    listAllWithdrawals() {
        // Define a string to represent all withdrawals.
        let withdrawalsString = "Withdrawals: "

        // Define an array to store the withdrawal amounts to later be formatted.
        let withdrawalsAmounts = new Array();

        // Iterate through transactions.
        for (let transaction of this.transactions) {
            // Filter out non-withdrawal transactions.
            if (transaction.type != 'withdraw') { continue }

            // Add the amount to the array.
            withdrawalsAmounts.push(transaction.amount);
        }

        // Return the string of all withdrawals.
        return withdrawalsString + withdrawalsAmounts.join(',');
    }
}

const myAccount = new BankAccount();

console.log(myAccount.deposit(100))
console.log(myAccount.withdraw(50))
console.log(myAccount.deposit(20))
console.log(myAccount.deposit(200))
console.log(myAccount.withdraw(5))
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())
console.log(myAccount.checkBalance())