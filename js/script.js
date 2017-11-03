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

     var divHeight = $('#jumbotron-container').outerHeight() + $('#skill-container').outerHeight();

    $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();
        //console.log("div height is " + divHeight + " and scroll is " + scrollTop);
        //console.log( $('#jumbotron-container').outerHeight() );
        if(scrollTop > divHeight) {
            $('#opennav').css('color' , 'black');
        }
        if(scrollTop < divHeight) {
            $('#opennav').css('color' , 'white');
        }
    });
   

});


