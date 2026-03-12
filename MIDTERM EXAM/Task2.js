function getInventoryValuation(inventory) {
    let output = {}
    for (let i of inventory) {
        if (!output[i.category]){
            output[i.category] = 0;
        }
        output[i.category] += i.qty*i.price;
    }
    return output
    // Code Here
}

// Test Code
const testInventory = [
{ name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
{ name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
{ name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
{ name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory));