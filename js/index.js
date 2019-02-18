
    $(".app-img1").delay(900);
    $(".app-img1").show(500);
    $(".app-img21, .hd1").delay(3000);
    
    $(".app-img21").animate({bottom:'0%'}, 600);
    $(".hd1").animate({bottom:'0%'}, 600, function(){
        $(".app-img2").css("box-shadow", "none")
    });
    
    $(".app-img11").delay(3900);
    $(".app-img11").show(500);
    
    $(".app-img3, .hd3").delay(6000);
    $(".app-img3").animate({bottom:'-13%'}, 500);
    $(".hd3").animate({bottom:'50.4%'}, 600, function(){
        $(".app-img31").show(500)
    });

