$(function($) {
    $('.bg-switcher').bgSwitcher({
        images: ['images2/background1.jpg','images2/background2.jpg','images2/background3.jpg','images2/background4.jpg','images2/background5.jpg'],
        interval: 5000,
        loop: true
    });

    $('.slider').slick({
        arrows: true,
        // autoplay: false,
        slidesToShow: 4, // 表示するスライド枚数
        dots: true,
        // centerMode: true,// 前後スライドを部分表示
    });

    //画面をスクロールするとイベントが発動する
    $(window).scroll(function() {
 
    //スクロールバーの位置を取得
    var scroll = $(window).scrollTop();

    //ウィンドウの高さを取得
    var windowHeight = $(window).height();

    $('#introduction, #courses, #images, #access').each(function() {
      //フェードインさせたい要素の縦位置を取得
      var elemPos = $(this).offset().top;

      //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
      if (scroll > elemPos - windowHeight + 200) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  });
});