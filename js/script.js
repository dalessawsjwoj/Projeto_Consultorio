var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  var novocard

  function criar() {
    
    novocard = `
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

  swiper.appendSlide([novocard]);
}

function remover() {
  var slide = prompt("Qual slide apagar? ");
  
  if (slide >= 0) {
    swiper.removeSlide(slide);
  }
}
