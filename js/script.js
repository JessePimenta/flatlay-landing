$(document).ready(function () {

        $(window).on("resize", function(){
          var win = $(this);
          if (win.width() < 375 && win.width() > 320) {
            $("#appIconSteps").removeAttr("appIconSteps").addClass('appIconI6')
          }
          if (win.width() == 320) {
            $("#appIconSteps").removeAttr("appIconSteps").addClass('appIconI5')
          }
          if (win.width() < 768) {
            $(".videoFlatlay").removeClass("videoFlatlay").addClass('videoFlatlayMobile')
          }
          console.log('resizing vid ');
          if (win.width()> 981 ) {
            $(".videoFlatlayMobile").removeClass("videoFlatlayMobile").addClass('videoFlatlay')
          }
        })
        $(window).on("load", function(){
          var win = $(this);
          if (win.width() < 768) {
            $(".videoFlatlay").removeClass("videoFlatlay").addClass('videoFlatlayMobile')
          }
          if (win.width() == 320 ) {
            $("#appIconSteps").removeAttr("appIconSteps").addClass('appIconI5')
          }
            console.log('iphone 5 class');
        })
        $(window).on("load", function(){
          var win = $(this);
          if (win.width() == 375) {
            $("#appIconSteps").removeAttr("appIconSteps").addClass('appIconI6')
          }
          console.log('iphone 6 class');
        })

    });

    $('#videoflatlay').vide({
        mp4: 'mainbg.mp4',
        webm: '/video/main.webm',
        ogv: '/video/main.ogg',
        poster: '/video/main.png',
    }, { posterType: 'png' });
