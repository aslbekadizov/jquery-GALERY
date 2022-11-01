$(function(){

    $('#small a').click(function(e){
        e.preventDefault()
        var id = $(this).attr("href")
        $('#big img').fadeOut(function(){
            $(this).attr('src', id).fadeIn()
        })
    })
})