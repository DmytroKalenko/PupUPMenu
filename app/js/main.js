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




// import a from './xbox.json';


// const MY = JSON.parse(my)


var MYArray = {
    "sizes": {
        "id": 7,
        "name": "xbox 4 Slim",
        "firm": {
            "name": "Sony",
            "productsLink": "\/pl\/producers\/sony-1308137276.html",
            "gfx": "\"\/data\/lang\/pol\/producers\/gfx\/projector\/1308137276_1.png\""
        },
        "cleardescription": "\u0141\u0105cz\u0105c w sobie niezr\u00f3wnane tre\u015bci, wci\u0105gaj\u0105ce gry, ulubione aplikacje oraz ekskluzywne dla xbox\u00ae materia\u0142y, xbox\u00ae4 to najlepsze urz\u0105dzenie do rozrywki. Najszybsza dost\u0119pna w konsolach do gry grafika i pami\u0119\u0107.",
        "description": "<ul><li>\u0141\u0105cz\u0105c w sobie niezr\u00f3wnane tre\u015bci, wci\u0105gaj\u0105ce gry, ulubione aplikacje oraz ekskluzywne dla xbox\u00ae materia\u0142y, xbox\u00ae4 to najlepsze urz\u0105dzenie do rozrywki. Najszybsza dost\u0119pna w konsolach do gry grafika i pami\u0119\u0107.<\/li><\/ul>",
        "icon": "\/pol_il_xbox-4-Slim-7.jpg",
        "series": {
            "name": "seria testowa",
            "link": "search.php?series=1&lang=pol"
        },
        "taxes": {
            "vat": "23.0"
        },
        "code": "10000053",
        "moreprices": "y",
        "new": "123",
        "link": "\/pl\/products\/xbox-4-slim-7.html",
        "product_type": "product_item",
        "unit": "szt.",
        "unit_single": "szt.",
        "unit_plural": "szt.",
        "unit_fraction": "sztuka",
        "unit_precision": "0",
        "unit_sellby": 1,
        "items": {
            "U": {
                "type": "U",
                "priority": "0",
                "name": "RAM64",
                "description": "Ram 64 GB",
                "amount": 1,
                "phone_price": "false",
                "prices": {
                    "price_retail": 3388.82,
                    "price_wholesale": 2755.14,
                    "price_minimal": 2750.2,
                    "price_srp": 2543.13,
                    "price_crossed_retail": 3899.99,
                    "price_crossed_wholesale": 3343.13,
                    "price_pos": 0
                }
            },
            "V": {
                "type": "V",
                "priority": "1",
                "name": "RAM96GB",
                "description": "Ram 96 GB",
                "amount": 12,
                "phone_price": "false",
                "prices": {
                    "price_retail": 3468.82,
                    "price_wholesale": 2820.18,
                    "price_minimal": 2950.2,
                    "price_srp": 3743.13,
                    "price_crossed_retail": 3899.99,
                    "price_crossed_wholesale": 3343.13,
                    "price_pos": 0
                }
            },
            "W": {
                "type": "W",
                "priority": "2",
                "name": "RAM32GB",
                "description": "Ram 32 GB",
                "amount": 123,
                "phone_price": "false",
                "prices": {
                    "price_retail": 3548.82,
                    "price_wholesale": 2885.22,
                    "price_minimal": 3150.2,
                    "price_srp": 3943.13,
                    "price_crossed_retail": 3899.99,
                    "price_crossed_wholesale": 3343.13,
                    "price_pos": 0
                }
            }
        },
        "amount": -3
    },
    "multiversions": [{
        "id": "58",
        "name": "Wariant",
        "items": {
            "2": {
                "enabled": true,
                "selected": true,
                "products": [{
                    "product_id": 7,
                    "version_priority": "1",
                    "url": "\/pl\/products\/xbox-7.html",
                    "price_difference_netto": "0.00",
                    "price_difference_brutto": "0.00",
                    "price_difference_netto_formatted": "0,00 z\u0142",
                    "price_difference_brutto_formatted": "0,00 z\u0142"
                }],
                "values": {
                    "61": {
                        "id": 61,
                        "name": "Srebrny"
                    }
                },
                "values_id": "61"
            },
            "0": {
                "enabled": true,
                "products": [{
                    "product_id": 8,
                    "version_priority": "2",
                    "url": "\/pl\/products\/xbox-4-slim-8.html",
                    "price_difference_netto": "-97.56",
                    "price_difference_brutto": "-120.00",
                    "price_difference_netto_formatted": "-97,56 z\u0142",
                    "price_difference_brutto_formatted": "-120,00 z\u0142"
                }],
                "values": {
                    "60": {
                        "id": 60,
                        "name": "Czarny"
                    }
                },
                "values_id": "60"
            },
            "1": {
                "enabled": true,
                "products": [{
                    "product_id": 27,
                    "version_priority": "2",
                    "url": "\/pl\/products\/xbox-4-slim-27.html",
                    "price_difference_netto": "-260.16",
                    "price_difference_brutto": "-320.00",
                    "price_difference_netto_formatted": "-260,16 z\u0142",
                    "price_difference_brutto_formatted": "-320,00 z\u0142"
                }],
                "values": {
                    "59": {
                        "id": 59,
                        "name": "Biały"
                    }
                },
                "values_id": "59"
            }
        }
    }],
    "product": {
        "id": 7,
        "name": "Microsoft Xbox Series X/S",
        "firm": {
            "name": "Microsoft",
            "productslink": "\/search.php?firm=1308137276&lang=pol",
            "gfx": "\/data\/lang\/pol\/producers\/gfx\/projector\/1308137276_1.png"
        },
        "cleardescription": "\u0141\u0105cz\u0105c w sobie niezr\u00f3wnane tre\u015bci, wci\u0105gaj\u0105ce gry, ulubione aplikacje oraz ekskluzywne dla xbox\u00ae materia\u0142y, xbox\u00ae4 to najlepsze urz\u0105dzenie do rozrywki. Najszybsza dost\u0119pna w konsolach do gry grafika i pami\u0119\u0107.",
        "description": "<ul><li>\u0141\u0105cz\u0105c w sobie niezr\u00f3wnane tre\u015bci, wci\u0105gaj\u0105ce gry, ulubione aplikacje oraz ekskluzywne dla xbox\u00ae materia\u0142y, xbox\u00ae4 to najlepsze urz\u0105dzenie do rozrywki. Najszybsza dost\u0119pna w konsolach do gry grafika i pami\u0119\u0107.<\/li><\/ul>",
        "code": "10000053",
        "icon": "\/data\/gfx\/icons\/large\/7\/0\/7.jpg",
        "series": {
            "name": "Series X",
            "link": "\/search.php?series=1&lang=pol"
        },
        "taxes": {
            "vat": "23.0"
        },
        "moreprices": "y",
        "promotion": "true",
        "discount": "true",
        "distinguished": "true",
        "special": "true",
        "new": "true",
        "link": "\/pl\/products\/xbox-4-slim-7.html",
        "product_type": "product_item"
    }
};

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
            if (FirstBtnBasket || SecondBtnBasket || ThirdBtnBasket) {
                return Flag = true
            } else {
                alert('Proszę wybrać rozmiar')
            };
        };
        BtnReq();
        if (Flag == true && document.querySelector(".counter .value").textContent > 0) {
            return Flag = true
        } else {
            alert('Proszę wybrać rozmiar produktu i wpisać ilość sztuk')
        };
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