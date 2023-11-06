function contar(){
    let cont=0
    let res = document.querySelector('#res')
    let numa = parseInt(document.querySelector('#cont').value)
    res.innerHTML=''
    while(cont < numa){
        res.innerHTML+=cont+1+'<br>'
        cont++
    }
}