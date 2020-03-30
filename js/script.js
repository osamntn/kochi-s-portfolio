setTimeout(function() {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 1500);



//ヘッダーの高さ分だけコンテンツを下げる
//$(function() {
//    var height=$("header").height();
//    $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
//});

//topnavスクロール

$(function() {
  var $win = $(window),
      $cloneNav = $('.topnav').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 420 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});



//■aboutnavスクロール

$(function() {
  var $win = $(window),
      $header = $('.subheader'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});
//
//■works.contactnavスクロール

$(function() {
  var $win = $(window),
      $header = $('.logoheader'),
      animationClass = 'lg-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});
//


//よくある質問アコーディオン


$(function() {

//#acMenuの中のdt要素がクリックされたら
	$('#acMenu dt').click(function(){
 
		//クリックされた#acMenuの中dt要素に隣接するdd要素が開いたり閉じたりする。
		$(this).next('dd').slideToggle();
 
	});
});





//■page topボタン

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){

    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();

  }else{

    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();

  }
});

 

// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},100);
  return false;

});


});