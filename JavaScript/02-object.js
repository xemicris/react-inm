//Antes de 2015

//JS solo tiene constructores, métodos de instancia y estáticos

//Constructor y tipo
function Foo(name){
    this.name = name;
}

//Método de instancia
Foo.prototype.write = function(){
    console.log(this.name);
}

//Método estático
Foo.write = function(){
    console.log("static method");
}

//ES6
class Foo{
    //atributo privado
    #name
    constructor(name){
        this.#name = name;
    }

    write(){
        console.log(this.#name);
    }

    static write(){
        console.log("static method");
    }
}



//https://developer.mozilla.org/en-US/docs/Glossary/Global_object
//https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
//https://github.com/tc39/ecma262?tab=readme-ov-file -> para ver actualizaciones
// Function + lo que hereda = prototype