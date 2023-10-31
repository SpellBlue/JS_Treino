function enviar(){
    var ageinput=document.querySelector('#age').value
    var age=(parseFloat(ageinput))
    if (age < 18 && age>=0){
        res.innerHTML=(`Não pode dirigir`)
    }
    else if(age>130 || age<0){
        res.innerHTML=(`Entre com uma idade válida`)
    }
    else{
        res.innerHTML=(`Pode dirigir`)
    }
}