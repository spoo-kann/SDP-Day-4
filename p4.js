function checkInventory(productName, quantity) {
    if (quantity < 10) {
        console.log(`Alert: ${productName} - Restock immediately!`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`Alert: ${productName} - Stock is low.`);
    } else {
        console.log(`${productName} - Inventory level is adequate.`);
    }
}
checkInventory("Widget A", 5);   
checkInventory("Widget B", 15);  
checkInventory("Widget C", 25);  