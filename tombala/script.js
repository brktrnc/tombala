




$(document).ready(function () {

//abi eline sağlık cok güzel olmuş tek bir eksik yanı var oda bu alanı function içerisinde yazman lazım öyle demiştim her çağırdığımda yeniden sayılar
//random olarak oluşabilsin diye gayet başarılı
    $(".none").each(function () {
        var sayi = Math.floor((Math.random() * 99));
      
            $(this).append("<span>" + sayi + "</span>");      
                
    });

});
