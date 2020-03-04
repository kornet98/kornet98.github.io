$(function(){

	$('.head-slider').slick({
	  	dots: true,
	  	prevArrow:'<button type="button" class="slick-prev"><i class="left"></i></button>',
	  	nextArrow:'<button type="button" class="slick-next"><i class="right"></i></button>'
	});

	$('.menu-burger').click(function(e){
		$('.menu-burger, .navigation__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

    
	
    /*
$("#menuButton").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $('.mainmenu');
          if (mainmenu.hasClass('open')) { 
            mainmenu.removeClass('open');
          }
          else {
            mainmenu.addClass('open');
          }
        });
    */
  	

 	//плавное перемещение страницы к нужному блоку
	$(".go-to").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1800);
	});

});