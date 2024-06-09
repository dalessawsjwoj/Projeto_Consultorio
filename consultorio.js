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
var header = document.querySelector('.headerr')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    header.classList.toggle('expandir')
})

