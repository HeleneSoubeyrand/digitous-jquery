$(function() {
    $('.btn').click(function() {
        var value = $("input:text").val() 
        if (value.length > 5) {
            $('input').addClass('is-valid');
        } else {
            $('input').addClass('is-invalid');
        }
    }) 
})