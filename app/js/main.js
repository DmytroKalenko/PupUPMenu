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




// GET___file__***.json__from__server 
fetch("/js/xbox.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        MYArray = data;

        //programing__button___size

        const firstBtn = document.querySelector(".firstBtn"),
            secondBtn = document.querySelector(".secondBtn"),
            thirdBtn = document.querySelector(".thirdBtn");

        var Xbox32GB = MYArray.sizes.items.W.description,
            Xbox64GB = MYArray.sizes.items.U.description,
            Xbox96GB = MYArray.sizes.items.V.description;

        firstBtn.textContent = Xbox32GB;
        secondBtn.textContent = Xbox64GB;
        thirdBtn.textContent = Xbox96GB;

        //programing__select__color___button

        const black = document.querySelector('.select select .black'),
            grej = document.querySelector('.select select .grej'),
            white = document.querySelector('.select select .white');

        var BlackColorDevice = MYArray.multiversions[0].items[0].values[60].name,
            WhiteColorDevice = MYArray.multiversions[0].items[1].values[59].name,
            GrejColorDevice = MYArray.multiversions[0].items[2].values[61].name;

        black.textContent = BlackColorDevice,
            grej.textContent = WhiteColorDevice,
            white.textContent = GrejColorDevice;

        //programing__select__wersion__device

        let select = document.querySelector("#select");



        // programing__send__form

        const Form = document.querySelector('.form');
        Form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            var Flag = false;
            let error = ToCheck(Form);
            let formData = new FormData(Form);

            //check__validation__form
            function ToCheck() {
                function BtnReq() {
                    var FirstBtnBasket = document.querySelector('.form_radio_group-item.first input').checked,
                        SecondBtnBasket = document.querySelector('.form_radio_group-item.second input').checked,
                        ThirdBtnBasket = document.querySelector('.form_radio_group-item.third input').checked;

                    var amountDevice32GB = MYArray.sizes.items.W.amount,
                        amountDevice64GB = MYArray.sizes.items.U.amount,
                        amountDevice96GB = MYArray.sizes.items.V.amount;




                    if (FirstBtnBasket || SecondBtnBasket || ThirdBtnBasket) {
                        Flag = true
                        if (Flag == true && document.querySelector(".counter .value").textContent > 0) {
                            return Flag = true
                        } else {
                            alert('Proszę wybrać rozmiar produktu i wpisać ilość sztuk')
                        };
                    } else {
                        alert('Proszę wybrać rozmiar')
                    };
                };
                BtnReq();
            };


            if (Flag == true) {
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    Form.reset();
                } else {
                    alert("Niema polaczenia z serwerom")
                }
            } else {
                alert('Nie wyslano')
            }
        };








    });