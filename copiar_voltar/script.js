
const cursos = [...document.querySelectorAll('.curso')]
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso=evt.target
        curso.classList.toggle('selecionado')
    })
})

const press = document.querySelector('#press')

press.addEventListener('click',()=>{
    const cursoselec = [...document.querySelectorAll('.selecionado')]
    cursoselec.map((el)=>{
        box2.appendChild(el)
    })
})

const reset= document.querySelector('#voltar')

reset.addEventListener('click',()=>{
    const offcursos = [...document.querySelectorAll("div:not(.selecionado)")]
    offcursos.map((el)=>{
        box1.appendChild(el)
    })
})