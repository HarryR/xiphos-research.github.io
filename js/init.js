(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	edge: 'right',
        closeOnClick: true
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

    $('#nav-close').on('click', function (e) {
        $('.button-collapse').sideNav('hide');
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
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 850);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
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
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
