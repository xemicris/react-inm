//Dadas las siguientes funciones constructoras crear una función factoria que simule el funcionamiento del operador new

function Foo(name){
    this.name = name
}

function Bar(name, surname){
    this.name = name;
    this.surname = surname;
}

function factory(scope, strType, ...args){
    //obtener desde el ámbito windows la función constructora
    const constructor = scope[strType];
    if(!constructor){
        throw `el ${strType} no existe`;
    }
    //crear this -> una instancia del prototipo
    const instancia = Object.create(constructor.prototype);

    //inicializar
    constructor.apply(instancia, args);

    return instancia;
}

factory(window, "Foo", "Pedro")
factory(window, "Bar", "Pedro", "Hurtado")