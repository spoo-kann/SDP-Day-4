function atmWithdrawal(balance, amount) {
    if (amount % 10 !== 0) {
        return "Error: The withdrawal amount must be in multiples of $10.";
    }
    if (amount > 500) {
        return "Error: The maximum withdrawal amount per transaction is $500.";
    }
    if (amount > balance) {
        return "Error: Insufficient funds in the account.";
    }
    balance -= amount;
    return `Success: Withdrawal of $${amount} completed. Remaining balance: $${balance}`;
}
let accountBalance = 1000;  

console.log(atmWithdrawal(accountBalance, 450));  
console.log(atmWithdrawal(accountBalance, 550));  
console.log(atmWithdrawal(accountBalance, 30));   
console.log(atmWithdrawal(accountBalance, 700));  
