
class passeio{
    constructor(portas,velmax){
        this.portas=portas
        this.velmax=velmax
        this.rodas=4
        this.cor='cinza'
    }
}

class moto extends passeio{
    constructor(portas,velmax){
        super(portas,velmax)
        this.portas=portas
        this.velmax=velmax
        this.rodas=2
    }
}

class militar extends passeio{
    constructor(portas,velmax,blindagem,municao){
        super(portas,velmax)
        this.portas=portas
        this.velmax=velmax
        this.blindagem=blindagem
        this.municao=municao
    }
atirar = function(){
            if (this.municao>0){
                console.log('pou!')
            this.municao--
            }
            else{
                console.log('Acabaram as balas')
            }
    }
    
    
}

c1 = new passeio(4,200)
c2 = new moto(0,300)
c3 = new militar(1,50,'pesada',55)
c3.atirar()
c3.atirar()
c3.atirar()
c3.atirar()

console.log(`O carro de passeio possui ${c1.portas} portas, ${c1.velmax}km/h de velocidade máxima, ${c1.rodas} rodas e sua cor é ${c1.cor}`)
console.log(`A moto possui ${c2.portas} portas, ${c2.velmax}km/h de velocidade máxima, ${c2.rodas} rodas e sua cor é ${c2.cor}`)
console.log(`o carro militar possui ${c3.portas} portas, ${c3.velmax}km/h de velocidade máxima, ${c3.rodas} rodas, sua blindagem é ${c3.blindagem} sua cor é 
${c3.cor} e ainda restam ${c3.municao} balas`)

c3.atirar()
c3.atirar()
c3.atirar()
c3.atirar()

console.log(`Agora restam somente ${c3.municao} balas`)