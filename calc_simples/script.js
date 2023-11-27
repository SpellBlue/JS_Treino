
const vals = [
    document.querySelector('#num1').value,
    document.querySelector('#num2').value
]

const sinais = [
    document.querySelector('#soma'),
    document.querySelector('#subt'),
    document.querySelector('#multi'),
    document.querySelector('#divi')
]

let res = document.querySelector('#res')

const ops = [
    sinais[0].addEventListener('click',()=>{
        num1 = document.querySelector('#num1').value
        num2 = document.querySelector('#num2').value
        if((num1=='') || (num2=='')){
        window.alert('preencha ambos os campos')
        }
        else{
        res.innerHTML=(parseFloat(num1) + parseFloat(num2))
        }
    }),
    sinais[1].addEventListener('click',()=>{
        num1 = document.querySelector('#num1').value
        num2 = document.querySelector('#num2').value
        if((num1=='') || (num2=='')){
            window.alert('preencha ambos os campos')
            }
            else{
        res.innerHTML=(parseFloat(num1) - parseFloat(num2))
    }
    }),
    sinais[2].addEventListener('click',()=>{
        num1 = document.querySelector('#num1').value
        num2 = document.querySelector('#num2').value
        if((num1=='') || (num2=='')){
            window.alert('preencha ambos os campos')
            }
            else{
        res.innerHTML=(parseFloat(num1) * parseFloat(num2))
    }
    }),
    sinais[3].addEventListener('click',()=>{
        num1 = document.querySelector('#num1').value
        num2 = document.querySelector('#num2').value
        if((num1=='') || (num2=='')){
            window.alert('preencha ambos os campos')
            }
            else{
        res.innerHTML=(parseFloat(num1) / parseFloat(num2))
    }
    })
]