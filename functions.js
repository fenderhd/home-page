//Script
$(document).ready(function(){
   
    $('.box').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.box').fadeIn();
        }
        else{
        	$('.box').fadeOut();
        }
    });
    $('.box').click(function(){
        $('body').animate({
            scrollTop: 0
        });                
    });
});

