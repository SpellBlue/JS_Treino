

function soma(...valores){
    function somar(val){
        res=0
        for (v of val)
        res+=v
        console.log(val)
        return res
    }
    return somar(valores)
}
console.log(soma(1,2,4,4))