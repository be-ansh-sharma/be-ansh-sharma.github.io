$(document).ready(function () {

    let skillset = ['React' , 'HTML5', 'CSS', 'JAVASCRIPT'];
    
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

   

});


