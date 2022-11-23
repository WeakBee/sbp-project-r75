for (let index = 1; index < 10; index++) {
    $( ".option-"+index ).hover(
        function() {
            $(".option-"+ index +" img").attr("src","./assets/logoteam"+ index +"-white.png");
        }, function() {
            $(".option-"+ index +" img").attr("src","./assets/logoteam"+ index +".png");
        }
    );
}
