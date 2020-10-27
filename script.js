$(document).ready(function() {
    $("#item-slider").owlCarousel({
        items : 4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,3],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        
    });


    $("#pro-slider").owlCarousel({
        items : 4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,3],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        
    });


    $("#main-slider").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigation:false,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        
    });
});