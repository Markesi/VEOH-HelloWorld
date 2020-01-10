// this is the same of 01.js but with a clas instance
// definition of the class
class order {
    delivered = false;
    constructor(id, message){
        this.id= id;
        this.message = message;
    }


    summarize(){
        console.log('summarize');
        const summary ='order_id' +
        this.id + ', message'+ this.message + ', delivered:'+ this.delivered;
       return summary;
   }  
    

    summarize_2 = () =>{
        console.log('summarize2');
         const summary ='order_id' +
         this.id + ', message'+ this.message + ', delivered:'+ this.delivered;
        return summary;
    }   
}


// () =>{}
let order_obj = new order(1234,'Second order');

const order_summary = order_obj.summarize();
console.log(order_summary);

order.delivered = true;
const order_summary_1 = order_obj.summarize2();