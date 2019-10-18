  /*global $*/

$(document).ready(function(){
    var width = $(window).width();
    var height = 700;
    if (width < 900){
        height= 300;
    }

    $('.slider').slider({ height: height, indicators: false }
    );
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav({
        menuWidth: 150, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
});
