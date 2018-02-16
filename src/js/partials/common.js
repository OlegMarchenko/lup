$(document).ready(function () {

    // Mask for callback input
    $('.phone').mask('+00(000)000-00-00');

    //===================================================================


    //Portfolio selector
    var types = ['gamble', 'mobile-app', 'e-commerce', 'web-app'];
    $('#portfolio-select').on('change', (function (e) {
        var value = e.target.value;
        types.forEach(function (type) {
            var cards;
            if (type === value || value === 'all') {
                cards = type === 'all' ? $('.card-project')  : $(`.${type}`);
                cards.each(function (index, card) {
                    card.style.display = 'block';
                })
            } else {
                //cards = document.getElementsByClassName(type);
                cards = $('.' + type);
                cards.each(function (index, card) {
                    card.style.display = 'none';
                })
            }
        })

    }));

    var navLinks = ['active', 'commerce', 'health', 'gambling', 'estate', 'logistics', 'finance'];
    $('.portfolio-nav a').on('click', function (cls) {
        var clsName = cls.target.className;
        navLinks.forEach(function (link) {


        });
        console.log(clsName);

    })


    //===================================================================


});