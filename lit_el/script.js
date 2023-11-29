
const adc = document.querySelector('#adc')
const res = document.querySelector('#res')

const pessoa={
    nome:'',
    idade:0,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nnome){
        this.nome=nnome
    },
    setIdade:function(nidade){
        this.idade=nidade
    },
}

adc.addEventListener('click',()=>{
    pessoa.setNome(document.querySelector('#nome').value)
    pessoa.setIdade(document.querySelector('#idade').value)
    res.innerHTML += `Nome: ${pessoa.nome} Idade: ${pessoa.idade} <br>`
})