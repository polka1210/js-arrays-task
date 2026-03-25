// BEGIN
const getTotalAmount = (transactions, currency) => {
    let total = 0;
    for (let x = 0; x < transactions.length; x++) {
        const transaction = transactions[x];
        const parts = transaction.split('');
        const curr = parts[0];
        const amount = Number(parts[1]);
        if (curr === currency) {
            total = total + amount;
        }
    }
    return total;
};

export { getTotalAmount };
export default getTotalAmount;
// END