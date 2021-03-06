! function (a) {
    "use strict";
    a(window).on("load", function () {
        a(".loader-inner").fadeOut(), a(".loader").delay(200).fadeOut("slow");
    });
    var s = a(".header"),
        e = s.offset();
    a(window).scroll(function () {
        a(this).scrollTop() > e.top + 50 && s.hasClass("default") ? s.fadeOut("fast", function () {
            a(this).removeClass("default").addClass("switched-header").fadeIn(200), a(".scroll-to-top").addClass("active")
        }) : a(this).scrollTop() <= e.top + 50 && s.hasClass("switched-header") && s.fadeOut("fast", function () {
            a(this).removeClass("switched-header").addClass("default").fadeIn(100), a(".scroll-to-top").removeClass("active")
        })
    }), a("a.scroll").smoothScroll({
        speed: 800,
        offset: -180
    }), 
    // a(".popup-image").magnificPopup({
    //     type: "image",
    //     fixedContentPos: !1,
    //     fixedBgPos: !1,
    //     mainClass: "mfp-no-margins mfp-with-zoom",
    //     image: {
    //         verticalFit: !0
    //     },
    //     zoom: {
    //         enabled: !0,
    //         duration: 300
    //     }
    // }),
    a(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    });
    var o = a(".video-cover .play-but");
    var finalDate = moment.tz("2020-02-22 18:30", "Asia/Seoul").toDate();
    a(".video-cover").each(function () {
        a(this).find("iframe").length && a(this).find("iframe").attr("data-src", a(this).find("iframe").attr("src"), a(this).find("iframe").attr("src", ""))
    }), o.on("click", function () {
        var s = a(this).closest(".video-cover"),
            e = s.find("iframe");
        return s.addClass("show-video"), e.attr("src", e.attr("data-src")), !1
    })
    // , new Instafeed({
    //     get: "user",
    //     userId: "13339175373",
    //     accessToken: "13339175373.95cbc68.b63a06b452874b6e8384eebc29a005ce",
    //     limit: 5,
    //     resolution: "standard_resolution",
    //     template: '<li><a class="hover-effect rounded-circle" target="_blank" href="{{link}}"><span class="hover-effect-container"><span class="hover-effect-icon hover-effect-icon-small"><span class="fa fa-heart hover-effect-icon-inner"></span></span></span></span><img class=" mw-100" src="{{image}}" /></a></li>'
    // }).run()
    , 
    a(".countdown").countdown(finalDate).on("update.countdown", function (s) {
        console.log(finalDate, s);
        var months = s.offset.months;
        var day = s.offset.daysToMonth;
        var hours = s.offset.hours;
        var minutes = s.offset.minutes;
        var seconds = s.offset.seconds;
        a(this).html('\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">'+months+'</span> <span class="label">개월</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">'+day+'</span> <span class="label">일</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">'+hours+'</span> <span class="label">시간</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">'+minutes+'</span> <span class="label">분</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">'+seconds+'</span> <span class="label">초</span></div></div>\
        ');
    })
}(jQuery);



$(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        //autoplay: true,
        speed: 300,
        slidesToShow: 1,
        //adaptiveHeight: true,
        mobileFirst: true,
        arrows: true,
    });
    // VARIABLEZ
    // play with them
    var c = document.querySelector('canvas'),
        ctx = c.getContext('2d'),
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,

        fw1, fw2, //firework objects
        minStrength = 1.5, //lowest firework power
        maxStrength = 7, //highest firework power
        minTrails = 10, //min particles
        maxTrails = 40, //max particles
        particleRadius = 2,
        trailLength = 10, //particle trail length
        delay = 0.7, // number of LIFEs between explosions

        LIFE = 100, //life time of firework

        g = 5e-2, //strength of gravity
        D = 1e-3; //strength of drag (air resistance)

    // Particle Class
    var Particle = function (x, y, vx, vy, ax, ay, colour) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
        this.life = LIFE; //only here for opacity in .draw() method
        this.path = [];
        this.colour = colour;
        this.r = particleRadius;

        this.update = function () {
            this.life--;

            // add point to path but if full, remove a point first
            if (this.path.length >= trailLength) this.path.shift();
            this.path.push([this.x, this.y])

            // update speed n position n stuff
            this.vy += this.ay;
            this.vx += this.ax;
            this.x += this.vx;
            this.y += this.vy;
        }

        this.draw = function () {
            var opacity = ~~(this.life * 100 / LIFE) / 100;

            // tail      
            ctx.fillStyle = 'rgba(' + this.colour + (opacity * 1) + ')';
            if (this.life > LIFE * 0.95) ctx.fillStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x - this.r, this.y);
            var i = this.path.length - 1;
            ctx.lineTo(this.path[0][0], this.path[0][1]);
            ctx.lineTo(this.x + this.r, this.y);
            ctx.closePath();
            ctx.fill();

            // main dot
            ctx.fillStyle = 'rgba(' + this.colour + opacity + ')';
            if (this.life > LIFE * 0.95) ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(~~this.x, ~~this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }

    // Firework class
    var Firework = function () {
        this.x = width * (Math.random() * 0.8 + 0.1); // from 0.1-0.9 widths
        this.y = height * (Math.random() * 0.8 + 0.1); // from 0.1-0.9 heights
        this.strength = Math.random() * (maxStrength - minStrength) + minStrength;
        this.colour = ~~(Math.random() * 255) + ',' +
            ~~(Math.random() * 255) + ',' +
            ~~(Math.random() * 255) + ',';
        this.life = 0;
        this.particles = (function (x, y, strength, colour) {
            var p = [];

            var n = ~~(Math.random() * (maxTrails - minTrails)) + minTrails;
            var ay = g;
            for (var i = n; i--;) {
                var ax = D;
                var angle = i * Math.PI * 2 / n;
                if (angle < Math.PI) ax *= -1;
                var vx = strength * Math.sin(angle);
                var vy = strength * Math.cos(angle);
                p.push(new Particle(x, y, vx, vy, ax, ay, colour));
            }

            return p;
        })(this.x, this.y, this.strength, this.colour);

        this.update = function () {
            this.life++;
            if (this.life < 0) return; //allows life to be delayed
            for (var i = this.particles.length; i--;) {
                this.particles[i].update();
                this.particles[i].draw();
                //wasn't bothered to make an extra draw function for firework class
            }
        }
    };

    function main() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();

        fw1.update();
        fw2.update();

        if (fw1.life == LIFE * delay) fw2 = new Firework;
        if (fw2.life == LIFE * delay) fw1 = new Firework;

        window.requestAnimationFrame(main);
    }

    function init() {
        fw1 = new Firework;
        fw2 = new Firework;
        fw2.life = -LIFE * delay;
        main();
    }

    init();

});