$(window).on("scroll", scrollDetect)

var lastTop = 0;
function scrollDetect(){
    var newTop = $(this).scrollTop();
// Check if screen is on mobile device, to autohide nav bar items on scroll
    if($(window).width() < 648) {
        $(".nav-items").css("display", "none")
    }
//     Scrolling down
    if (newTop > lastTop){
            $(".navbar").css("top","-100px")
    } 
//     Scrolling up
    else {
            $(".navbar").css("top","0")
            if ($(window).width() > 648) {
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

const faderItemsLogo = document.querySelectorAll(".fade-in")
const faderItemsProject = document.querySelectorAll(".fade-in-project")

const appearOptionsLogo = {
        threshold: 1,
        rootMargin: "0px 0px -50px 0px"
}

const appearOptionsProject = {
        threshold: 0.3,
        rootMargin: "0px 0px 0px 0px"
}

const appearOnScrollLogo = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
                if (!entry.isIntersecting) {
                        return
                }
                else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target);
                }
        })
}, appearOptionsLogo)

const appearOnScrollProject = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
                if (!entry.isIntersecting) {
                        return
                }
                else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target);
                }
        })
}, appearOptionsProject)

faderItemsLogo.forEach(fader => {
        appearOnScrollLogo.observe(fader)
})

faderItemsProject.forEach(fader => {
        appearOnScrollProject.observe(fader)
})
