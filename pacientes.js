var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var pacientes = document.querySelector('.conteiner2')
var header = document.querySelector('.headerr')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    pacientes.classList.toggle('expandir')
    header.classList.toggle('expandir')
})

function abrir_fechar() {
        var box = document.querySelector('.conteiner-agend');
    
        if (box.classList.contains("fechado")) {
            box.classList.remove("apagado")
    
            setTimeout(function () {
                box.classList.remove("fechado")
            }, 1);
             
        } else {
            box.classList.add("fechado")
    
            setTimeout(function () {
                box.classList.add("apagado")
            }, 500);
        } 
}