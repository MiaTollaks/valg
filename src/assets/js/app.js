import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(function(){
    cardNext();
});



function cardNext() {
    
    var $startCards = ('.start');
    
    var $cards = $('.card-head');
    
    var $viktig = $('.btn-viktig, .btn-ikke-viktig');
    var $valg =  $('.btn-valg');
    var $vetikke = $('.btn-vetikke');
    
    
    // VIKTIG-BTN: CHANGE COLORS -> SHOW NEXT & PREV
    $viktig.on('click', function(){
        $(this).addClass('clicked-viktig');
        $(this).siblings().removeClass('clicked-viktig');
        $('.next').addClass("show-next animated fadeInUp");
    }); 
    
    // VALG-BTN: ANIMATE & CHANGE COLORS 
    $valg.on('click', function(){
        $(this).addClass('animated pulse clicked-valg');
        $(this).siblings().removeClass('animated pulse clicked-valg');
        
        // VIKTIG-BTNs SHOW UP 
        $viktig.css('visibility', 'visible').addClass("animated fadeInUp"); 
        
    }); 
    
    // VET IKKE BUTTON: ANIMATE -> SHOW NEXT -> HIDE VIKTIG
    $vetikke.on('click', function(){
        $(this).addClass('animated pulse clicked-valg');
        $('.next').addClass("show-next animated fadeInUp");
        $valg.removeClass('clicked-valg');
        $viktig.removeClass('clicked-viktig');
        $viktig.css('visibility', 'hidden');
    });
    
    // CARD CAROUSEL - MAKE FIRST CARD ACTIVE 
        $cards.first().addClass('active');
    
    // NEXT BUTTON 
    $('.next').on('click', function(){ 
        
        // REMOVE CLICKED-CLASS -> HIDE NEXT-PREV & VIKTIG
        $('.next').removeClass('show-next');
        $('.btn-valg, .btn-vetikke').removeClass('clicked-valg animated pulse');
        $viktig.css('visibility', 'hidden').removeClass("animated fadeInUp");
        $viktig.removeClass('clicked-viktig');
        
        var currentCard = $('.active');
        var nextCard = currentCard.next();
        
        // NEXT CARD
        if(nextCard.length){
            currentCard.removeClass('active').css('z-index', -10);
            nextCard.addClass('active').css('z-index', 10);
        } 
        
        // FIND LAST ELEMENT - HIDE ALTERNATIV - SHOW RESULT
        if(currentCard.index() == ($cards.length - 1) ) {
            console.log('siste element');
            $('.card-wrapper').css('display', 'none');
            $('.finished').css('display', 'block');            
        }
        
        //PREV NOT VISIBLE ON FIRST CARD -> SHOW PREV ONCLICK NEXT
        $('.prev').addClass('show-prev');
        
    });
    
    // BACK BUTTON 
    $('.prev').click(function(){
        
        //HIDE NEXT-PREV - REMOVE ANIMATIONS AND CLICKED-CLASS
        $('.next').removeClass('show-next');
        $valg.removeClass('clicked-valg animated pulse');
        $viktig.removeClass('clicked-viktig');
        $vetikke.removeClass('clicked-valg');
        $viktig.css('visibility', 'hidden');
        
        //PREVIOUS CARD
        var currentCard = $('.active');
        var prevCard = currentCard.prev();

        if(prevCard.length){
          currentCard.removeClass('active').css('z-index', -10);
          prevCard.addClass('active').css('z-index', 10);
        }
        
        
        // HIDE PREV WHEN GOING BACK TO FIRST CARD 
        var $first = $('#id-1');
                  
        if ($first[0] === prevCard[0]){
            $('.prev').removeClass('show-prev');
        } 
        //console.log($first.length);
        
    });
        
    // START OVER 
    $('.btn-start-over').click(function(){
        location.reload();        
    });

    
    
    
} // end cardNext