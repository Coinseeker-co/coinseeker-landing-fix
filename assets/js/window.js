// View
const IndexView = {
    Filter: {
        onClick(callback){
            $(document).on('click', '.filter-item', function() { 
                if ($(this).hasClass("is-selected")) {
                    $(this).removeClass("is-selected")
                }else{
                    var filter_group = $(this).parent().parent().attr("group-name");
                    $(`.filter-block[group-name=${filter_group}]`).find(".filter-item").removeClass("is-selected");
                    $(this).addClass("is-selected");
                }
                callback();
            });
        }
    },
    Carousel:{ 
        banner: {  
            init(){
                $("#banner-carousel")
                    .append(`
                        <div class="carousel-item-element"> 
                            <img src="assets/images/banner-01.png" alt="">
                        </div>
                        <div class="carousel-item-element"> 
                            <img src="assets/images/banner-02.png" alt="">
                        </div>
                        <div class="carousel-item-element"> 
                            <img src="assets/images/banner-03.png" alt="">
                        </div> `)
                $('#banner-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        767:{
                            items: 1, 
                        },
                        991:{
                            items: 1, 
                        },
                        1279:{
                            items: 1,
                        },
                        1280:{
                            items: 1
                        }
                    }
                })
            }
        },
        offer: {  
            init(){
                $("#offer-carousel")
                    .append(`
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/offer-01.jpg')">  </a>
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/offer-02.jpg')">  </a> 
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/offer-03.jpg')">  </a> `)
                $('#offer-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        767:{
                            items: 2, 
                            margin: 10,
                        },
                        991:{
                            items: 3, 
                            margin: 10,
                        },
                        1279:{
                            items: 3,
                            margin: 10,
                        },
                        1280:{
                            items: 4,
                            margin: 15,
                        }
                    }
                })
            }
        },
        place: {  
            init(){
                $("#place-carousel")
                    .append(`
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-01.jpg')">
                            <div class="top-item">Nha Trang</div>
                        </a>
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-02.jpg')">
                            <div class="top-item">Sapa</div>
                        </a> 
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-03.jpg')">
                            <div class="top-item">Hạ Long</div>
                        </a> 
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-04.jpg')">
                            <div class="top-item">Ninh Bình</div>
                        </a>
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-05.jpg')">
                            <div class="top-item"></div>
                        </a> 
                        <a href="#" class="carousel-item-element" style="background-image: url('assets/images/tour-06.jpg')">
                            <div class="top-item"></div>
                        </a> `)
                $('#place-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        575:{
                            items: 2, 
                            margin: 10,
                        },
                        767:{
                            items: 3, 
                            margin: 10,
                        },
                        991:{
                            items: 4, 
                            margin: 10,
                        },
                        1279:{
                            items: 4,
                            margin: 10,
                        },
                        1280:{
                            items: 5,
                            margin: 15,
                        }
                    }
                })
            }
        },
        blog: {  
            init(){
                $("#blog-carousel")
                    .append(`
                        <div class="carousel-item-element">
                            <a href="#" class="item-image" style="background-image: url('assets/images/blog-01.jpg')"></a>
                            <div class="item-desctiption-wrapper">
                                <div class="item-time"><i class="far fa-clock m-r-10"></i>12:12:00</div>
                                <a href="#" class="item-title">Flamingo Resort tặng gói ưu đãi cuối năm Halfboard cho khách lưu trú – Tiết kiệm tới 500k</a>
                                <div class="item-desctiption">Flamingo tưng bừng ưu đãi cuối năm với gói ưu đãi Halfboard giảm sâu chưa từng có cho khách đi các ngày trong tuần tại Flamingo Đại Lải và Flamingo Cát Bà. Cùng khám phá nhé!!!</div>
                            </div>
                        </div>
                        <div class="carousel-item-element">
                            <a href="#" class="item-image" style="background-image: url('assets/images/blog-02.jpg')"></a>
                            <div class="item-desctiption-wrapper">
                                <div class="item-time"><i class="far fa-clock m-r-10"></i>12:12:00</div>
                                <a href="#" class="item-title">Flamingo Resort tặng gói ưu đãi cuối năm Halfboard cho khách lưu trú – Tiết kiệm tới 500k</a>
                                <div class="item-desctiption">Flamingo tưng bừng ưu đãi cuối năm với gói ưu đãi Halfboard giảm sâu chưa từng có cho khách đi các ngày trong tuần tại Flamingo Đại Lải và Flamingo Cát Bà. Cùng khám phá nhé!!!</div>
                            </div>
                        </div>
                        <div class="carousel-item-element">
                            <a href="#" class="item-image" style="background-image: url('assets/images/blog-03.jpg')"></a>
                            <div class="item-desctiption-wrapper">
                                <div class="item-time"><i class="far fa-clock m-r-10"></i>12:12:00</div>
                                <a href="#" class="item-title">Flamingo Resort tặng gói ưu đãi cuối năm Halfboard cho khách lưu trú – Tiết kiệm tới 500k</a>
                                <div class="item-desctiption">Flamingo tưng bừng ưu đãi cuối năm với gói ưu đãi Halfboard giảm sâu chưa từng có cho khách đi các ngày trong tuần tại Flamingo Đại Lải và Flamingo Cát Bà. Cùng khám phá nhé!!!</div>
                            </div>
                        </div>`)
                $('#blog-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        675:{
                            items: 2, 
                            margin: 10,
                        },
                        767:{
                            items: 2, 
                            margin: 10,
                        },
                        991:{
                            items: 3, 
                            margin: 10,
                        },
                        1279:{
                            items: 3,
                            margin: 10,
                        },
                        1280:{
                            items: 4,
                            margin: 15,
                        }
                    }
                })
            }
        },
        testimonials: {  
            init(){
                $("#testimonials-carousel")
                    .append(`
                        <div class="carousel-item-element">
                            <a href="#" class="item-image" style="background-image: url('assets/images/blog-01.jpg')"></a>
                            <div class="item-desctiption-wrapper">
                                <ul class="star-list">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                </ul>
                                <div class="item-title">
                                    "Bữa tiệc Team Building tuyệt vời cùng Elite Tour"
                                </div>
                                <div class="item-desctiption">
                                    Ban Tài Chính Kế Toán AIC Group đã cùng tổ chức Team Building với Elite Tour tại Resort Emeralda Ninh Bình trong không khí vui vẻ và đã có những hoạt động vui chơi giải trí hấp dẫn
                                </div>
                                <div class="item-name">Hồng Hạnh</div>
                                <div class="item-tour">Đi <a href="">Mù Cang Chải</a>  29/09/2022 4:32:52 CH</div>
                            </div>
                        </div>`)
                $('#testimonials-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        675:{
                            items: 2, 
                            margin: 10,
                        },
                        767:{
                            items: 2, 
                            margin: 10,
                        },
                        991:{
                            items: 3, 
                            margin: 10,
                        },
                        1279:{
                            items: 3,
                            margin: 10,
                        },
                        1280:{
                            items: 4,
                            margin: 15,
                        }
                    }
                })
            }
        },
        feature: {  
            init(){
                $("#feature-carousel")
                    .append(``)
                $('#feature-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        675:{
                            items: 1,
                        },
                        767:{
                            items: 1, 
                        },
                        991:{
                            items: 1, 
                        },
                        1279:{
                            items: 1,
                        },
                        1280:{
                            items: 1,
                        }
                    }
                })
            }
        },
        image: {  
            init(){
                $("#image-carousel")
                    .append(``)
                $('#image-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    // dots: true,
                    // autoplay: true,
                    // autoplayTimeout: 7000,
                    autoWidth: false, 
                    lazyLoad: false,
                    margin: 0,
                    responsive:{
                        0:{
                            items: 1, 
                        }, 
                        675:{
                            items: 1,
                        },
                        767:{
                            items: 2, 
                            margin: 10,
                        },
                        991:{
                            items: 2, 
                            margin: 10,
                        },
                        1279:{
                            items: 3,
                            margin: 10,
                        },
                        1280:{
                            items: 3,
                            margin: 10,
                        }
                    }
                })
            }
        },
    },
    init(){ 
        IndexView.Carousel.banner.init();
        IndexView.Carousel.offer.init();
        IndexView.Carousel.place.init();
        IndexView.Carousel.blog.init();
        IndexView.Carousel.testimonials.init();
        IndexView.Carousel.feature.init();
        IndexView.Carousel.image.init();
        $('input[name="dates"]').daterangepicker({
                timePicker: true,
                startDate: moment().add(1, 'day'),
                endDate: moment().add(2, 'day'),
                minDate: moment().add(1, 'day'),
                time: {
                    enabled: false
                },
                locale: {
                    format: 'YYYY/MM/DD'
                }
            },
                function (start, end, label) {
                    // hiển thị
                    $(".date-start").html(start.format('YYYY-MM-DD'));
                    $(".date-end").html(end.format('YYYY-MM-DD'));
                    // input hinde
                    $("[name='arrivalDate']").val(start.format('YYYY-MM-DD'));
                    $("[name='departDate']").val(end.format('YYYY-MM-DD'));
                }
            );
    }
};

// Controller
(() => {
    IndexView.init(); 

    IndexView.Filter.onClick(() => {

    })
    
    $(document).on('click', '.nav-control', function() { 
        $(`.header-nav`).toggleClass('is-open'); 
    });
    $(document).mouseup(function(e) {
        var container = $("header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header-nav').removeClass('is-open');
        }
    });

    $(".I-carousel").css({"width": $(window).width()+"px"})
    window.onscroll = function() { 
        (window.pageYOffset > $('body').offset().top ? true : false) ? $('header').addClass('is-scroll') : $('header').removeClass('is-scroll')
    };

    $(document).on('click', '.nav-control', function() { 
        $(`.navigation-wrapper`).toggleClass('is-open'); 
    });
    $(document).mouseup(function(e) {
        var container = $("header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.navigation-wrapper').removeClass('is-open');
        }
    });


    $(document).on('click', '.tour-image-preview img', function() { 
        console.log($(this).attr("src"));
    });

})();