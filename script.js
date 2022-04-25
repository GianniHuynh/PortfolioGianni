jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 400 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','50px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});


jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 400 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUpMobile').css('right','20px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUpMobile').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});