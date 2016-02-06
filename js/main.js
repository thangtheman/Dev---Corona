// JavaScript Document

$(document).bind(
      'touchmove',
          function(e) {
            e.preventDefault();
          }
);
//pinterest
$(window).load(function () {
$("span[class$='embed_grid_bd']").removeAttr("style");
$("span[class$='embed_grid_bd']").addClass("jq-pin-ad-class");
});



$(document).ready(function () {
							
							
        $(".sm-9 img").addClass('img-responsive');
});

//COMMENTS SCROLL TO RESPECTIVE AREA

var smoothmove = 0;
if($(window).width() < 1025){
  smoothmove = 120;
}
else{
  smoothmove = 0;
}
$('.comments').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - smoothmove
    }, 1000);
    return false;
});












//bootstrap offcanvas
$(function() {
  $('button.navbar-toggle').click(function(){ 
    $('body').toggleClass('out');
    $('nav.navbar-fixed-top').toggleClass('out');
    if ($('body').hasClass('out')) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  });
});

$(document).click(function(e) {
  if (!$(e.target).closest('.navbar-collapse, button.navbar-toggle').length && $('body').hasClass('out')) {
    e.preventDefault();
    $('button.navbar-toggle').trigger('click');
  }
}).keyup(function(e) {
  if (e.keyCode == 27 && $('body').hasClass('out')) {
    $('button.navbar-toggle').trigger('click');
  } 
});


//tabs
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });


//neat
//$("#searchclear").click(function(){
//    $("#searchinput").val('');
//});
//
//jQuery(".dropdown-toggle").removeClass("disabled");

//



//custom nav order change
var width = $('body').width();
//$(window).on('load resize', function(){
//  var ww=$(this).width();
  //if(ww < 767){
//    $(".mbl-view-b").insertBefore(".mbl-view-a");
  //}
//});



//form top
$(document).ready(function() {
						   
		
  if (width < 1025) {
	  
	  var navhtml=jQuery(".navbar-collapse").clone();
	  //jQuery(".navbar-collapse").appendTo('.jq-lee');
	  jQuery('.jq-lee').html(navhtml);
//		jQuery(".jq-parent-nav .jq-nav-structure").length
	jQuery(".navbar-fixed-top .jq-lee .jq-nav-structure").removeClass('custom-top-master')
	jQuery(".navbar-fixed-top.out .jq-parent-nav .jq-nav-structure").addClass('in')
	 $(".navbar-toggle.collapsed").click(function(){
		   $(".dropdown-toggle").removeClass("disabled");		
	}); 
	jQuery(".dropdown-toggle").on('dblclick',function(){
	alert();
      window.location.assign(jQuery("this").attr("href"));
    });
	var touchtime = 0;
	$('.dropdown-toggle').on('click', function() {
    if(touchtime == 0) {
        //set first click
        touchtime = new Date().getTime();
    } else {
        //compare first click to this click and see if they occurred within double click threshold
        if(((new Date().getTime())-touchtime) < 800) {
            //double click occurred           
			window.location.assign($(this).attr("href"));
            touchtime = 0;
        } else {
            //not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    } 
});
	
  }  
  
 
});



//fixed header
$(window).scroll(function(){
    if($(document).scrollTop() > 400) {
        $('#header').addClass('reduce');
    } else {
        $('#header').removeClass('reduce');
    }
});




//header add css
$(document).ready(function() {
  if (width < 767) {
$(".header").parents('.col-lg-12').css("box-shadow", "0px 0px 0px 4px #f0c");
  }
});

$(window).on('load resize', function(){
  if(width < 1025){
   $(".jq-trim").each(function(i){
    len=$(this).text().length;
    if(len>10)
    {
      $(this).text($(this).text().substr(0,170)+'...');
    }
  });       
  }
});



$(window).on('load resize', function(){
  if(width < 1025){
   $(".jq-trim-head").each(function(i){
    len=$(this).text().length;
    if(len>10)
    {
      $(this).text($(this).text().substr(0,30)+'...');
    }
  });       
  }
});



// equal height script

$(document).ready(function(){
       $('.featured-widget').each(function(){  
            var highestBox = 0;
            $('.equal-height', this).each(function(){
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });  
            $('.equal-height',this).height(highestBox);     
    });    
});



//search





//offcanvas
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
   if(width < 1025){
    $(".custom-top-master .jq-mobile-item-1").addClass('clearfix').insertBefore(".custom-top-master .jq-mobile-item-2");
	    $(".custom-top-master .jq-mobile-item-1").insertBefore(".custom-top-master .jq-mobile-item-2");
    $(".custom-top-master .jq-mobile-item-3").insertAfter(".custom-top-master .jq-mobile-item-2");
    $(".custom-top-master  .jq-mobile-item-4").insertAfter(".custom-top-master  .jq-mobile-item-3");
	$(".custom-top-master .jq-mobile-item-5").insertAfter(".custom-top-master  .jq-mobile-item-3");
	 $(".copy-text").insertAfter(".custom-top-master .jq-mobile-item-4");
  }
  
  
  // for removing out classes 
							//fix for allowing the user to type email in signup modal
						$('.custom-top-master .sign-up-btn').on('click',function()
                        {
                          $('body').removeClass('out');
                          $('#header nav').removeClass('out');
                        });
							
});




//page refresh
//jQuery('ul.nav li.dropdown').hover(function() {
  //jQuery(this).find('.dropdown-menu').stop(true, true).delay(250).fadeIn();
//}, function() {
//  jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
//});


 // Add slideup & fadein animation to dropdown
//$('.navbar .dropdown').hover(function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(300);
    //}, function() {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(300)
//  });

//
//$('.navbar .dropdown').hover(function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
//}, function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
//});


//
$('ul.nav li.dropdown').hover(function() {http://www.bootply.com/PZIuAAmHST#
$(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(10);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(10);
});

//$(document).ready(function () {
  //  $('.navbar-default .navbar-nav > li.dropdown').hover(function () {
    ///    $('ul.dropdown-menu', this).stop(true, true).slideDown('slow');
       // $(this).addClass('open');
//    }, function () {
  //      $('ul.dropdown-menu', this).stop(true, true).slideUp('slow');
    //    $(this).removeClass('open');
//    });
//});

//ie8 support






//fullwidth image
if($(window).width()<767){

    $('.full-width-img').css('width',$(window).width());
    $(window).resize(function(){
        $('.full-width-img').css('width',$(window).width());
    })
}

$(document).ready(function () {
    $('.fa.fa-search.main').click(function(){
        var $search = $('.hidden-search.main');
        console.log($search.width());
        if($search.width() == 200){
            $search.width(0);
            setTimeout(function() {
                $search.toggle();
            }, 1000);

        }else{
            $search.toggle();
            if($search.width()== 0){
                $search.width(200);
            }
        }

    });
    $('.fa.fa-search.mobile').click(function(){
        var $search = $('.hidden-search.mobile');
        console.log($search.width());
        if($search.width() == 200){
            $search.width(0);
            setTimeout(function() {
                $search.toggle();
            }, 1000);

        }else{
            $search.toggle();
            if($search.width()== 0){
                $search.width(200);
            }
        }

    });
    var detach1,detach2,detach3;
    detach1 = $('.detach1').detach();
    detach2 = $('.detach2').detach();
    detach3 = $('.detach3').detach();
    if ($(window).width() < 767) {

        $('.injectmob1').prepend(detach1);
        $('.injectmob2').prepend(detach2);
        $('.injectmob3').prepend(detach3);
    }
    if ($(window).width() >= 767) {
        $('.detach1').detach();
        $('.detach2').detach();
        $('.detach3').detach();
        $('.injectdesk1').prepend(detach1);
        $('.injectdesk2').prepend(detach2);
        $('.injectdesk3').prepend(detach3);
    }
    $( window ).resize(function() {
        if ($('window').width() < 767) {
            console.log(detach1);
            console.log('<');
            $('.detach1').detach();
            $('.detach2').detach();
            $('.detach3').detach();
            $('.injectmob1').prepend(detach1);
            $('.injectmob2').prepend(detach2);
            $('.injectmob3').prepend(detach3);
        }
        if ($(window).width() >= 767) {
            console.log(detach1);
            console.log('>');
            $('.detach1').detach();
            $('.detach2').detach();
            $('.detach3').detach();
            $('.injectdesk1').prepend(detach1);
            $('.injectdesk2').prepend(detach2);
            $('.injectdesk3').prepend(detach3);
        }
    })
});




//modal script center of device
    /**
     * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
     */
    $(function() {
        function reposition() {
            var modal = $(this),
                dialog = modal.find('.modal-dialog');
            modal.css('display', 'block');
            
            // Dividing by two centers the modal exactly, but dividing by three 
            // or four works better for larger screens.
            dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
        }
        // Reposition when a modal is shown
        $('.modal').on('show.bs.modal', reposition);
        // Reposition when the window is resized
        $(window).on('resize', function() {
            $('.modal:visible').each(reposition);
        });
    });
	
	
	
	
	
//main search
$(document).ready(function(){

    $('.clear-btn').on('click', '.search-icon.active', function(){
      $('.search-icon').removeClass('active');      
    });

    $('.clear-btn').on('click', function(){ 
      $('.search-icon').addClass('active');
      $('.search-bar-group').toggleClass('open');
      $('.fa-times').toggleClass('hide');
    });
    
    $('.search-widget').on('click', function(){
      $('.search-zone').slideToggle();
    });
    
});

