// 

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


// this is the same of 01.js but with a clas instance
// definition of the class
class order {
    delivered = false;
    constructor(id, message){
        this.id= id;
        this.message = message;
    }

    // async with away 2 s
    summarize = async () =>{
        await sleep(2000);
        console.log('summarize2');
         const summary ='order_id' +
         this.id + ', message'+ this.message + ', delivered:'+ this.delivered;
        return summary;
    }   
}


// () =>{}
let order_obj = new order( 1234,'Second order');

// (parameters)=>{code}
// (param1, param2, param3, ...)=>{code}
// to avoid blocks, we return to execute wen the calculation is done
// adding .then((summary)=>{console.log(summary)}
const order_summary = order_obj.summarize().then((summary)=>{console.log(summary)
});

console.log(order_summary);
