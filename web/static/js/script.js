! function (a) {
    "use strict";
    a(window).on("load", function () {
        //a(".loader-inner").fadeOut(), a(".loader").delay(200).fadeOut("slow")
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
    }), a(".popup-image").magnificPopup({
        type: "image",
        fixedContentPos: !1,
        fixedBgPos: !1,
        mainClass: "mfp-no-margins mfp-with-zoom",
        image: {
            verticalFit: !0
        },
        zoom: {
            enabled: !0,
            duration: 300
        }
    }), a(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    });
    var o = a(".video-cover .play-but");
    a(".video-cover").each(function () {
        a(this).find("iframe").length && a(this).find("iframe").attr("data-src", a(this).find("iframe").attr("src"), a(this).find("iframe").attr("src", ""))
    }), o.on("click", function () {
        var s = a(this).closest(".video-cover"),
            e = s.find("iframe");
        return s.addClass("show-video"), e.attr("src", e.attr("data-src")), !1
    }), new Instafeed({
        get: "user",
        userId: "13339175373",
        accessToken: "13339175373.95cbc68.b63a06b452874b6e8384eebc29a005ce",
        limit: 5,
        resolution: "standard_resolution",
        template: '<li><a class="hover-effect rounded-circle" target="_blank" href="{{link}}"><span class="hover-effect-container"><span class="hover-effect-icon hover-effect-icon-small"><span class="fa fa-heart hover-effect-icon-inner"></span></span></span></span><img class=" mw-100" src="{{image}}" /></a></li>'
    }).run(), a(".countdown").countdown("2020/02/20").on("update.countdown", function (s) {
        a(this).html(s.strftime('\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%m</span> <span class="label">Month%!m</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%d</span> <span class="label">Day%!d</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%H</span> <span class="label">Hour%!H</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%M</span> <span class="label">Minute%!M</span></div></div>\
        <div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">%S</span> <span class="label">Second%!S</span></div></div>\
        '));
    })
}(jQuery);



$(function() {
    // // when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
    // // not supported in all browsers though and sometimes needs a prefix, so we need a shim
    // window.requestAnimFrame = ( function() {
    //     return window.requestAnimationFrame ||
    //                 window.webkitRequestAnimationFrame ||
    //                 window.mozRequestAnimationFrame ||
    //                 function( callback ) {
    //                     window.setTimeout( callback, 1000 / 60 );
    //                 };
    // })();

    // // now we will setup our basic variables for the demo
    // var canvas = document.querySelector( 'canvas' ),
    //         ctx = canvas.getContext( '2d' ),
    //         // full screen dimensions
    //         cw = window.innerWidth,
    //         ch = window.innerHeight,
    //         // firework collection
    //         fireworks = [],
    //         // particle collection
    //         particles = [],
    //         // starting hue
    //         hue = 120,
    //         // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
    //         limiterTotal = 5,
    //         limiterTick = 0,
    //         // this will time the auto launches of fireworks, one launch per 80 loop ticks
    //         timerTotal = 80,
    //         timerTick = 0,
    //         mousedown = false,
    //         // mouse x coordinate,
    //         mx,
    //         // mouse y coordinate
    //         my;
            
    // // set canvas dimensions
    // canvas.width = cw;
    // canvas.height = ch;

    // // now we are going to setup our function placeholders for the entire demo

    // // get a random number within a range
    // function random( min, max ) {
    //     return Math.random() * ( max - min ) + min;
    // }

    // // calculate the distance between two points
    // function calculateDistance( p1x, p1y, p2x, p2y ) {
    //     var xDistance = p1x - p2x,
    //             yDistance = p1y - p2y;
    //     return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
    // }

    // // create firework
    // function Firework( sx, sy, tx, ty ) {
    //     // actual coordinates
    //     this.x = sx;
    //     this.y = sy;
    //     // starting coordinates
    //     this.sx = sx;
    //     this.sy = sy;
    //     // target coordinates
    //     this.tx = tx;
    //     this.ty = ty;
    //     // distance from starting point to target
    //     this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
    //     this.distanceTraveled = 0;
    //     // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
    //     this.coordinates = [];
    //     this.coordinateCount = 3;
    //     // populate initial coordinate collection with the current coordinates
    //     while( this.coordinateCount-- ) {
    //         this.coordinates.push( [ this.x, this.y ] );
    //     }
    //     this.angle = Math.atan2( ty - sy, tx - sx );
    //     this.speed = 2;
    //     this.acceleration = 1.05;
    //     this.brightness = random( 50, 70 );
    //     // circle target indicator radius
    //     this.targetRadius = 1;
    // }

    // // update firework
    // Firework.prototype.update = function( index ) {
    //     // remove last item in coordinates array
    //     this.coordinates.pop();
    //     // add current coordinates to the start of the array
    //     this.coordinates.unshift( [ this.x, this.y ] );
        
    //     // cycle the circle target indicator radius
    //     if( this.targetRadius < 8 ) {
    //         this.targetRadius += 0.3;
    //     } else {
    //         this.targetRadius = 1;
    //     }
        
    //     // speed up the firework
    //     this.speed *= this.acceleration;
        
    //     // get the current velocities based on angle and speed
    //     var vx = Math.cos( this.angle ) * this.speed,
    //             vy = Math.sin( this.angle ) * this.speed;
    //     // how far will the firework have traveled with velocities applied?
    //     this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
        
    //     // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
    //     if( this.distanceTraveled >= this.distanceToTarget ) {
    //         createParticles( this.tx, this.ty );
    //         // remove the firework, use the index passed into the update function to determine which to remove
    //         fireworks.splice( index, 1 );
    //     } else {
    //         // target not reached, keep traveling
    //         this.x += vx;
    //         this.y += vy;
    //     }
    // }

    // // draw firework
    // Firework.prototype.draw = function() {
    //     ctx.beginPath();
    //     // move to the last tracked coordinate in the set, then draw a line to the current x and y
    //     ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
    //     ctx.lineTo( this.x, this.y );
    //     ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
    //     ctx.stroke();
        
    //     ctx.beginPath();
    //     // draw the target for this firework with a pulsing circle
    //     ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
    //     ctx.stroke();
    // }

    // // create particle
    // function Particle( x, y ) {
    //     this.x = x;
    //     this.y = y;
    //     // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
    //     this.coordinates = [];
    //     this.coordinateCount = 5;
    //     while( this.coordinateCount-- ) {
    //         this.coordinates.push( [ this.x, this.y ] );
    //     }
    //     // set a random angle in all possible directions, in radians
    //     this.angle = random( 0, Math.PI * 2 );
    //     this.speed = random( 1, 10 );
    //     // friction will slow the particle down
    //     this.friction = 0.95;
    //     // gravity will be applied and pull the particle down
    //     this.gravity = 1;
    //     // set the hue to a random number +-50 of the overall hue variable
    //     this.hue = random( hue - 50, hue + 50 );
    //     this.brightness = random( 50, 80 );
    //     this.alpha = 1;
    //     // set how fast the particle fades out
    //     this.decay = random( 0.015, 0.03 );
    // }

    // // update particle
    // Particle.prototype.update = function( index ) {
    //     // remove last item in coordinates array
    //     this.coordinates.pop();
    //     // add current coordinates to the start of the array
    //     this.coordinates.unshift( [ this.x, this.y ] );
    //     // slow down the particle
    //     this.speed *= this.friction;
    //     // apply velocity
    //     this.x += Math.cos( this.angle ) * this.speed;
    //     this.y += Math.sin( this.angle ) * this.speed + this.gravity;
    //     // fade out the particle
    //     this.alpha -= this.decay;
        
    //     // remove the particle once the alpha is low enough, based on the passed in index
    //     if( this.alpha <= this.decay ) {
    //         particles.splice( index, 1 );
    //     }
    // }

    // // draw particle
    // Particle.prototype.draw = function() {
    //     ctx. beginPath();
    //     // move to the last tracked coordinates in the set, then draw a line to the current x and y
    //     ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
    //     ctx.lineTo( this.x, this.y );
    //     ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
    //     ctx.stroke();
    // }

    // // create particle group/explosion
    // function createParticles( x, y ) {
    //     // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    //     var particleCount = 30;
    //     while( particleCount-- ) {
    //         particles.push( new Particle( x, y ) );
    //     }
    // }

    // // main demo loop
    // function loop() {
    //     // this function will run endlessly with requestAnimationFrame
    //     requestAnimFrame( loop );
        
    //     // increase the hue to get different colored fireworks over time
    //     //hue += 0.5;
    
    // // create random color
    // hue= random(0, 360 );
        
    //     // normally, clearRect() would be used to clear the canvas
    //     // we want to create a trailing effect though
    //     // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    //     ctx.globalCompositeOperation = 'destination-out';
    //     // decrease the alpha property to create more prominent trails
    //     ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    //     ctx.fillRect( 0, 0, cw, ch );
    //     // change the composite operation back to our main mode
    //     // lighter creates bright highlight points as the fireworks and particles overlap each other
    //     ctx.globalCompositeOperation = 'lighter';
        
    //     // loop over each firework, draw it, update it
    //     var i = fireworks.length;
    //     while( i-- ) {
    //         fireworks[ i ].draw();
    //         fireworks[ i ].update( i );
    //     }
        
    //     // loop over each particle, draw it, update it
    //     var i = particles.length;
    //     while( i-- ) {
    //         particles[ i ].draw();
    //         particles[ i ].update( i );
    //     }
        
    //     // launch fireworks automatically to random coordinates, when the mouse isn't down
    //     if( timerTick >= timerTotal ) {
    //         if( !mousedown ) {
    //             // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
    //             fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
    //             timerTick = 0;
    //         }
    //     } else {
    //         timerTick++;
    //     }
        
    //     // limit the rate at which fireworks get launched when mouse is down
    //     if( limiterTick >= limiterTotal ) {
    //         if( mousedown ) {
    //             // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
    //             fireworks.push( new Firework( cw / 2, ch, mx, my ) );
    //             limiterTick = 0;
    //         }
    //     } else {
    //         limiterTick++;
    //     }
    // }

    // // mouse event bindings
    // // update the mouse coordinates on mousemove
    // canvas.addEventListener( 'mousemove', function( e ) {
    //     mx = e.pageX - canvas.offsetLeft;
    //     my = e.pageY - canvas.offsetTop;
    // });

    // // toggle mousedown state and prevent canvas from being selected
    // canvas.addEventListener( 'mousedown', function( e ) {
    //     e.preventDefault();
    //     mousedown = true;
    // });

    // canvas.addEventListener( 'mouseup', function( e ) {
    //     e.preventDefault();
    //     mousedown = false;
    // });

    // // once the window loads, we are ready for some fireworks!
    // window.onload = loop;


	// VARIABLEZ
	// play with them
	var c = document.querySelector('canvas'),
		ctx = c.getContext('2d'),
		width = c.width = window.innerWidth,
		height = c.height = window.innerHeight,

		n_stars = 150, //num of stars
		stars = [], //array to store generated stars
		twinkleFactor = .4, //how much stars 'twinkle'
		maxStarRadius = 3,

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
	var Particle = function(x, y, vx, vy, ax, ay, colour) {
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

		this.update = function() {
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

		this.draw = function() {
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
	var Firework = function() {
		this.x = width * (Math.random() * 0.8 + 0.1); // from 0.1-0.9 widths
		this.y = height * (Math.random() * 0.8 + 0.1); // from 0.1-0.9 heights
		this.strength = Math.random() * (maxStrength - minStrength) + minStrength;
		this.colour = ~~(Math.random() * 255) + ',' +
			~~(Math.random() * 255) + ',' +
			~~(Math.random() * 255) + ',';
		this.life = 0;
		this.particles = (function(x, y, strength, colour) {
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

		this.update = function() {
			this.life++;
			if (this.life < 0) return; //allows life to be delayed
			for (var i = this.particles.length; i--;) {
				this.particles[i].update();
				this.particles[i].draw();
				//wasn't bothered to make an extra draw function for firework class
			}
		}
	};

	var Star = function() {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.r = Math.random() * maxStarRadius;
		this.b = ~~(Math.random() * 100) / 100;
	}

	Star.prototype.draw = function() {
        ctx.clearRect(0, 0, c.width, c.height);
		this.b += twinkleFactor * (Math.random() - .5);
		ctx.fillStyle = 'rgba(255,255,255,' + this.b + ')';
		ctx.beginPath();
		ctx.arc(~~this.x, ~~this.y, this.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}

	function createStars() {
		for (var i = n_stars; i--;) stars.push(new Star);
	}

	function main() {
        ctx.fillStyle = 'rgba(0,0,0,0)';
		ctx.fillRect(0, 0, width, height);

		for (var i = n_stars; i--;) stars[i].draw();

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
		createStars();
		main();
	}

	init();

});