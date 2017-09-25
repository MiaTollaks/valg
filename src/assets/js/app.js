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
    $('.btn').on('click', function(){
        $(this).addClass('clicked');
        $(this).siblings().removeClass('clicked');
        
        $('.back-next').css('display', 'block');   
                
    }); 
    
    $('.card-head').first().addClass('active');
    
    $('.next').on('click', function(){ 
        
        //hide next & prev
        $('.back-next').css('display', 'none');
        $('.btn').removeClass('clicked');
        
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
    
    
    $('.prev').click(function(){
        
        //hide next & prev
        $('.back-next').css('display', 'none');
        $('.btn').removeClass('clicked');
        
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }
        //hide next & prev
        $('.back-next').css('display', 'none');
    });
        
    
    
    
    
} // end cardNext