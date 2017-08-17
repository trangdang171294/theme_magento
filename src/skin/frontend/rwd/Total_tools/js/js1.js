/**
 * Created by trang on 10/07/2017.
 */
jQuery.noConflict();

jQuery( document ).ready(function( $ ) {

    // You can use the locally-scoped $ in here as an alias to jQuery.
    //brands slider
    // $("#owl-demo").owlCarousel({
    //     items : 5,
    //     lazyLoad : true,
    //     navigation : true,
    //     // autoPlay : true,
    //     pagination: false,
    // });

    $(".owl-prev").empty();
    $(".owl-next").empty();
    $(".owl-prev").append('<svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>');
    $(".owl-next").append('<svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>');


    //homepage slider
    // $("#homepage-slider").owlCarousel({
    //
    //     navigation : false, // Show next and prev buttons
    //     slideSpeed : 300,
    //     paginationSpeed : 400,
    //     singleItem:true,
    //     autoPlay : true
    //
    // });
});

