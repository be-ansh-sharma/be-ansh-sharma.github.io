$(document).ready(function () {

    $('.sidenav a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, "fast", 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
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
     var $form = $('#contact-container');
     var formTop = $form.offset().top;
     var formHeight = $form.height();
     var $window = $(window);
     var windowHeight = $window.height();


    $(window).on('scroll',function(){
        var scrollTop = $window.scrollTop();
        var windowBottom = scrollTop + windowHeight;
        if(scrollTop > divHeight) {
            $('#opennav').css('color' , 'black');
        }
        if(scrollTop < divHeight) {
            $('#opennav').css('color' , 'white');
        }
        if(windowBottom > formTop + (formHeight/2) ) {
            $('#contact-container .row').addClass("animated").addClass("pop-in");
        }

        if(windowBottom < formTop) {
            $('#contact-container .row').removeClass("animated").removeClass("pop-in");
        }
    });
   

});


