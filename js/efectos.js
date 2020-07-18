$(document).ready(function(){
// Efecto Menu    
     $('.menu a').each(function(index, elemento){
         $(this).css({
             'top': '-200px'
         });
         $(this).animate({
             'top': '0'
         },2000 + (index * 500));
     });
// Efecto Header

    if( $(window).width() > 800) {
        $('header .textos').css({
            'opacity': '0',
            'margin-top': '0'
        });
        $('header .textos').animate({
            'opacity': '1',
            'margin-top': '-52px'
        }, 2000);
    }
// Scroll Elementos Menu

    var acercaDe = $('#acerca-de').offset().top,
    menu = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : acercaDe - 100
        }, 300);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : menu 
        }, 300);
    })
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : galeria
        });
    });
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop : ubicacion
        });
    });
    
});

