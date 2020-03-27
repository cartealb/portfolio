window.onscroll = function() {
    ScrollFunction()
};


function ScrollFunction() {

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        console.log(window.matchMedia('(prefers-reduced-motion: no-preference)').matches)

        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            document.getElementById('top_button').style.display = "block";
        } else {
            document.getElementById('top_button').style.display = "none";
        }
    }

}


function go_to_topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}

// // https://codepen.io/nickcil/pen/sfutl
// $(window).scroll(function() {
//     var val = window.matchMedia('(prefers-reduced-motion: reduce)');
//     if (!(val.matches)) {
//         $("#intro").css("opacity", 1 - $(window).scrollTop() / 450);
//         $("#nav_bar").css("opacity", 1 - $(window).scrollTop() / 450);
//     }

// });

// https://codepen.io/manuel-pross/pen/eYNRjbG
window.addEventListener('scroll', function(e) {
    const target = document.querySelector('#me_pic');

    let scrolled = window.pageYOffset;
    let rate = scrolled * 0.45;
    target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
});

window.addEventListener('scroll', function(e) {
    const target = document.querySelector('#title_me');

    let scrolled = window.pageYOffset;
    let rate = scrolled * 0.45;
    target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
});

window.addEventListener('scroll', function(e) {
    const target = document.querySelector('#nav_bar');

    let scrolled = window.pageYOffset;
    let rate = scrolled * 0.45;
    target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
});

// window.addEventListener('scroll', function(e) {
//     const target = document.querySelector('#message_404');

//     let scrolled = window.pageYOffset;
//     let rate = scrolled * 0.45;
//     target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
// });