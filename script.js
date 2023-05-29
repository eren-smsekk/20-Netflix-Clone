

// $(document).ready(function(){
//     $(window).scroll(function(){
//         let scroll = $(window).scrollTop();
//         if(scroll > 100) {
//             $(".netflix-navbar").css("background", "#0c0c0c");
//         } else {
//             $(".netflix-navbar").css("background", "transparent");
//         }
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scroll = window.scrollTop;
        if (scroll > 100) {
            document.querySelector(".netflix-navbar").style.background = "#0c0c0c";
        } else {
            document.querySelector(".netflix-navbar").style.background = "transparent";
        }
    });
});
