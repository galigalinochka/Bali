let klick = document.querySelector('.header__menu-icon');
/*klick.onclick = function() {
	klick. classList.toggle('menu_state_open');
}*/
klick.addEventListener( 'click', function() {
  klick.classList.toggle('menu_state_open');
});

/*(function($){
  $(function() {
    $('.header__menu-icon').on('click', function() {
      $(this).closest('.header').toggleClass('menu_state_open');
    });
  });
})(jQuery);*/