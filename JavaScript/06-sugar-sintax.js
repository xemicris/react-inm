//1. rest parameters -> solo uno y debe ser el último

function Foo(initialvalue,...rest){
    return rest.reduce((a, v)=> a+v, initialvalue)
}

//2. deault parameters
function sum(a, b=5){
    return a+b;
}
sum(3) //8
sum(3, 10) //13

//3. desestructuration -> de objetos y arrays

const [a1,b1] = [1,2,3,4] //a =1, b = 2, el resto se pierde
const [a2,b2,...rest] = [1,2,3,4] // a=1, b=2, el resto [3, 4]

const {id, name, ...restobj} = {id:1, name: 'predro', phone: 583854756949}

console.log('hola');

//4. spread operator
const a = [1,2,3];
const b = [4,5,6];
const c = [...a,...b]

const foo = {id:1, name: 'chema'}
const bar = {name: 'pedro hurtado', baz:{id:1}}

const result = {...foo,...bar}

result.baz.id = 55
bar.baz.id // modifica el objeto original -> para que no lo modifique

//const result2 = {...foo, ...structuredClone(...bar)}
 
//5. operador de cortocircuito

if(a!==null){
    //a()
}

a && //a()

function foo2(options){
    options = options || {}
}

//6. Elvis operator

Object.func?.(args)