var dia= new Date()
var sem= dia.getDay()
var hour= dia.getHours()
var minute= dia.getMinutes()
switch (sem){
    case 0:
        data.innerHTML=(`Domingo`)
        break
    case 1:
        data.innerHTML=(`Segunda-Feira`)
        break
    case 2:
        data.innerHTML=(`Terça-Feira`)
        break
    case 3:
        data.innerHTML=(`Quarta-Feira`)
        break
    case 4:
        data.innerHTML=(`Quinta-Feira`)
        break
    case 5:
        data.innerHTML=(`Sexta-Feira`)
        break
    case 6:
        data.innerHTML=(`Sábado`)
        break
}
hora.innerHTML=(`São ${hour} Horas e ${minute} minutos`)
