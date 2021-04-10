//add_slider_Galery_with_products
$('.products').slick({
    speed: 300,
    infinite: true,
    waitForAnimate: false,
});

//add__event__to__click__on__button
const Button = document.querySelector(".MainButton");
const PopUP = document.querySelector(".PopUP");
const CloseButton = document.querySelector(".close button");
const Overlay = document.querySelector(".overlay");

Button.addEventListener('click', function(e) {
    PopUP.classList.add('active');
    Overlay.classList.add('active');
});

CloseButton.addEventListener('click', function(e) {
    PopUP.classList.remove('active');
    Overlay.classList.remove('active');
});


//programing__counter___button

function addCounter() {
    var Counter = document.querySelector(".counter .value").textContent;
    var NewCounter = Number(Counter) + 1;
    document.querySelector(".counter .value").textContent = NewCounter
}

function remCounter() {
    var Counter = document.querySelector(".counter .value").textContent;
    if (Counter <= 0) {
        alert('Koszyk jest pusty')
    } else {
        var NewCounter = Number(Counter) - 1;
        document.querySelector(".counter .value").textContent = NewCounter
    };
};

//programing__size___button