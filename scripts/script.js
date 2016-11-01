function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



// 
// (function (w, $)
//  {
//   $('.navbar-toggle').click(function () {
//    $("#mySidenav").css('width','250px');
//    $("#main").css('margin-left','250px');
//   });
//   // edith this too
//  function closeNav() {
//    $('closebtn').click(function(){
//      $("#mySidenav").css('width','0px');
//      $("#main").css('margin-left','0px');
//    });
//    }
//  })(window, jQuery);
