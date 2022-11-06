/* アコーディオン */
$( '.js-faq' ).on( 'click', function() {
    $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
    $( this ).toggleClass( 'add-active' );
  });


/* ドロワー */
$(function(){
    $(".js-drawer-icon").on("click", function(e){
        e.preventDefault();
        
       
        $(".js-drawer-icon").toggleClass("is-active"); 
        $(".js-drawer-content").toggleClass("is-active"); 
        $(".js-drawer-background").toggleClass("is-active"); 
  
        return false;
    });
});


/* フローティング */
  
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){
      $('#floating').removeClass('DownMove');
      $('#floating').addClass('UpMove');
    }else{
      if($('#floating').hasClass('UpMove')){
        $('#floating').removeClass('UpMove');
        $('#floating').addClass('DownMove');
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();
  });
  
  
  // floatingをクリックした際の設定
  $('#floating a').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });


/* グーグルフォーム */
 let $form = $( "#js-form" )
 let $title = $( ".contact__title__content" )
 $form.submit(function(e) { 
     $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
         0: function() { 
           //送信に成功したときの処理 
           $form.slideUp()
           $title.slideUp()
           $("#js-success").slideDown()
         }, 
         200: function() { 
           //送信に失敗したときの処理 
           $form.slideUp()
           $title.slideUp()
           $("#js-error").slideDown()
         }
       } 
     });
     return false; 
   }); 

 // form validation
 (function() {
  var requireFlg = false;
  var privacyFlg = false;
  var $require = $( '#js-form .js-require' );
  var fillCount = 0;

  function setSubmitProp() {
    if( requireFlg && privacyFlg ) {
      $( '#js-submit' ).prop( 'disabled', false );
    } else {
      $( '#js-submit' ).prop( 'disabled', true );
    }
  }

  // 必須項目
  $require.on( 'blur', function() {
    if( $( this ).attr( 'id' ) === 'js-formKana' && !$( this ).val().match( /^([ァ-ン]|ー)+$/ ) ) {
      $( this ).val( '' );
      alert( '全角カタカナで入力してください。' )
    }

    $require.each( function() {
      var value = $( this ).val();

      if( ( value !== '' && value.match( /[^\s\t]/ ) ) ) {
        fillCount++;
      }
    });

    requireFlg = ( fillCount === $require.length ? true : false );

    setSubmitProp();
    fillCount = 0;
  });

  // プライバシーポリシー
  $( '#form-privacy' ).on( 'change', function() {
    privacyFlg =  ( $( this ).prop( 'checked' ) ? true : false );
    setSubmitProp();
  });

  // 送信時
  $( '#js-form' ).on( 'submit', function() {
    if( !( requireFlg && privacyFlg ) ) {
      alert( '入力に誤りがあります。' );
      return false;
    }
  });
})();
 

/* ヘッダースクロール */
var mvh = $('.main').height();

$(window).scroll(function () {
  var top = $(window).scrollTop();

  if (mvh < top) {
    $('.js-header').addClass('change-color');
    $('.js-global-nav__link').addClass('change-color');
  } else {
    $('.js-header').removeClass('change-color');
    $('.js-global-nav__link').removeClass('change-color');
  }

  return false;
});
 

/* モーダル */
$(function () {
    $('.js-open').click(function () {
        $("body").addClass("no_scroll");
        var id = $(this).data('id');
        $('#modal-bg, .modal__wrapper[data-id="modal' + id + '"]').fadeIn();
    });

    $('.js-close, #modal-bg').click(function () {
        $("body").removeClass("no_scroll");
        $('#modal-bg, .modal__wrapper').fadeOut();
    });
  });


/* スムーススクロール  */
$("a[href^='#']").on("click", function(){

    var header = $(".header").innerHeight();
    var id = $(this).attr("href");
    var position = 0;
    if (id != "#") {
      position = $(id).offset().top - header;
    }
    $("html,body").animate({ 
      scrollTop: position
    },
      300);
    return false;
  });


/* main-slide */
let mySwiper_main;
 
const mySwiper_thumb = new Swiper('.main-slide .swiper-thumb', {
  direction: 'vertical',
  slideToClickedSlide: true,
  slidesPerView: 4,
  spaceBetween: 8,
  thumbs: {
    swiper: mySwiper_main,
  },

  //loop: true,
  //loopAdditionalSlides: 0,
  //speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
});

mySwiper_main = new Swiper('.main-slide .swiper-main', {
  direction: 'vertical',
  thumbs: {
    swiper: mySwiper_thumb,
  },

  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
});

/* スライダー2 */
var mySwiper = new Swiper('.slider2', { 
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    //767以下の時
    slidesPerView: 1.237226,
    spaceBetween: 20,
    initialSlide: 0,
    breakpoints: {

        //768以上の場合
        768: {
            slidesPerView: 1.75,
            spaceBetween: 24, 
            initialSlide: 0,
        },
        
        //1024以上の場合
        1024: {
            slidesPerView: 2.75,
            spaceBetween: 40,
            initialSlide: 0,
        }
    },
});

/* photos-slide */
const mySwiper3 = new Swiper('.photos-slide .swiper-container', {
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 16,
  grabCursor: true,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 3.3,
    },
    1024: {
      slidesPerView: 4.3,
      spaceBetween: 32,
    },

    1400: {
      slidesPerView: 5.3,
      spaceBetween: 32,
    }
  },
});


/* fadeup */
function fadeUp(){

  // ふわっ
  $('.js-fadeup').each(function(){ 
    var elemPos = $(this).offset().top-10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeup');
    }else{
    $(this).removeClass('fadeup');
    }
    });
}

  $(window).scroll(function (){
    fadeUp();
  });


/* delayup */
  function delayScrollAnime() {
    var time = 0.1;
    var value = time;
    $('.js-delayup-wrapper').each(function () {
      var parent = this;				
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();
      
      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        $(childs).each(function () {
          
          if (!$(this).hasClass("delayup")) {
            
            $(parent).addClass("play");	
            $(this).css("animation-delay", value + "s");
            $(this).addClass("delayup");
            value = value + time;
            
            var index = $(childs).index(this);
            if((childs.length-1) == index){
              $(parent).removeClass("play");
            }
          }
        })
      }else {
        $(childs).removeClass("delayup");
        value = time;
      }
    })
  }
  
    $(window).scroll(function (){
      delayScrollAnime();
    });
