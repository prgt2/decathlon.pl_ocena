function script() {
    $(".perf").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".performance").offset().top},
            'slow');
    });
    $(".graph").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".graphics").offset().top},
            'slow');
    });
    $(".resp").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".rwd").offset().top},
            'slow');
    });
    $(".form").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".formatting").offset().top},
            'slow');
    });
    $(".bug").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".bugs").offset().top},
            'slow');
    });
    $(".float").click(function(event) {
        event.preventDefault();
        if ($("nav").attr("class") === "open") {
            $("nav").removeClass("open");
        }
        $('html,body').animate({
            scrollTop: $("body").offset().top},
            'slow');
    });
    $(".hamburger").click(function(event) {
        event.preventDefault();
        if ($("nav").attr("class") === "open") {
            $("nav").removeClass("open");
        } else {
            $("nav").addClass("open");
        }
    });
    $(".container").not(".header2").click(function(event) {
        event.preventDefault();
        if ($("nav").attr("class") === "open") {
            $("nav").removeClass("open");
        }
    });
}