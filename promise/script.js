
const display = document.querySelector('#display')
const click = document.querySelector('#click')

function timer(msg,tempo){
    display.innerHTML='processando...'
    let p = new Promise((resolve, reject) => {
        let res=true
        setTimeout(()=>{
            if(res){
                display.innerHTML=msg
                resolve('funcionou')
            }
            else{
                display.innerHTML='falhou'
                reject('falhou')
            }
        },tempo)
    })
    return p
}

click.addEventListener('click',()=>{
    timer('Concluído',3000)
})
