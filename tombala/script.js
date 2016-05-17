




$(document).ready(function () {


    $(".none").each(function () {
        var sayi = Math.floor((Math.random() * 99));
      
            $(this).append("<span>" + sayi + "</span>");      
                
    });

});