
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

function adicionarCard() {
    var box = document.querySelector('.swiper-wrapper');
    
    var novocard = `
            <div class="card swiper-slide">
                <div class="image-content">
                    <span class="overlay"></span>

                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqaAkRBaosXnlvCBn0YPbyhTPlEMIr84Ezg&s" alt="" class="card-img">
                    </div>
                </div>

                <div class="card-content">
                    <h2 class="name">Mosely Jober</h2>
                    <p class="description">
                        Categoria desejada: Ortopedista 
                        <br>
                        Data: 24/12/2024
                        <br>
                        Horário: 20:00
                    </p>

                    <button class="button">Ler mais</button>
                </div>
            </div>
`;
    box.innerHTML("beforeend", novocard);
  }