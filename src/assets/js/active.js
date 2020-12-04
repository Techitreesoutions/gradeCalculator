(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     
        
        // Popup Gallery
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        // Responsive Menu
        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu-wrap"
        });
        
        // Section Animations
        new WOW().init();
        
        // Smooth Scroll
        var scroll = new SmoothScroll('a[href*="#"]');
        
        // Show or hide the sticky footer button
        $(window).on( "scroll", function() {
            if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
                }
        });
        
        // Custom Scroll Spy
        $(window).on('scroll', function() {
            $('div[scroll-spy="true"]').each(function() {
                if($(window).scrollTop() >= $(this).offset().top-85) {
                    var id = $(this).attr('id');
                    $('.main-menu li a').parent('li').removeClass('active');
                    $('.main-menu li a[href="#'+ id +'"]').parent('li').addClass('active');
                }
            });
        });

    });

    /*---product column5 activation---*/
    var $porductColumn5 =  $('.product_column5');
    if($porductColumn5.length > 0){
        $porductColumn5.on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
            margin: 20,
            dots:false,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                },

              }
        });
    }

     /*---product navactive activation---*/
     var $productNavactive = $('.product_navactive');
     if($productNavactive.length > 0){
     $('.product_navactive').owlCarousel({
         loop: true,
         nav: true,
         autoplay: false,
         autoplayTimeout: 8000,
         items: 4,
         dots:false,
         navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         responsiveClass:true,
         responsive:{
                 0:{
                 items:1,
             },
             250:{
                 items:2,
             },
             480:{
                 items:3,
             },
             768:{
                 items:4,
             },

         }
     });
  } 
 
 $('.modal').on('shown.bs.modal', function (e) {
     $('.product_navactive').resize();
 })

 $('.product_navactive a').on('click',function(e){
   e.preventDefault();

   var $href = $(this).attr('href');

   $('.product_navactive a').removeClass('active');
   $(this).addClass('active');

   $('.product-details-large .tab-pane').removeClass('active show');
   $('.product-details-large '+ $href ).addClass('active show');

 })
    
    jQuery(window).load(function(){
        jQuery(".chipsofic-slider-preloader-wrap, .chipsofic-site-preloader-wrap").fadeOut(500);
    });


}(jQuery));