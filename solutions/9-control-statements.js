// BEGIN
const getTotalAmount = (transactions, currency) => {
    let total = 0;
    for (let x = 0; x < transactions.length; x++) {
        const transaction = transactions[x];
        const [curr, amountStr] = transaction.split('');
        const amount = Number(amountStr);
        if (curr === currency) {
            total += amount;
        }
    }
    return total;
};

export default getTotalAmount;
// END