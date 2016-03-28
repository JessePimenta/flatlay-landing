$(document).ready(function () {
      var windowWidth = $(window).width();
      console.log(windowWidth);
console.log('hello');

      $(window).on('resize', function() {
          var win = $(this)
          if (win.width() < 768) {
            // $('#id0, TME140i').css('display','inline-block ');
            $('#id0, TME140i').css('margin','0 auto');
            $('#id0, TME140i').css('margin-left','60px');
          }
        });
      $(window).on('resize', function() {
            var marg = 0;
          var win = $(this)
          if (win.width() > 768) {
            // $('#id0, TME140i').css('display','inline-block');
            $('#id0, TME140i').css('margin', + marg + 'auto');
            $('#id0, TME140i').css('margin-left','0px');
          }
        });



      $(window).on('load', function() {
          var win = $(this)
          if (win.width() < 768) {
            // $('#id0').css('display','inline-block');
            $('#id0').css('margin','0 auto');
            $('#id0').css('margin-left','60px');
          }
          console.log('changed style');
        });


        var doc_width, a_ratio, X, Y;
        $("#productFlatMain").click(function(e){
          var img = $("#productFlatMain")
          var windowWidth = $(window).width();
          var cursorX = e.pageX;
          var cursorY = e.pageY;
          var X = e.pageX -5;
          var Y = e.pageY -5;

          doc_width = document.documentElement.clientWidth;
          a_ratio = $(this).width()/$(this).height();
          move_mark(X,Y)

          // console.log('position Y: ' + cursorY + ' position X: ' + cursorX);

          $(window).on("resize", function(){
           var x = X + (document.documentElement.clientWidth - doc_width);
           var y = Y + (x - X)/a_ratio;
           move_mark(x, y);
           console.log(x,y);
          })

          function move_mark(X, Y) {
          $("navbar").css({
            "left": X,
            "right": Y
          }).show();
          console.log(X,Y);
        }



            if (cursorY > 191 && cursorY < 246 && cursorX > 222 && cursorX < 236) {
              $("#jaclyn1").css('border-width','2px');
              $("#jaclyn1").css('border-style','solid');
              $("#jaclyn1").css('border-color','#3DBDBF');
              // $("#jaclyn1").css('transition',".7s");
              $("#jaclyn1").css('border-radius','50%');
              $("#jaclyn1").css('padding','2px');
            }
            else {
              $("#jaclyn1").css('border-style','none');
              $("#jaclyn1").css('border-width','0px');
              // $("#jaclyn1").css('transition',".7s");
            }

            if (cursorY > 222 && cursorY < 269 && cursorX > 385 && cursorX <= 401) {
              $("#jaclyn2").css('border-width','2px');
              $("#jaclyn2").css('border-style','solid');
              $("#jaclyn2").css('border-color','#3DBDBF');
              // $("#jaclyn2").css('transition',".7s");
              $("#jaclyn2").css('border-radius','50%');
              $("#jaclyn2").css('padding','2px');

            }
            else {
              $("#jaclyn2").css('border-style','none');
              $("#jaclyn2").css('border-width','0px');
              // $("#jaclyn2").css('transition',".7s");
            }

            if (cursorY > 276 && cursorY < 308 && cursorX > 349 && cursorX <= 361) {
              $("#jaclyn3").css('border-width','2px');
              $("#jaclyn3").css('border-style','solid');
              $("#jaclyn3").css('border-color','#3DBDBF');
              // $("#jaclyn3").css('transition',".7s");
              $("#jaclyn3").css('border-radius','50%');
              $("#jaclyn3").css('padding','2px');
            }
            else {
              $("#jaclyn3").css('border-radius','1%');
              $("#jaclyn3").css('border-style','none');
              $("#jaclyn3").css('border-width','0px');
              // $("#jaclyn3").css('transition',".7s");
            }

            if (cursorY > 268 && cursorY < 311 && cursorX > 395 && cursorX <= 423) {
              $("#jaclyn4").css('border-width','2px');
              $("#jaclyn4").css('border-style','solid');
              $("#jaclyn4").css('border-color','#3DBDBF');
              // $("#jaclyn4").css('transition',".7s");
              $("#jaclyn4").css('border-radius','50%');
              $("#jaclyn4").css('padding','2px');
            }
            else {
              $("#jaclyn4").css('border-radius','1%');
              $("#jaclyn4").css('border-style','none');
              $("#jaclyn4").css('border-width','0px');
              // $("#jaclyn4").css('transition',".7s");
            }

            if (cursorY > 403 && cursorY < 436 && cursorX > 189 && cursorX < 233) {
              $("#jaclyn5").css('border-width','2px');
              $("#jaclyn5").css('border-style','solid');
              $("#jaclyn5").css('border-color','#3DBDBF');
              // $("#jaclyn5").css('transition',".7s");
              $("#jaclyn5").css('border-radius','50%');
              $("#jaclyn5").css('padding','2px');
            }
            else {
              $("#jaclyn5").css('border-radius','1%');
              $("#jaclyn5").css('border-style','none');
              $("#jaclyn5").css('border-width','0px');
              // $("#jaclyn5").css('transition',".7s");
            }

            if (cursorY >= 355 && cursorY <= 390 && cursorX > 198 && cursorX <= 232) {
              $("#jaclyn6").css('border-width','2px');
              $("#jaclyn6").css('border-style','solid');
              $("#jaclyn6").css('border-color','#3DBDBF');
              // $("#jaclyn6").css('transition',".7s");
              $("#jaclyn6").css('border-radius','50%');
              $("#jaclyn6").css('padding','2px');
            }
            else {
              $("#jaclyn6").css('border-radius','1%');
              $("#jaclyn6").css('border-style','none');
              $("#jaclyn6").css('border-width','0px');
              // $("#jaclyn6").css('transition',".7s");
            }
            if (cursorY >= 454 && cursorY <= 492 && cursorX > 187 && cursorX <= 237) {
              $("#jaclyn7").css('border-width','2px');
              $("#jaclyn7").css('border-style','solid');
              $("#jaclyn7").css('border-color','#3DBDBF');
              // $("#jaclyn7").css('transition',".7s");
              $("#jaclyn7").css('border-radius','50%');
              $("#jaclyn7").css('padding','2px');
            }
            else {
              $("#jaclyn7").css('border-radius','1%');
              $("#jaclyn7").css('border-style','none');
              $("#jaclyn7").css('border-width','0px');
              // $("#jaclyn7").css('transition',".7s");
            }
            if (cursorY >= 359 && cursorY <= 485 && cursorX > 456 && cursorX <= 528) {
              $("#jaclyn8").css('border-width','2px');
              $("#jaclyn8").css('border-style','solid');
              $("#jaclyn8").css('border-color','#3DBDBF');
              // $("#jaclyn8").css('transition',".7s");
              $("#jaclyn8").css('border-radius','50%');
              $("#jaclyn8").css('padding','2px');
            }
            else {
              $("#jaclyn8").css('border-radius','1%');
              $("#jaclyn8").css('border-style','none');
              $("#jaclyn8").css('border-width','0px');
              // $("#jaclyn8").css('transition',".7s");
            }

        })

        $("#productFlatMain2").click(function(e){
          var cursorX = e.pageX;
          var cursorY = e.pageY;

          console.log('position Y: ' + cursorY + ' position X: ' + cursorX);

          if (cursorY >= 136 && cursorY <= 256 && cursorX > 96 && cursorX <= 190) {
            $("#eleet1").css('border-width','2px');
            $("#eleet1").css('border-style','solid');
            $("#eleet1").css('border-color','#3DBDBF');
            // $("#eleet1").css('transition',".7s");
            $("#eleet1").css('border-radius','50%');
            $("#eleet1").css('padding','2px');
          }
          else {
            $("#eleet1").css('border-radius','1%');
            $("#eleet1").css('border-style','none');
            $("#eleet1").css('border-width','0px');
            // $("#eleet1").css('transition',".7s");
          }
          if (cursorY >= 364 && cursorY <= 466 && cursorX > 156 && cursorX <= 261) {
            $("#eleet2").css('border-width','2px');
            $("#eleet2").css('border-style','solid');
            $("#eleet2").css('border-color','#3DBDBF');
            // $("#eleet2").css('transition',".7s");
            $("#eleet2").css('border-radius','50%');
            $("#eleet2").css('padding','2px');
          }
          else {
            $("#eleet2").css('border-radius','1%');
            $("#eleet2").css('border-style','none');
            $("#eleet2").css('border-width','0px');
            // $("#eleet2").css('transition',".7s");
          }
          if (cursorY >= 265 && cursorY <= 464 && cursorX >= 380 && cursorX <= 525) {
            $("#eleet3").css('border-width','2px');
            $("#eleet3").css('border-style','solid');
            $("#eleet3").css('border-color','#3DBDBF');
            // $("#eleet3").css('transition',".7s");
            $("#eleet3").css('border-radius','50%');
            $("#eleet3").css('padding','2px');
          }
          else {
            $("#eleet3").css('border-radius','1%');
            $("#eleet3").css('border-style','none');
            $("#eleet3").css('border-width','0px');
            // $("#eleet3").css('transition',".7s");
          }

        })

        $("#productFlatMain3").click(function(e){
          var cursorX = e.pageX;
          var cursorY = e.pageY;

          console.log('position Y: ' + cursorY + ' position X: ' + cursorX);

          if (cursorY >= 480 && cursorY <= 500 && cursorX > 209 && cursorX <= 257) {
            $("#lyndsey1").css('border-width','2px');
            $("#lyndsey1").css('border-style','solid');
            $("#lyndsey1").css('border-color','#3DBDBF');
            // $("#lyndsey1").css('transition',".7s");
            $("#lyndsey1").css('border-radius','50%');
            $("#lyndsey1").css('padding','2px');
          }
          else {
            $("#lyndsey1").css('border-radius','1%');
            $("#lyndsey1").css('border-style','none');
            $("#lyndsey1").css('border-width','0px');
            $("#lyndsey1").css('border','none');
            // $("#eleet3").css('transition',".7s");
          }
          if (cursorY >= 221 && cursorY <= 248 && cursorX > 172 && cursorX <= 205) {
            $("#lyndsey3").css('border-width','2px');
            $("#lyndsey3").css('border-style','solid');
            $("#lyndsey3").css('border-color','#3DBDBF');
            // $("#lyndsey3").css('transition',".7s");
            $("#lyndsey3").css('border-radius','50%');
            $("#lyndsey3").css('padding','2px');
          }
          else {
            $("#lyndsey3").css('border-radius','1%');
            $("#lyndsey3").css('border-style','none');
            $("#lyndsey3").css('border-width','0px');
            // $("#eleet3").css('transition',".7s");
          }

          if (cursorY >= 143 && cursorY <= 194 && cursorX > 172 && cursorX <= 404) {
            $("#lyndsey2").css('border-width','2px');
            $("#lyndsey2").css('border-style','solid');
            $("#lyndsey2").css('border-color','#3DBDBF');
            // $("#lyndsey2").css('transition',".7s");
            $("#lyndsey2").css('border-radius','50%');
            $("#lyndsey2").css('padding','2px');
          }
          else {
            $("#lyndsey2").css('border-radius','1%');
            $("#lyndsey2").css('border-style','none');
            $("#lyndsey2").css('border-width','0px');
            // $("#eleet3").css('transition',".7s");
          }





        })


        $("#productFlatMain4").click(function(e){
          var cursorX = e.pageX;
          var cursorY = e.pageY;

          console.log('position Y: ' + cursorY + ' position X: ' + cursorX);

          if (cursorY >= 209 && cursorY <= 241 && cursorX > 391 && cursorX <= 425) {
            $("#langly1").css('border-width','2px');
            $("#langly1").css('border-style','solid');
            $("#langly1").css('border-color','#3DBDBF');
            // $("#langly1").css('transition',".7s");
            $("#langly1").css('border-radius','50%');
            $("#langly1").css('padding','2px');
          }
          else {
            $("#langly1").css('border-radius','1%');
            $("#langly1").css('border-style','none');
            $("#langly1").css('border-width','0px');
            $("#langly1").css('border','none');
          }

          if (cursorY >= 183 && cursorY <= 310 && cursorX > 150 && cursorX <= 279) {
            $("#langly2").css('border-width','2px');
            $("#langly2").css('border-style','solid');
            $("#langly2").css('border-color','#3DBDBF');
            // $("#langly2").css('transition',".7s");
            $("#langly2").css('border-radius','50%');
            $("#langly2").css('padding','2px');
          }
          else {
            $("#langly2").css('border-radius','1%');
            $("#langly2").css('border-style','none');
            $("#langly2").css('border-width','0px');
          }
          if (cursorY >= 338 && cursorY <= 370 && cursorX > 290 && cursorX <= 380) {
            $("#langly3").css('border-width','2px');
            $("#langly3").css('border-style','solid');
            $("#langly3").css('border-color','#3DBDBF');
            // $("#langly3").css('transition',".7s");
            $("#langly3").css('border-radius','50%');
            $("#langly3").css('padding','2px');
          }
          else {
            $("#langly3").css('border-radius','1%');
            $("#langly3").css('border-style','none');
            $("#langly3").css('border-width','0px');
          }
          if (cursorY >= 245 && cursorY <= 276 && cursorX > 415 && cursorX <= 436) {
            $("#langly4").css('border-width','2px');
            $("#langly4").css('border-style','solid');
            $("#langly4").css('border-color','#3DBDBF');
            // $("#langly4").css('transition',".7s");
            $("#langly4").css('border-radius','50%');
            $("#langly4").css('padding','2px');
          }
          else {
            $("#langly4").css('border-radius','1%');
            $("#langly4").css('border-style','none');
            $("#langly4").css('border-width','0px');
          }
          if (cursorY >= 470 && cursorY <= 505 && cursorX > 224 && cursorX <= 333) {
            $("#langly5").css('border-width','2px');
            $("#langly5").css('border-style','solid');
            $("#langly5").css('border-color','#3DBDBF');
            // $("#langly5").css('transition',".7s");
            $("#langly5").css('border-radius','50%');
            $("#langly5").css('padding','2px');
          }
          else {
            $("#langly5").css('border-radius','1%');
            $("#langly5").css('border-style','none');
            $("#langly5").css('border-width','0px');
          }
          if (cursorY >= 383 && cursorY <= 446 && cursorX > 228 && cursorX <= 270) {
            $("#langly6").css('border-width','2px');
            $("#langly6").css('border-style','solid');
            $("#langly6").css('border-color','#3DBDBF');
            // $("#langly6").css('transition',".7s");
            $("#langly6").css('border-radius','50%');
            $("#langly6").css('padding','2px');
          }
          else {
            $("#langly6").css('border-radius','1%');
            $("#langly6").css('border-style','none');
            $("#langly6").css('border-width','0px');
          }

        })



        function toggleFlats(){
          var defaultHash = $('#defaultHash')
          var fitness = $('#fitness')
          var home = $("#home")
          var photography = $('#photography')
          var fashion = $("#fashion")
          var beauty = $("#beauty")

          $(".fitness").click(function(){
            $(this).show();
            photography.hide();
            style.hide();
            home.hide();
            beauty.hide();
          })
        }


        // $(window).on("resize", function(){
        //   var win = $(this);
        //   if (win.width() < 1205) {
        //     $(".logo").css("margin",'0px')
        //   }
        //   console.log('resizing logo ');
        // })

    });

    function showonlyone(thechosenone) {
      var defaultHash = $('#defaultHash')
      var fitness = $('#fitness')
      var home = $("#home")
      var photography = $('#photography')
      var fashion = $("#fashion")
      var beauty = $("#beauty")
 $('.newboxes').each(function(index) {
      if ($(this).attr("id") == thechosenone) {
           $(this).show(200);
      }
      else {
           $(this).hide(600);
      }
 });
}
