//promise -> objeto que en el constructor (new Promise) se le pasa un callback con dos argumentos
//resolve con then(n)
//reject se resuelve con catch -> sino da error uncaught
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://dev.to/nyxtom/client-side-global-error-handling-and-unhandled-promise-rejections-2917


class ServiceCustomer{
    //id: codigo cliente
    static get(id){
        return new Promise((resolve, reject)=>{
            if(id===1){
                resolve({id})
            }else{
                reject("el cliente no existe")
            }
        })
    }
}

class ServicesInvoices{
    static get(clientID){
        return new Promise((resolve, reject)=>{
            if(clientID === 2){
                resolve({clientID, invoices:[]})
            }else{
                reject("el cliente no tiene facturas")
            }
        })
    }
}

function main(id){
    ServiceCustomer.get(id)
    .then(customer => ServicesInvoices.get(customer.id))
    .then(invoices=>console.log(invoices))
    .catch(err=>console.log(err))
}

console.log(main(1))

//ASYNC AWAIT
async function foo(){
    return 1
}
console.log(foo());

class ServiceCustomer2{
    //id: codigo cliente
    static async get(id){
        if(id===1){
            return {id}
        }else{
            throw "El cliente no existe"
        }
        
    }
}

class ServicesInvoices2{
    static get(clientID){
        return new Promise((resolve, reject)=>{
            if(clientID === 1){
                resolve({clientID, invoices:[]})
            }else{
                reject("el cliente no tiene facturas")
            }
        })
    }
}

async function main2(id){
    try{
        const customer = await ServiceCustomer2.get(id)
        const invoices = await ServicesInvoices2.get(customer)
        console.log(invoices);
    }catch(err){
        console.log(err);
    }
}

main2(1)
