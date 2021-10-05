/*End YandexMap*/

/* Подкдючить в head
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_ru" type="text/javascript"></script>
*/

            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [55.1446,37.4535],
                    zoom: 18,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search',
                    searchControlFloat: 'right',
                    zoomControlFloat: 'right'
                }),// Создадим пользовательский макет ползунка масштаба.
        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
            "<div id='zoom-in' class='btn'><i class='fa fa-plus'></i></div><br>" +
            "<div id='zoom-out' class='btn'><i class='fa fa-minus'></i></div>" +
            "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function () {
                // Снимаем обработчики кликов.
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
            },

            zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
            }
        }),
        plLayout = ymaps.templateLayoutFactory.createClass( "<div id='zoom-loc' class='btn'><i class='fa fa-location-arrow' aria-hidden='true'></i></div>", {
        }),
        zoomControl = new ymaps.control.ZoomControl(
            {
                options: {layout: ZoomLayout},
                    float: 'none',
                    position: {
                        right: 10,
                        top: 170,
                        height: 50
                    }

        });
        //myMap.controls.add(zoomControl);
        myMap.controls.add(zoomControl, {
                    float: 'none',
                    position: {
                        right: 10,
                        top: 170,
                        height: 50
                    }
                });



                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: '',
                    balloonContent: ''
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/map-lab.png',
                    iconImageSize: [45, 61],
                    iconImageOffset: [290, -42]
                });
                var geolocationControl = new ymaps.control.GeolocationControl({
                    options: {}
                });
                var searchControl = new ymaps.control.SearchControl({
                     options: {
                         noPlacemark: false
                     }
                });

                myPlacemark2 = new ymaps.control.GeolocationControl({
                    options: {layout: plLayout,
                        maxWidth: 50
                    },
                    data: {
                        image: 'images/map-lab.png'
                    }
                });

                var geolocationControl = new ymaps.control.GeolocationControl({
                    options: {}
                });
                var searchControl = new ymaps.control.SearchControl({
                     options: {
                         noPlacemark: false
                     }
                });

                

                myMap.geoObjects.add(myPlacemark);
                myMap.controls.add(myPlacemark2, {
                    float: 'right',
                    position: {
                        right: 10,
                        top: 250,
                        height: 50
                    }
                });
                myMap.behaviors.disable('scrollZoom');

                /*myMap.controls.add('geolocationControl', {
                    float: 'right',
                    size: 'small',
                    position: {
                        right: 10,
                        top: 250,
                        height: 50
                    }
                });*/
            });


/*End YandexMap*/


function menuBars(){
  $('.c-hamburger').click(function(e){
    e.preventDefault();
    $('.c-hamburger').toggleClass('is-active');
    $('.b2').toggleClass('active');
  });
}
$(document).ready(function() {

    menuBars();

    $(function(){
        $(".forma").submit(function(e){
            e.preventDefault();


            var m_method=$(this).attr("method");
            var m_action=$(this).attr("action");
            var m_data=$(this).serialize();
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                success: function(result){
                    $("#okno_owibki").css("display", "block");
                    $("#okno_owibki").html(result).addClass("error");

                    $("#okno_owibki").fadeIn(3000).delay(5000).fadeOut(1000);
                    var close = $("#okno_owibki").text();
                    if($("#okno_owibki").text()!=="Îïèøèòå ñâîé âîïðîñ"){
                        $("#okno_owibki").fadeOut(0);
                        $('.hide-forma').addClass('dis_n');
                        //$('.call22').removeClass('dis_n');
                    };
                }

            });

        });

    });

	
});