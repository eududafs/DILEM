$(document).ready(function () {
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        /*$('.sub-btn').not(this).next('.sub-menu').slideUp(); ?
        $(this).next('.sub-menu').slideToggle(); removido por travar
        $(this).find('.dropdown').toggleClass('rotate'); removido por nao ser ais necessario*/
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');

        $('.menu-btn').css("visibility", "visible");
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
  });

    const list = document.querySelectorAll('.list');
    function activeLink() {
    var deveFechar = this.classList.contains('active');
        list.forEach((item) => {
            item.classList.remove('active');
            item.classList.add('disabled');
    });
    if(deveFechar){
      this.classList.remove('active');
      this.classList.add('disabled');
    }else{
      this.classList.remove('disabled');
      this.classList.add('active');
    }
  }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));