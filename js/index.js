$(function () {
    $(function () {
        // Just incase the javascript fails to load
        $(" .loading-page ").addClass("js-show");
        // Loading page fade out
        $(window).load(function () {
            $(" .loading-page ").delay(1000).fadeOut(400);
            setTimeout(function () {
                $(" .learn-more ").addClass("js-learn-more-animation");
                $(" .hamburger ").addClass("js-hamburger-animation");
            }, 1000);
        });
    });
    // Hamburger nav controls
    $(".hamburger, .nav-item, nav .logo").click(function () {
        $(".hamburger").toggleClass("js-hamburger-menu-open");
        $(".line-top").toggleClass("js-line-top");
        $(".line-mid").toggleClass("js-line-mid");
        $(".line-bot").toggleClass("js-line-bot");
        $(" .page:nth-child(even) > .article-container ").toggleClass(" js-shift-right");
        $(" .nav-container, .social-media-container ").toggleClass(" js-nav-show ");
        $(" .nav-container ").toggleClass(" js-nav-shadow ");
    });
    // random backgorund
    var bg = ['bg1c.jpg', 'bg1d.jpg'];
    var bgtwo = ['bg1.jpg', 'bg2.jpg'];
    var bgthree = ['bg3.jpg', 'bg4.jpg'];
    var bgfour = ['bg5.jpg', 'bg6.jpg'];
    var bgfive = ['bg7.jpg', 'bg8.jpg'];
    $('.js-bg-one').css({
        'background-image': 'url(https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ca5701e0f1e03876b6bd3477a2390f7f' + bg[Math.floor(Math.random() * bg.length)] + ')'
    });
    var mq = window.matchMedia("(min-width: 550px)");
    if (mq.matches) {
        $('.js-bg-two').css({
            'background-image': 'url(https://images.unsplash.com/photo-1457052002176-2d16a4f4a3ff?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d8d94461ce922f99b0653e861056b606' + bgtwo[Math.floor(Math.random() * bgtwo.length)] + ')'
        });
        $('.js-bg-three').css({
            'background-image': 'url(https://images.unsplash.com/photo-1458063048042-fa854e05b745?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=b94f1056ad32dd2324f47e563d224290' + bgthree[Math.floor(Math.random() * bgthree.length)] + ')'
        });
        $('.js-bg-four').css({
            'background-image': 'url(https://dl.dropboxusercontent.com/u/48784645/latin/' + bgfour[Math.floor(Math.random() * bgfour.length)] + ')'
        });
        $('.js-bg-five').css({
            'background-image': 'url(https://dl.dropboxusercontent.com/u/48784645/latin/' + bgfive[Math.floor(Math.random() * bgfive.length)] + ')'
        });
    }
    // Makes the navigation scroll only
    $('.nav-container').bind('mousewheel DOMMouseScroll', function (e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        //Anchor link smooth scroll
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
