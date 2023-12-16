
jobs = [...document.querySelectorAll('.classe')]

tes = document.querySelector('#tes')

button = document.querySelector('#confirmar')

class Guerreiro{
    constructor(){
        this.classe='Guerreiro'
        this.raça = 'Humano'
        this.alinhamento = 'Bem'
        this.arma = 'Espada'
        this.armadura = 'Pesada'
    }
    listar(){
        return `<div class='res'>Classe: ${this.classe}<br>Raça: ${this.raça}<br>Alinhamento: ${this.alinhamento}<br>Arma: ${this.arma}<br>Armadura: ${this.armadura}</div>`
    }
}
class Ladino extends Guerreiro{
    constructor(){
        super()
        this.classe='Ladino'
        this.arma = 'Adaga'
        this.armadura = 'Média'
    }
    listar(){
        return `<div class='res'>Classe: ${this.classe}<br>Raça: ${this.raça}<br>Alinhamento: ${this.alinhamento}<br>Arma: ${this.arma}<br>Armadura: ${this.armadura}</div>`
    }
}

class Mago extends Guerreiro{
    constructor(){
        super()
        this.classe='Mago'
        this.arma = 'Cajado'
        this.armadura = 'Leve'
    }
    listar(){
        return `<div class='res'>Classe: ${this.classe}<br>Raça: ${this.raça}<br>Alinhamento: ${this.alinhamento}<br>Arma: ${this.arma}<br>Armadura: ${this.armadura}</div>`
    }
}

button.addEventListener('click',()=>{
    jobs.map((el)=>{
            if(el.checked){
                if(el.id == 'warrior'){
                    this.c= new Guerreiro()
                    tes.innerHTML+= c.listar()
                }
                else if(el.id == 'rogue'){
                    this.c= new Ladino()
                    tes.innerHTML+= c.listar()
                }
                else if(el.id == 'mage'){
                    this.c= new Mago()
                    tes.innerHTML+= c.listar()
            }
        }
    })
})