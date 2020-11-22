$(document).ready(function){

    //stickymenu

    $(".js--services-section").waypoint(function (direction) {
        if (direction==down){
            $("nav").addclass("sticky");

        } else{
            $("nav").removeclass("sticky")

        }
            
        
    });

    //mixitup{portfolio}
    var mixer = mixitup('.container');
});