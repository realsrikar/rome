// (function($) {
//   $('.js-nav-menu-toggle').on('click', function() {
//     $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
//   });
//
//   $('html').on('click', function(e) {
//     if(!$(e.target).closest('.js-nav-menu').length &&
//       ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
//         $('.js-nav-menu').removeClass('navigation-menu--open');
//     }
//   });
// })(jQuery);
// link jQuery if using this above code again


const menuToggle = document.querySelector('.js-nav-menu-toggle'),
  navMenu = document.querySelector('.js-nav-menu')

menuToggle.addEventListener('click', toggleMenu)

function toggleMenu() {
  navMenu.classList.toggle('navigation-menu--open')
}


document.body.addEventListener('click', closeOutsideNav)

function closeOutsideNav(e) {
  // debugger
  if ((e.target.closest('.js-nav-menu') === null) || (e.target.closest('.js-nav-menu').length && navMenu.classList.contains('navigation-menu--open')))
    navMenu.classList.remove('navigation-menu--open');
}
