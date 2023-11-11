function calcular(){
    tar = parseInt(document.querySelector('#tar').value)
    vzs=tar-1
    if(tar < 0){
        res.innerHTML=('Digite um número igual ou maior que zero')
    }
    else if(tar > 170){
        res.innerHTML=('Número Infinito')
    }
    else if(isNaN(tar)){
        res.innerHTML=('Número Inválido')
    }
    else{
        while(vzs>=1){
            tar*=vzs
            vzs--
        }
    res.innerHTML=tar
}
    }
    