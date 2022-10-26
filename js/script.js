document.addEventListener('DOMContentLoaded', function () {

    // OVERLAY NAV MENU SHOW/HIDE

    const mymenubutton = document.querySelector('.menu-button');
    const mysitenav = document.querySelector('.site-header .site-nav');

        mymenubutton.onclick = function () {
            if ( mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
        } else {
        mysitenav.setAttribute('data-navstate', 'open');
        }
    };

    // SCROLL TRIGGERED ANIMATION

    let options = {
        threshold: .25
    }
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.setAttribute("data-sectionstate", "active");
            } else {
                entry.target.setAttribute("data-sectionstate", "inactive");
            }
        });
    }, options);

    document.querySelectorAll(".scroll-triggered").forEach((el) => {
        myobserver.observe(el);
    });

});