$(document).ready(function() {
  AOS.init();
});

// swiper 自動スライダー
(function() {
  let speed = 5000;
 
  const mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    speed: speed,
    spaceBetween: 10,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
 
  let getTranslate;
 
  document.querySelectorAll('.swiper').forEach(function(e){
 
    e.addEventListener('mouseover', function () {
      getTranslate = mySwiper.getTranslate();
      mySwiper.setTranslate(getTranslate);
      mySwiper.setTransition(0);
    });
 
    e.addEventListener('mouseout', function () {
      getTranslate = mySwiper.getTranslate();
 
      let getSlideWidthMgLeft = document.querySelector('.swiper-slide-active').style.marginLeft;
      if (getSlideWidthMgLeft) {
        getSlideWidthMgLeft = parseFloat(getSlideWidthMgLeft);
      } else {
        getSlideWidthMgLeft = 0;
      }
 
      let getSlideWidthMgRight = document.querySelector('.swiper-slide-active').style.marginRight;
      if (getSlideWidthMgRight) {
        getSlideWidthMgRight = parseFloat(getSlideWidthMgRight);
      } else {
        getSlideWidthMgRight = 0;
      }
 
      let getSlideWidth = document.querySelector('.swiper-slide-active').offsetWidth;
 
      let getTotalSlideWidth = getSlideWidthMgLeft + getSlideWidthMgRight + getSlideWidth;
      let diff = - getTotalSlideWidth - (getTranslate % getTotalSlideWidth);
      let diffTime = diff / -getSlideWidth;
      mySwiper.setTranslate(getTranslate + diff);
      mySwiper.setTransition(speed * diffTime);
    });
  });
})();

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
