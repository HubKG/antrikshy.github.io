$(document).ready(function() {
    $(document).foundation();
    new FastClick(document.body);
    
    $(".scroll-prompter").hide();
    $(".scroll-prompter a").click(function() {
        $(this).fadeOut(200);
        $.scrollTo(".featured-projects", {duration: 400});
        $(window).scroll(function() {
            if ($(this).scrollTop() == 0)
                $(".scroll-prompter a").fadeIn(400);
        });
    });


    $(".intro-greeting").hide().slideDown('slow', function() {
        $(".intro-text-1").typed({
            strings: ["^1500Software developer with a voracious curiosity and a desire to learn everything.^1800"],
            typeSpeed: 0,
            callback: function() {
                $(".typed-cursor").fadeOut("fast");
                $(".intro-text-2").typed({
                    strings: ["Computer science student at the University of California, San Diego.^1800<br>"],
                    typeSpeed: 0,
                    callback: function() {
                        $(".typed-cursor").fadeOut("fast");
                        $(".intro-text-3").typed({
                            strings: ["I believe in not just <em>writing code</em>, but designing <em>great experiences</em>."],
                            typeSpeed: 0,
                            callback: function() {
                                $(".scroll-prompter").fadeIn("slow");
                            }
                        });
                    }
                });
            }
        });
    });
});
