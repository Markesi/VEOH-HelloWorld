// 

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


// this is the same of 01.js but with a clas instance
// definition of the class
class order {
   // products =['apple', 'milk'];
   products =[];

    delivered = false;
    constructor(id, message){
        this.id= id;
        this.message = message;
    }

    add_product = (product) => {
        this.products.push(product);
    }

    deliver = async () =>{
        await sleep(1000);
        this.delivered= true;
    }


    // async with away 2 s
    summarize = async () =>{

        await sleep(2000);

        console.log('summarize2');

         const summary ='order_id' +
         this.id + ', message'+ this.message + ', delivered:'+ this.delivered;
        
        summary += ', Products: [';
        this.products.forEach((product, index)=>{
            summary +=product + ', ';
        });
        summary += ']';
         return summary;
    }   
}


// () =>{}
let order_obj = new order( 1234,'Second order');
order_obj.add_product('coffee');
order_obj.add_product('milk');
order_obj.add_product('bread');
order_obj.add_product('sugar');


order_obj.deliver().then(()=>{
    
    console.log('delivered!');
    return order_obj.summarize();
}).then((summary)=>{
    console.log(summary)
});


// (parameters)=>{code}
// (param1, param2, param3, ...)=>{code}
// to avoid blocks, we return to execute wen the calculation is done
// adding .then((summary)=>{console.log(summary)}
const order_summary = order_obj.summarize().then((summary)=>{console.log(summary)
});

console.log(order_summary);
