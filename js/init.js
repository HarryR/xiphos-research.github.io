(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	edge: 'right',
      closeOnClick: true,
      onOpen: function () {
        ga('send', 'event', 'Navigation', 'open');
      },
      onClose: function () {
        ga('send', 'event', 'Navigation', 'close');
      }
    });
    $('.parallax').parallax();

    var nav_main = $('#nav-main');
    function showHideNav () {
        if ($(this).scrollTop() > 30) {
            nav_main.addClass('shown');
        } else {
            nav_main.removeClass('shown');
        }
    }

    // Bottom pop-up navigation
    $(window).scroll(showHideNav);
    showHideNav();


    $('.modal').modal();

    $('.modal-trigger').on('click', function (event) {
        ga('send', 'event', 'Modal', 'trigger', $(this).attr('href'));
    });

    $('#nav-close').on('click', function (e) {
        $('.button-collapse').sideNav('hide');
        //ga('send', 'event', 'Navigation', 'close');
        e.preventDefault();
        return false;
    });


    // Cache selectors
    var lastId,
     topMenu = $("#nav-main"),
     topMenuHeight = topMenu.outerHeight()+1,
     // All list items
     menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
        if (item.length) { return item; }
     });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href");
      if( href ) {
        ga('send', 'event', 'Menu', 'click', event.target.href);
        var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 850);
      }
      e.preventDefault();
    });

    $('#find-out-more').on('click', function (e) {
      ga('send', 'event', 'Navigation', 'click', event.target.href);
      $('html, body').stop().animate({
        scrollTop: $("#why-xiphos").offset().top+1
      }, 850);
      e.preventDefault();
    });

    var scrollTimer = null;
    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // TODO: if bottom, select last scrollItem
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < (fromTop + 100))
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;

           if( id ) {
             if( scrollTimer ) {
               clearTimeout(scrollTimer);
             }
             scrollTimer = setTimeout(function () {
                ga('send', 'event', 'Navigation', 'scroll', id);
             }, 1000);
           }

           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });



    var canvas = $("#index-background");
    var ctx = canvas[0].getContext("2d");

    function redraw ()
    { 

      var width = canvas.width();
      var height = canvas.height();

      var hbar_count = 100;
      var hbar_width = Math.floor(width / hbar_count);

      var vbar_count = 100;
      var vbar_width = Math.floor(height / vbar_count);
      var now = (new Date()).getTime() / 1000.0;

      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, width, height);

      var white = "rgba(255,255,255,0.05)";

      for( var X = 0; X < hbar_count; X++ )
      {
        for( var Y = 0; Y < vbar_count; Y++ )
        {
          var offs_X = X * hbar_width;
          var offs_Y = Y * vbar_width;
          var end_X = offs_X + hbar_width;
          var end_Y = offs_Y + vbar_width;

          var pct_X = offs_X / width;
          var pct_Y = offs_Y / height;

          var pos_X = Math.sin(Math.PI * 6 * pct_X * 0.5);
          var pos_Y = Math.sin(Math.PI * 6 * pct_Y + now * 0.5);

          var A = Math.abs(pos_Y + pos_X * pos_X) > 0.5 ? 1 : 0;
          var B = Math.abs(pos_X + pos_Y) > 0.5 ? 1 : 0;
          var C = Math.abs(Math.sin(pct_X * pct_Y * Math.PI * 10 + now)) > 0.5 ? 1 : 0;
          
          var intensity = A & B & C;
          if( X % 2 ) {
            intensity = 1 - intensity;
          }
          
          if( intensity > 0 ) {
            ctx.fillStyle = white;
            ctx.fillRect(offs_X, offs_Y, hbar_width, vbar_width);            
          }

        }
      }

      setTimeout(redraw, 0.2);
    }

    setTimeout(redraw, 0.2);


  }); // end of document ready
})(jQuery); // end of jQuery name space
