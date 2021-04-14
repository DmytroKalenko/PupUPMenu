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



        //programing__counter___button
        var FirstBtnBasket = document.querySelector('.form_radio_group-item.first input'),
            SecondBtnBasket = document.querySelector('.form_radio_group-item.second input'),
            ThirdBtnBasket = document.querySelector('.form_radio_group-item.third input');

        var amount32GB = MYArray.sizes.items.W.amount,
            amount64GB = MYArray.sizes.items.U.amount,
            amount96GB = MYArray.sizes.items.V.amount;

        Warehouse = document.querySelector('.Warehouse');

        //add events to buttons counter
        var ButtonPLUS = document.querySelector(".counter .plus"),
            ButtonMinus = document.querySelector(".counter .minus");
        //create__counter____remove__value
        ButtonPLUS.addEventListener('click', function(e) {
            var Counter = document.querySelector(".counter .value").textContent;
            var NewCounter = Number(Counter) + 1;
            document.querySelector(".counter .value").textContent = NewCounter;

            if (FirstBtnBasket.checked && document.querySelector(".counter .value").textContent > amount32GB) {
                Warehouse.classList.add('outStock');
                Warehouse.textContent = 'niema na magazynie ';
            } else if (
                SecondBtnBasket.checked && document.querySelector(".counter .value").textContent > amount64GB) {
                Warehouse.classList.add('outStock');
                Warehouse.textContent = 'niema na magazynie ';
            } else if (ThirdBtnBasket.checked && document.querySelector(".counter .value").textContent > amount96GB) {
                Warehouse.classList.add('outStock');
                Warehouse.textContent = 'niema na magazynie ';
            }
        });
        //create__counter___add__value
        ButtonMinus.addEventListener('click', function(e) {
            var Counter = document.querySelector(".counter .value").textContent;
            Warehouse.classList.remove('outStock');
            Warehouse.textContent = 'Product dostępny';
            if (Counter <= 0) {
                alert('ilość produktu = 0')
            } else {
                var NewCounter = Number(Counter) - 1;
                document.querySelector(".counter .value").textContent = NewCounter

            };
        });



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
                    var FirstBtnBasket = document.querySelector('.form_radio_group-item.first input'),
                        SecondBtnBasket = document.querySelector('.form_radio_group-item.second input'),
                        ThirdBtnBasket = document.querySelector('.form_radio_group-item.third input');

                    var amount32GB = MYArray.sizes.items.W.amount,
                        amount64GB = MYArray.sizes.items.U.amount,
                        amount96GB = MYArray.sizes.items.V.amount;

                    if (FirstBtnBasket.checked) {
                        if (document.querySelector(".counter .value").textContent != 0 && document.querySelector(".counter .value").textContent <= amount32GB) {
                            Flag = true;
                        } else if (document.querySelector(".counter .value").textContent == 0) {
                            alert('Nie wybrano ilość,  Proszę zaznaczyć ilość produktu')
                        } else if (document.querySelector(".counter .value").textContent > amount32GB) {

                            alert('Niestety na magazynie mamy tylko' + amount32GB + 'szt. productu')
                        };

                    } else
                    if (SecondBtnBasket.checked) {
                        if (document.querySelector(".counter .value").textContent != 0 && document.querySelector(".counter .value").textContent <= amount64GB) {
                            Flag = true;
                        } else if (document.querySelector(".counter .value").textContent == 0) {
                            alert('Nie wybrano ilość,  Proszę zaznaczyć ilość produktu')
                        } else if (document.querySelector(".counter .value").textContent > amount64GB) {
                            alert('Niestety na magazynie mamy tylko' + amount64GB + 'szt. produktu')
                        };




                    } else if (ThirdBtnBasket.checked) {
                        if (document.querySelector(".counter .value").textContent != 0 && document.querySelector(".counter .value").textContent <= amount96GB) {
                            Flag = true;
                        } else if (document.querySelector(".counter .value").textContent == 0) {
                            alert('Nie wybrano ilość,  Proszę zaznaczyć ilość produktu')
                        } else if (document.querySelector(".counter .value").textContent > amount96GB) {
                            alert('Na magazynie zostało tylko' + amount96GB + 'szt. productu')
                        };
                    } else {
                        alert('Nie wybrano żadnego produktu')
                    }

                };
                BtnReq();
            };


            if (Flag == true) {
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                alert("Zamówienie zostało złożone")
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    Form.reset();
                } else {
                    alert("Brak połączenia z serwerem ")
                }


            } else {
                alert('Nie wysłano')
            }
        };


    });