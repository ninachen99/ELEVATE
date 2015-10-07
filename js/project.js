$(function() {
    $(".pf_text_in").keyup(function() {
        var pf_text_in = $(this).val();
        $(".preview").html(pf_text_in);
        return false;
    });  

    var dialog = document.getElementById('pop-window');  
    document.getElementById('submit').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('exit').onclick = function() {  
        dialog.close();  
    };  

});

