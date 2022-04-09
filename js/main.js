window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end


});

$(document).ready(function(){

//------------------------------ CART CLIDER ----------------------------------//
	$('.cart-slider').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
	    dots:false,
	    navText: ["<img class='svg-changeable' src='img/prev.svg'>","<img class='svg-changeable' src='img/next.svg'>"],
	    responsive:{
	        0:{
	            items:1,
	            margin:10,
	            dots:true,
	            nav:false
	        },
	        480:{
	        	items:1,
	        	dots:false,
	        	nav:true,
	        },
	        768:{
	            items:2,
	            margin:10
	        },
	        1024:{
	            items:3,
	            nav:true
	        }
	    }
	});
//------------------------------ CART CLIDER END----------------------------------//

//------------------------------ COMMENT CLIDER ----------------------------------//
	$('.com-slider').owlCarousel({
	    loop:false,
	    margin:20,
	    nav:true,
	    dots:false,
	    items:1,
	    navSpeed:600,
	    navText: ["<img class='svg-changeable' src='img/bprev.svg'>","<img class='svg-changeable' src='img/bnext.svg'>"],
	    responsive:{
	    	0:{
	    		items:1,
	    		nav:false
	    	},
	    	480:{
	    		items:1,
	    		nav:true
	    	}
	    }
	    
	});
//------------------------------ COMMENT CLIDER END----------------------------------//


//------------------------------ GALLERY SLIDER ----------------------------------//

	var mql = window.matchMedia('all and (max-width: 767px)');
    if(mql.matches){
     	$('.galin__body').addClass('owl-carousel');
        $('.galin__body a').addClass('item');
        $('.galin__body a').attr('data-fancybox','gallery');
        $('.galin__body a').removeClass('limited');

        $('.galin__body').owlCarousel({
		    loop:false,
		    margin:0,
		    nav:false,
		    dots:true,
		    dotsEach:2,
		    responsive:{
		        0:{
		            items:1,
		            dots:true,
		            nav:false
		        },
		        768:{
		            items:1,
		            dots:false,
		            nav:false
		        },
		        1000:{
		            items:1
		        }
		    }
		});
    };
	
//------------------------------ GALLERY SLIDER END----------------------------------//


//------------------------------ CHECKBOX ----------------------------------//
(function($) {
	$(function() {

  	$('input, checkbox').styler();

	});
})(jQuery);

//------------------------------ CHECKBOX END----------------------------------//


//------------------------------ SVG COLOR CHANGE ----------------------------------//
	
	$('.htin__menu').mouseover(function() {
		$('.htin__menu__img img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#ffe400');
		      $svg.find('.cls-2').css('fill', '#ffe400');
		      $svg.find('.cls-3').css('fill', '#ffe400');
		      $svg.find('.cls-4').css('fill', '#ffe400');
		      $svg.find('.cls-5').css('fill', '#ffe400');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.htin__menu').mouseout(function() {
		$('.htin__menu__img img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.com-slider .owl-nav .owl-prev').mouseover(function() {
		$('.com-slider .owl-nav .owl-prev img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#ffe400');
		      $svg.find('.cls-2').css('fill', '#ffe400');
		      $svg.find('.cls-3').css('fill', '#ffe400');
		      $svg.find('.cls-4').css('fill', '#ffe400');
		      $svg.find('.cls-5').css('fill', '#ffe400');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.com-slider .owl-nav .owl-prev').mouseout(function() {
		$('.com-slider .owl-nav .owl-prev img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});   

	$('.com-slider .owl-nav .owl-next').mouseover(function() {
		$('.com-slider .owl-nav .owl-next img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#ffe400');
		      $svg.find('.cls-2').css('fill', '#ffe400');
		      $svg.find('.cls-3').css('fill', '#ffe400');
		      $svg.find('.cls-4').css('fill', '#ffe400');
		      $svg.find('.cls-5').css('fill', '#ffe400');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.com-slider .owl-nav .owl-next').mouseout(function() {
		$('.com-slider .owl-nav .owl-next img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});   

//------------------------------- CLUP SLIDER HOVER -------------------------------//

	$('.cart-slider .owl-nav .owl-prev').mouseover(function() {
		$('.cart-slider .owl-nav .owl-prev img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#ffe400');
		      $svg.find('.cls-2').css('fill', '#ffe400');
		      $svg.find('.cls-3').css('fill', '#ffe400');
		      $svg.find('.cls-4').css('fill', '#ffe400');
		      $svg.find('.cls-5').css('fill', '#ffe400');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.cart-slider .owl-nav .owl-prev').mouseout(function() {
		$('.cart-slider .owl-nav .owl-prev img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});   

	$('.cart-slider .owl-nav .owl-next').mouseover(function() {
		$('.cart-slider .owl-nav .owl-next img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#ffe400');
		      $svg.find('.cls-2').css('fill', '#ffe400');
		      $svg.find('.cls-3').css('fill', '#ffe400');
		      $svg.find('.cls-4').css('fill', '#ffe400');
		      $svg.find('.cls-5').css('fill', '#ffe400');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.cart-slider .owl-nav .owl-next').mouseout(function() {
		$('.cart-slider .owl-nav .owl-next img.svg-changeable').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});   

//------------------------------- CLUP SLIDER HOVER END ---------------------------//

//------------------------------ SVG COLOR CHANGE END -----------------------------//


//------------------------------ MAP -----------------------------//
	$('.openner').on('click', function(){
		$(this).toggleClass('click');
		// $('.we__left').fadeToggle();
		$('.we__left').toggleClass('hiddened');
		$('.shape').toggleClass('hiden');
	});
//------------------------------ MAP END -----------------------------//


//------------------------------ UP -----------------------------//
	var limit = $(window).height() / 3,
        $backToTop = $('.up');

    $(window).scroll(function() {
        if ($(this).scrollTop() > limit) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    // scroll body to 0px on click
    $backToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    var limit = $(window).height() / 3,
        $backToTop = $('.inup');

    $(window).scroll(function() {
        if ($(this).scrollTop() > limit) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    // scroll body to 0px on click
    $backToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
//------------------------------ UP END -----------------------------//


//------------------------------ MENU -----------------------------//
	$('.modal-menu ul li').has('ul').addClass('child');
	$('.modal-menu ul li').after().on('click', function(){
		$(this).closest('.child').find('ul').stop().slideToggle(500);
		$(this).closest('.child').toggleClass('open');
	});
//------------------------------ MENU END -----------------------------//


//------------------------------ GALLERY LIMIT -----------------------------//
	if (window.matchMedia('(max-width: 1023px)').matches) {
        $('.galin__body a').addClass('limited');
        $('.galin__body a').removeAttr('data-fancybox');
        var g = $('.galin__body a').length;
        var l = 4; // limit number
        for (var i=1; i<=g; i++){
        	if(i<=l) {
        		$('.galin__body a:nth-child('+i+')').removeClass('limited');
        		$('.galin__body a:nth-child('+i+')').attr('data-fancybox','gallery');
        	}
        }
    }; 
//------------------------------ GALLERY LIMIT END -----------------------------//


//------------------------------ NEWS LIMIT -----------------------------//
	// if (window.matchMedia('(max-width:479px)')matches) {
	// 	$('.news-item').addClass('.limited');
	// 	var c = $('.news-item').length;
	// 	var lim = 1;
	// }

//------------------------------ NEWS LIMIT END -----------------------------//

});