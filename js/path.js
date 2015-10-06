$(document).ready(function(){

		$( ".drop-nav, .drop-title" ).on( "click", function(){
	          $( ".sub-nav" ).fadeToggle( "slow" 3000 );
	});
       

 
        $("#menu1").menu({
            transition: 'inside-slide-fade-left'
        }); 

        $("#menu2").menu({
            theme: 'theme-theme2'
        }); 

        $("#menu3").menu({
            theme: 'theme-theme3',
            transition: 'set3'
        }); 
    



});






