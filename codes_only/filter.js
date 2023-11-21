const idade = [14,12,15,18,50,23,40,6,13,53,29,10,2]

const maior = idade.filter((val)=>{
    if (val>=18)
    return val
})

const menor = idade.filter((val)=>{
    if (val<18)
    return val
})

console.log(maior)

console.log(menor)
