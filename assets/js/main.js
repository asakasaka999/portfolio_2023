
$(function () {
    // 画像の枚数
    var count = $("#slide li").length;

    // 現在表示されている画像(最初は１番目の画像)
    var current = 1;

    // 次に表示する画像
    var next = 2;

    // フェードイン/フェードアウトのインターバル　何秒ごとに切り替わるか
    var interval = 3000;

    // フェードイン/フェードアウトのスピード
    var duration = 500;

    // タイマー用の設定
    var timer;

    // １番目の写真以外は非表示
    $("#slide li:not(:first-child)").hide();
    // 3000ミリ秒ごとにslideTimer()関数を実行  
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer() {
        // 現在の画像をフェードイン
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        // 次の画像をフェードアウト
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);

        // currentの新しい値
        current = next;

        next = ++next;

        if (next > count) {
            next = 1;
        }

        $("#button li a").removeClass("target");

        $("#button li:nth-child(" + current + ") a").addClass("target");
    }

    $("#button li a").click(function () {
        next = $(this).html();

        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        slideTimer();

        return false;
    })
})

// モーダルウィンドウ
$(function () {
    $(".js-modal-open").on("click", function () {
        // topとleftをランダムな値に変更する例
        var newTop = 140; // 0から300の間でランダムな値
        var newLeft = 140; // 0から300の間でランダムな値

        if ($(this).hasClass('area1')) {
            // 新しい位置をセットする
            $('.area1').css({
                top: newTop + "px",
                left: newLeft + "px",
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal1").css("display", "block");
            }, 1000);
        } else {
            $('.area1').css({
                top: "0px",
                left: "0px"
            });
        }

        if ($(this).hasClass('area2')) {
            // 新しい位置をセットする
            $('.area2').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal2").css("display", "block");
            }, 1000);
        } else {
            $('.area2').css({
                top: "0px",
                left: "140px"
            });
        }
        if ($(this).hasClass('area3')) {
            // 新しい位置をセットする
            $('.area3').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal3").css("display", "block");
            }, 1000);
        } else {
            $('.area3').css({
                top: "0px",
                left: "280px"
            });
        }

        if ($(this).hasClass('area4')) {
            // 新しい位置をセットする
            $('.area4').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal4").css("display", "block");
            }, 1000);
        } else {
            $('.area4').css({
                top: "140px",
                left: "0px"
            });
        }

        if ($(this).hasClass('area5')) {
            // 新しい位置をセットする
            $('.area5').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal5").css("display", "block");
            }, 1000);
        } else {
            $('.area5').css({
                top: "140px",
                left: "280px"
            });
        }

        if ($(this).hasClass('area6')) {
            // 新しい位置をセットする
            $('.area6').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal6").css("display", "block");
            }, 1000);
        } else {
            $('.area6').css({
                top: "280px",
                left: "0px"
            });
        }

        if ($(this).hasClass('area7')) {
            // 新しい位置をセットする
            $('.area7').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal7").css("display", "block");
            }, 1000);
        } else {
            $('.area7').css({
                top: "280px",
                left: "140px"
            });
        }

        if ($(this).hasClass('area8')) {
            // 新しい位置をセットする
            $('.area8').css({
                top: newTop + "px",
                left: newLeft + "px"
            });
            // 移動後にモーダルウィンドウを開く
            setTimeout(function () {
                $("#modal8").css("display", "block");
            }, 1000);
        } else {
            $('.area8').css({
                top: "280px",
                left: "280px"
            });
        }
    });
});

$(function () {
    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        $('.area1').css({ top: "0px", left: "0px" });
        $('.area2').css({ top: "0px", left: "140px" });
        $('.area3').css({ top: "0px", left: "280px" });
        $('.area4').css({ top: "140px", left: "0px" });
        $('.area5').css({ top: "140px", left: "280px" });
        $('.area6').css({ top: "280px", left: "0px" });
        $('.area7').css({ top: "280px", left: "140px" });
        $('.area8').css({ top: "280px", left: "280px" });
        return false;
    });
});


