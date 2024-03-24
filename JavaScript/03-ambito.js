/*Casos en que se pierde el this*/
    //1. Cuando se asigna una función a una variable

    window.x = 10;
    window.foo = {
        x:11,
        write:function(){
            console.log(this.x);
        }
    }

    window.foo.write();
    window.writer = window.foo.write()
    window.writer()

    //2. Cuando pasas como argumento a otra función una función
    class Bar{
        constructor(writer){
            writer();
            this.writer = writer;
            this.writer();
        }
    }

    class Foo{
        constructor(){
            new Bar(this.writer.bind(this))
        }

        writer(){
            console.log(this);
        }
    }

    //
    const bar = {}

    function Foo(name){
        this.name = name;
    }

    Foo.call(bar, "Pedro")
    Foo.apply(bar, ["Pedro"])
    //bind -> para encerrar el this en su ámbito
    //una función flecha no pierde el ámbito

    
