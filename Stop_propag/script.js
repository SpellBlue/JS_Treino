
const cursos = [...document.querySelectorAll('.curso')]
const box1 = document.querySelector('#box1')

box1.addEventListener('click',()=>{
    console.log('clicou')
})

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
    })
})