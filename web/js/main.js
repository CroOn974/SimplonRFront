$(document).ready(function(){
    $('form').hide(); 
    $('div').click(function(){
        $('div').addClass('animation');
        $('div').removeClass('button');
        setTimeout(function(){
            $('form').fadeIn("slow"); 
            $('div').addClass('colored');
        },400);
    }); 
});