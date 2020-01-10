// this is the same of 01.js but with a clas instance
// definition of the class
class order {
    delivered = false;
    constructor(id, message){
        this.id= id;
        this.message = message;
    }
node
}

// function that create the message
function summarize_order(id, message, delivered){
    var summary ='order_id' + id + ', message'+ message + ', delivered:'+ delivered;
    return summary;
}
// class instantiation 
let order_obj = new order(1234,'Second order');

const order_summary = summarize_order(order.id, order.message, order.delivered);

console.log(order_summary);

order.delivered = true;
const order_summary_2 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_2);

order.id = 5436;
const order_summary_3 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_3);