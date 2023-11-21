
const box = document.querySelector('#box1')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',()=>{
        box.removeChild(el)
    })
})