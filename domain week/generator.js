function* fun(array){
    
        yield* array
        yield 20
}
let arr=[2,7,6,9]
let gen = fun(arr)
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
