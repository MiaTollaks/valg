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
    
    // change color on clicked
    // show next on click: ikke-viktig, vetikke, viktig
    $('.btn-viktig, .btn-ikke-viktig').on('click', function(){
        $(this).addClass('clicked-viktig');
        $(this).siblings().removeClass('clicked-viktig');
        $('.next').addClass("show-next animated fadeInUp");
    }); 
    
    // animate and change colors 
    $('.btn-valg').on('click', function(){
        $(this).addClass('animated pulse clicked-valg');
        $(this).siblings().removeClass('animated pulse clicked-valg');
        
        // viktig, ikke-viktig shows up when valg is clicked - minus vetikke
        $('.btn-viktig, .btn-ikke-viktig').css('visibility', 'visible').addClass("animated fadeInUp"); 
        
//        //shake buttons if not clicked in 5s
//        $('.btn-viktig, .btn-ikke-viktig').removeClass('fadeInUp');
//        setTimeout(function(){
//            $('.btn-viktig, .btn-ikke-viktig').addClass('tada');
//        }, 5000);
    }); 
    
    //VET IKKE BUTTON 
    $('.btn-vetikke').on('click', function(){
        $(this).addClass('animated pulse clicked-valg');
        $('.next').addClass("show-next animated fadeInUp");
        $('.btn-valg').removeClass('clicked-valg');
        $('.btn-viktig, .btn-ikke-viktig').removeClass('clicked-viktig');
        $('.btn-viktig, .btn-ikke-viktig').css('visibility', 'hidden');
    });
    
    // card carousel - make first card active
    $('.card-head').first().addClass('active');
    
    
    // hide back-btn on first slide

    
    // NEXT BUTTON 
    $('.next').on('click', function(){ 
        
        //hide next & prev & viktig
        $('.next').removeClass('show-next');
        $('.btn-valg, .btn-vetikke').removeClass('clicked-valg animated pulse');
        $('.btn-viktig, .btn-ikke-viktig').css('visibility', 'hidden').removeClass("animated fadeInUp");
        $('.btn-viktig, .btn-ikke-viktig').removeClass('clicked-viktig');
        $('.prev').addClass('show-prev');
        
        // next card
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        var cards = $('.card-head');
        
        
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } 
        
        // find last element, hide alternativ and show result
        if(currentImg.index() == (cards.length - 1) ) {
            console.log('siste elemtnt');
            $('.card-wrapper').css('display', 'none');
            $('.finished').css('display', 'block');            
        }
        
    });
    
    // BACK BUTTON 
    $('.prev').click(function(){
        
        //hide next & prev
        $('.next').removeClass('show-next');
        $('.btn-valg').removeClass('clicked-valg animated pulse');
        $('.btn-viktig, .btn-ikke-viktig').removeClass('clicked-viktig');
        $('.btn-vetikke').removeClass('clicked-valg');
        $('.btn-viktig, .btn-ikke-viktig').css('visibility', 'hidden');
        
        //previous card
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }
    });
        
    $('.btn-start-over').click(function(){
        location.reload();        
    });

    
    
    
} // end cardNext