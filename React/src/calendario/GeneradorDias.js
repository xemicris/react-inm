export default function* GeneradorDias(){
    let indice = 1;
    while(indice <= 31){
        yield indice++
    }
}

