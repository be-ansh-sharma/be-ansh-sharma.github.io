$(document).ready(function () {

    
    
    $('#opennav').on('click', function(event) {
        event.stopPropagation();        
        document.getElementById("mySidenav").style.width = "250px";
    });

    $('#closenav').on('cick',function(event) {
        event.stopPropagation();
        
        document.getElementById("mySidenav").style.width = "0";
    });
    
    $(document).click(function() {
        document.getElementById("mySidenav").style.width = "0";
    });

    $('i').mouseenter(function() {
       // alert("hover");
        $(this).addClass('colored');
    });

    $('i').mouseleave(function() {
        // alert("hover");
         $(this).removeClass('colored');
     });
   

});


