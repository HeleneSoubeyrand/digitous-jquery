$(function() {
    $('.btn').click(function() {
        $('#exercise #square').animate({
           bottom: "0",
           right: "0",
        },3000, function() {
        })
    })
})