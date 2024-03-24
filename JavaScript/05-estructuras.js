const a = [1,2,3,4,5,6];

//filter
a.filter(v=>v%2===0) // [2,4,6]
function filter(array, predicate){
    const newArray = [];
    for(const value of array){
        if(predicate(value)){
            newArray.push(value)
        }
    }
    return newArray;
}
//find
a.find(v=>v%2===0) //2

//sort

//map
const map = new Map();
map.set("key", 1)
map.get("key")

//reduce -> a es el acumulado que llevo. Tiene un initial value opcional -> permite reducir cualquier objeto
a.reduce((a,v)=>a+v,100)

/*
0+1=1
1+2=3
3+3=6
6+4=10
10+5=15
15+6=21
*/ 
