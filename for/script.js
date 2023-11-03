function executar(){
    let txt=document.querySelector('#rep').value
    let numa=parseInt(document.querySelector('#vzs').value)
    let res=document.querySelector('#res')

    res.innerHTML=''
    
    for(let num1 = 0 ; num1 < numa ; num1++){
        res.innerHTML+=txt + "<br>"
}
}