const items = ["apple", "banana", "pineapple"];

function purchaseItem(itemToPurchase, quantity){
    if(!items.includes(itemToPurchase)){
        console.log("Error: Invalid item! Unable to complete purchase!");
        return;
    }
    if(isNaN(quantity)){
        console.log("Error: Invalid quantity! Unable to complete purchase!");
        return; 
    }
    let price;
    if(itemToPurchase === "apple"){
        price = 1.99;
    }
    else if(itemToPurchase === "banana"){
        price = 0.99;
    }
    else if(itemToPurchase === "pineapple"){
        price = 2.99;
    }
    const totalPrice = price * quantity;
    console.log(`Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);
}

function addItem(newItem){
    items.push(newItem);
    console.log(`${newItem} successfully added to the supermarket!`)
}

console.log("Welcome to FlatironSupermarket!");

purchaseItem("apple", 5);
purchaseItem("nonexistent item", 5);
purchaseItem("banana", "I am not a number");
addItem("cucumber");

console.log(items)
// console.log(items) #=> [ 'apple', 'banana', 'pineapple', 'cucumber' ]
// console.log(price) #=> Error (out of scope)
// console.log(newItem) #=> Error (out of scope)
// console.log(itemToPurchase) #=> Error (out of scope)
// console.log(quantity) #=> Error (out of scope)
