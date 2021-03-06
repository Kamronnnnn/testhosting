$(function () {
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop;
  let nav = $('#nav');
  let navToggle = $('#navToggle');
  let navLink = $('#navLink');

  // Fixed Header
  $(window).on('scroll resize load', function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // Smooth scroll
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    nav.removeClass('show');
    $('html, body').animate(
      {
        scrollTop: elementOffset - 100,
      },
      900
    );
  });

  // Nav toggle
  navToggle.on('click', function (event) {
    event.preventDefault();
    nav.toggleClass('show');
  });
});
