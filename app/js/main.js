//add_slider_Galery_with_products
$('.products').slick({
    // vertical: true,
    // verticalSwiping: true,
    // slidesToShow: 3,
    // slidesToScroll: 2,
    // speed: 300,
    // infinite: true,
    // centerMode: true,
    // focusOnSelect: true,
    // waitForAnimate: false,
    // responsive: [{
    //         breakpoint: 753,
    //         settings: {
    //             vertical: false,
    //             verticalSwiping: false,
    //             centerMode: false,

    //             speed: 300,
    //             slidesToShow: 2,
    // slidesToScroll: 3,
    // infinite: true,
    // dots: true
    //     }
    // },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    // ]
});

//add__event__to__click__on__button
const Button = document.querySelector(".order");
const PopUP = document.querySelector(".PopUP");
const CloseButton = document.querySelector(".close button");

Button.addEventListener('click', function(e) {
    PopUP.classList.add('active');
});

CloseButton.addEventListener('click', function(e) {
    PopUP.classList.remove('active');
});