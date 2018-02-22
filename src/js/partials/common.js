$(document).ready(function () {

    // Mask for callback input
    $('.phone').mask('+00(000)000-00-00');

    //===================================================================


    // Portfolio selector

    let navChange = function (value) {
        $('#portfolio .card-project')
            .each(function () {
                let $card = $(this);

                if ($card.hasClass(value) || value === 'all') {
                    $card.css({
                        'display': 'block'
                    })
                } else {
                    $card.css({
                        'display': 'none'
                    })
                }
            });

        $('.portfolio-nav li a')
            .each(function () {
                let $a = $(this);

                if ($a.data('category') === value) {
                    $a.addClass('active');
                } else {
                    $a.removeClass('active');
                }
            });
    };

    $('#portfolio-select').on('change', function (e) {
        navChange(e.target.value);
    });



    $('.portfolio-nav a').on('click', function () {
        let value = $(this).data('category');

        $('#portfolio-select').val(value);

        navChange(value);
    });


    //===================================================================

    new WOW().init();

    //Animation

    function animate(element, animation) {
        $(element).addClass('wow ' + animation);
      var wait = setTimeout(function () {
          $(element).removeClass('wow ' + animation);
      }, 2000)
    }

    $('.section-title').addClass('wow jackInTheBox') ;

    $('.card-order .ww').addClass('wow pulse infinite');


});