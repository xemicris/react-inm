//callback -> pasar una función a otra función
const data = [1,2,3,4,5,6];
data.filter((v)=> v%2 === 0) //no pierde el ámbito
data.filter(function(v){ //pierde el ámbito
    return v%2 === 0;
})

//clousure -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures -> es la creación de la instancia de un objeto -> guarda un estado y estará allí mientras el objeto no se destruya

function sum(a){
    //return (b)=>a+b
    return function(b){
        debugger
        return a+b
    }
}
const result = sum(5)

//console.log(sum(5)(3))
console.log(result + 100);

//ejemplo 2 clousure

function events(node, event, callback){
    node.addEventListener(event, callback)
    return ()=>node.removeEventListener(event, callback)
}

const disposable = events(document, 'click', console.log)

//para terminar el evento
disposable()

//Ejemplo 3 de clousure -> 

function signal(initialValue){
    let value = initialValue;
    const fn = ()=>value;
    fn.set = (v)=> value = v;
    return fn;
}

const resultado = signal(0)
console.log(resultado());
resultado.set(55)
console.log(resultado());

//Generadores
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
//esta sería la forma de hacer un filter pero bloqueante -> devuelve cuando ha terminado de procesar
function filter(array, predicate){
    const newArray = [];
    for(const value of array){
        if(predicate(value)) newArray.push(value)
    }
    return newArray;
}

//no bloqueante y sin reserva de memoria -> mejor para pocos y muchos datos -> no usar return porque yield va devolviendo poco a poco

function* filter(array, predicate){
    for(const value of array){
        if(predicate(value)) yield value
    }
}

const result2 = filter([1,2,3,4,5,6], (v) => v%2===0);
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());

const generator = filter([1,2,3,4,5,6], (v) => v%2===0);
//iterar
generator.next(); // iterar hasta que devuelva done:true
//iteradores automáticos
for(let v of generator){

}
const newArray2 = [...generator]