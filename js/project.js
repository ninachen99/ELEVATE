$(function() {
    $(".pf_text_in").keyup(function() {
        var pf_text_in = $(this).val();
        $(".preview").html(pf_text_in);
        return false;
    });  

});

