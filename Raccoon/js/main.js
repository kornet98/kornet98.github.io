$(function(){

	$('.head-slider').slick({
	  	dots: true,
	  	prevArrow:'<button type="button" class="slick-prev"><i class="left"></i></button>',
	  	nextArrow:'<button type="button" class="slick-next"><i class="right"></i></button>'
	});

	

    
	
    
  	

 	//плавное перемещение страницы к нужному блоку
	$(".go-to").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1800);
	});

});