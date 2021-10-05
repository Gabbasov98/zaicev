function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}


function sliderCollection() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 8,
        navigation: {
            nextEl: '.collection  .swiper-button-next',
            prevEl: '.collection  .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 4
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 8
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 8
            },
        }
    })
}

function gallerySlider1() {
    var swiper = new Swiper(".catalog-item .mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 9
            },
        }
    });
    var swiper2 = new Swiper(".catalog-item .mySwiper2", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".catalog-item .swiper-button-next",
            prevEl: ".catalog-item .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function gallerySlider2() {
    var swiper = new Swiper(".catalog-plus .mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 0
            },
        },
    });
    var swiper2 = new Swiper(".catalog-plus .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".catalog-plus .swiper-button-next",
            prevEl: ".catalog-plus .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}



$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7                    ' });
    $("select").niceSelect()
    cartCalc()
    sliderCollection()
    gallerySlider1()
    gallerySlider2()


    if (window.innerWidth > 992) {
        $(".header-menu__content-bottom").mCustomScrollbar()
    }
    $(".custom-scroll").mCustomScrollbar()

    $(".header-menu__tab").click(function() {
        if (!$(this).hasClass("header-menu__tab--active")) {
            $(".header-menu__tab").removeClass("header-menu__tab--active")
            $(this).addClass("header-menu__tab--active")
        } else {
            $(".header-menu__tab").removeClass("header-menu__tab--active")
        }

    })

    $(".header__open-menu").click(function() {

        $(".header-menu").show()
        $(this).addClass("header__open-menu--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.header-menu');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
            $(".header__open-menu").removeClass("header__open-menu--active")
        }
    });







    $(".nav__item-show").click(function() {
        if (window.innerWidth < 992) {
            // $(".nav__item-hidden").hide()
            $(this).toggleClass("nav__item-show--active")
            $(this).siblings(".nav__item-hidden").slideToggle()
        }
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").slideToggle()
    })

    $(".nav__item").hover(onIn, onOut);


    $(".catalog-category__menu-item-show").click(function() {
        if ($(this).hasClass("catalog-category__menu-item-show--active")) {
            $(".catalog-category__menu-item-show").removeClass("catalog-category__menu-item-show--active")
            $(this).removeClass("catalog-category__menu-item-show--active")
        } else {
            $(".catalog-category__menu-item-show").removeClass("catalog-category__menu-item-show--active")
            $(this).addClass("catalog-category__menu-item-show--active")
        }

    })

    $(".catalog-filter__item-show").click(function() {
        $(this).toggleClass("catalog-filter__item-show--active")
    })


    $(".selected-filter__item button").click(function() {
        $(this).parents(".selected-filter__item").hide()
    })

    if (window.innerWidth < 992) {
        $(".catalog-filter__top").removeClass("catalog-filter__top--active")
    }

    $(".catalog-filter__top").click(function() {
        if (window.innerWidth < 992) {
            $(this).toggleClass("catalog-filter__top--active")
        }
    })

    $(".catalog-item__block-show").click(function() {
        $(this).toggleClass("catalog-item__block-show--active")
    })

    $(".faq__item-show").click(function() {
        if ($(this).hasClass("faq__item-show--active")) {
            $(this).removeClass("faq__item-show--active")
        } else {
            $(".faq__item-show").removeClass("faq__item-show--active")
            $(this).addClass("faq__item-show--active")
        }

    })


    $("a").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        if (elementClick === "#property") {
            console.log(true)
            $(".catalog-item__block--property .catalog-item__block-show").addClass("catalog-item__block-show--active")
        }
        return false;
    });


    $(".order__city-item").click(function() {
        $(".order__city-input").val("")
        let text = $(this).text()
        $(".order__city-input").val(text)
    })

    $("input[name='method']").click(function() {
        let val = $(this).attr("value");
        $(".order__way").hide();
        $(`.order__${val}`).show()
    })

    $(".header__search-open").click(function() {
        $(this).siblings("input").show()
        $(this).siblings("button").show()
    })

    $(".header__search-close").click(function() {
        $(this).siblings("input").hide()
        $(this).hide()
    })

})

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-show").addClass("nav__item-show--active")
                el.children(".nav__item-hidden").show()
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
        $(this).children(".nav__item-hidden").hide()
    }
}


// Калькулятор корзины
function cartCalc() {
    $('.cart__calc .cart__calc-minus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cart__calc').find('input').val(b);
        } else {
            $(this).closest('.cart__calc').find('input').val(a);
            $(".cart__calc-minus").addClass("disabled");
        }
    });
    $('.cart__calc .cart__calc-plus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cart__calc').find('input').val(b);
        $(".cart__calc-minus").removeClass("disabled");
    });
}