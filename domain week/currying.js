function sum(a,b,c){
    return a+b+c
}

const sum2=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}

console.log(sum2(1)(2)(3))