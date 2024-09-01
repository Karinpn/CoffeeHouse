// hamburger menu

$('.menu').on('click', function() {
  $('.menu').removeClass('open');
});
$('.mobile-menu').on('click', function() {
  $('.menu').toggleClass('open');
  $(this).toggleClass('active',$('.menu').hasClass('open'));
});



// Slider

$('.slider').slick({
    arrows:true,
    dots:true,
    autoplay: true, 
    autoplaySpeed: 3000,
    adaptiveHeight:true,
    responsive: [
        {
          breakpoint: 579,
          settings: {
            arrows:false,
         },
          
        }],
}); 


//прокрутка 

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});


///////////////////////////







