function checkingInventory() {
    setTimeout(() => {
        console.log("Checking The Inventory.");
    }, 2000)
}

function makingPayment(){
    setTimeout(()=>{
        console.log("Making the Payment");
    },1000);
}

function receivingOrder(){
    setTimeout(()=>{
        console.log("Receiving the Order");
    },2000);
}

function givingFeedback(){
    setTimeout(()=>{
        console.log("Giving the feedback about the Product.");
    },1000);
}


function main(){
    checkingInventory();
    makingPayment();
    receivingOrder();
    givingFeedback();
}
main();