const transactions = [
    { product: "Laptop", type: "purchase", quantity: 10 },
    { product: "Mobile", type: "purchase", quantity: 20 },
    { product: "Laptop", type: "sale", quantity: 4 },
    { product: "Mobile", type: "sale", quantity: 5 },
    { product: "Tablet", type: "purchase", quantity: 7 },
    { product: "Laptop", type: "purchase", quantity: 3 }
];

// Created stock object to store their quantity.
const stock = {
    Laptop: null,
    Mobile: null,
    Tablet: null
};

//Using loop iterate all transaction one by one 
function calculateStockQuantity() {
    transactions.forEach(transaction => {
        // Then checking the Product type
        if (transaction.product == "Laptop") {
            // Then increasing stock quantity when it get purchase into inventory & removing when it get sale
            transaction.type == "purchase" ? stock.Laptop += transaction.quantity : stock.Laptop -= transaction.quantity;
        }
        else if (transaction.product == "Tablet") {
            transaction.type == "purchase" ? stock.Tablet += transaction.quantity : stock.Tablet -= transaction.quantity;
        } else {
            transaction.type == "purchase" ? stock.Mobile += transaction.quantity : stock.Mobile -= transaction.quantity;
        }
    });
}
calculateStockQuantity();
console.log(stock);



