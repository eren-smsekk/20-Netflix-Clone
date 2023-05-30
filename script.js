document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scroll = window;
        console.log(scroll)
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".netflix-navbar").style.background = "#0c0c0c";
        } else {
            document.querySelector(".netflix-navbar").style.background = "transparent";
        }
    });
});
