

function* contagem(){
    yield '01'
    yield '02'
    yield '03'
}

let i=contagem()
console.log(i.next())
console.log(i.next())