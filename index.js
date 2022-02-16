$(window).on("scroll", scrollDetect)

var lastTop = 0;
function scrollDetect(){
    var newTop = $(this).scrollTop();
// Check if screen is on mobile device, to autohide nav bar items on scroll
    if($(window).width() < 768) {
        $(".nav-items").css("display", "none")
    }
//     Scrolling down
    if (newTop > lastTop){
            $(".navbar").css("top","-100px")
    } 
//     Scrolling up
    else {
            $(".navbar").css("top","0")
            if ($(window).width() > 768) {
                    $(".nav-items").css("display", "flex")
            }
    }
    lastTop = newTop;
};


// This function scrolls to the sections on the page on click

function scrollToId(value) {
        var item = `#${$(value).attr("name")}`
        var scrollTo = $(item).offset().top
        $("html, body").animate({
                scrollTop: scrollTo
        }, 800)
}

$("#burger-menu").on("click", () => {
        $(".nav-items").toggle("slow")
})

$(".animate-text").css({"opacity":"0.0","visibility":"visible"}).animate({opacity: 1}, 800)


