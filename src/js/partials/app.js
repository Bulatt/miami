;$( document ).ready(function() {

  win_w = $(window).width();


  //ARROW UP
  if(win_w  >= 1024){
      $(window).scroll(function(){
      if ($(this).scrollTop() > 800) {
        $('.arrow').fadeIn();
      } else {
        $('.arrow').fadeOut();
      }
      });
  }

  $('.arrow').click(function(){
  $("html, body").animate({ scrollTop: 200 }, 600);
  return false;
  });


  //POPUP IMAGES
  $(".box").magnificPopup({
    delegate: 'a',
    type: "image",
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });


  // SLIDESHOW BACKGROUND HEADER
  if(win_w  >= 1024){
    var imgArr = new Array( // relative paths of images
      "img/header-bg.jpg",
      "img/header2-bg.jpg"
    );

    var preloadArr = new Array();
    var i;

   /* preload images */
    for(i=0; i < imgArr.length; i++){
      preloadArr[i] = new Image();
      preloadArr[i].src = imgArr[i];
    }

    var currImg = 1;
    var intID = setInterval(changeImg, 8000);

   /* image rotator */
    function changeImg(){
      $('.header').animate({opacity: 0}, 1000, function(){
        $(this).css('background-image','url(' + preloadArr[currImg++%preloadArr.length].src +') ');
      }).animate({opacity: 1}, 1000);
    }
  }

  //SMOOTH SCROLLING

  $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
           scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
     });
     return false;

});

