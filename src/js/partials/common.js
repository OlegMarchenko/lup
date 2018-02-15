$(document).ready(function () {

    // Mask for callback input
    $('.phone').mask('+00(000)000-00-00');



    //Portfolio selector
    var types = ['gamble', 'mobile-web', 'mobile-app', 'e-commerce', 'web-app'];
    $('#portfolio-select').on('change', (function(e){
        var value = e.target.value;
        console.log(value);
        types.forEach(function(type){
            var cards;
            if(type!==value){
                cards = document.getElementsByClassName(type);
                [].forEach.call(cards, function (card){
                    card.style.display = 'none';
                })
            } else {
                cards = document.getElementsByClassName(type);
                Array.prototype.forEach.call(cards, function (card){
                    card.style.display = 'block';
                })
            }
        })

    }));


    /*Stop roulette animation*/
    $('.roulette').hover(function () {
        $(this).stop(true).fadeTo(200, 1)
    })

});