// JavaScript source code
function addbackgroundcoloreffect() {
    $("#particlecontainer").addclass("changebackgroundcoloreffect");
}

function stopAnimation(element) {
    $(element).css("-webkit-animation", "none");
    $(element).css("-moz-animation", "none");
    $(element).css("-ms-animation", "none");
    $(element).css("animation", "none");
}

function addtitlecontainer() {
    $("#layer1").addClass("titlecontainer");
    $("#layer2").addClass("titlecontainer");
    $("#layer3").addClass("titlecontainer");
    $("#layer4").addClass("titlecontainer");
    $("#layer5").addClass("titlecontainer");
}

function addmovinglayereffects() {
    $("#layer1").addClass("movinglayer1effect");
    $("#layer2").addClass("movinglayer2effect");
    $("#layer3").addClass("movinglayer3effect");
    $("#layer4").addClass("movinglayer4effect");
    $("#layer5").addClass("movinglayer5effect");
}

function addspacingeffect() {
    $("#layer1").addClass("spaceletterseffect");
    $("#layer2").addClass("spaceletterseffect");
    $("#layer3").addClass("spaceletterseffect");
    $("#layer4").addClass("spaceletterseffect");
    $("#layer5").addClass("spaceletterseffect");
}

function fadeouttitle() {
    $("#outertitlecontainer").click(function () {
        $("#layer1").removeClass("movingeffect");
        $("#layer2").removeClass("movinglayer2effect");
        $("#layer3").removeClass("movinglayer3effect");
        $("#layer4").removeClass("movinglayer4effect");
        $("#layer5").removeClass("movinglayer5effect");

        $("#layer1").addClass("spaceletterseffect");
        $("#layer2").fadeOut();
        $("#layer3").fadeOut();
        $("#layer4").fadeOut();
        $("#layer5").fadeOut();

        $("#layer1").css("opacity", "0.0");
    });
}

function pulesopacity() {
    $("#layer1").transition({ opacity: 0.0, easing: 'linear', duration: 1000 });
    $("#layer2").transition({ opacity: 0.0, easing: 'linear', duration: 1000 });
    $("#layer3").transition({ opacity: 0.0, easing: 'linear', duration: 1000 });
    $("#layer4").transition({ opacity: 0.0, easing: 'linear', duration: 1000 });
    $("#layer5").transition({ opacity: 0.0, easing: 'linear', duration: 1000 });
    $("#layer1").transition({ opacity: 1.0, easing: 'linear', duration: 1000 });
    $("#layer2").transition({ opacity: 1.0, easing: 'linear', duration: 1000 });
    $("#layer3").transition({ opacity: 1.0, easing: 'linear', duration: 1000 });
    $("#layer4").transition({ opacity: 1.0, easing: 'linear', duration: 1000 });
    $("#layer5").transition({ opacity: 1.0, easing: 'linear', duration: 1000 });
    pulesopacity();
}

function looplayermovement() {
    $("#outertitlecontainer div").click(function () {
        pulseopacity();
    });
    looplayermovement();
}

function dosomethingelse() {
    $("#outertitlecontainer").transition({ opacity: 0, easing: 'linear', duration: 10 });
    $("#outertitlecontainer").transition({ opacity: 1.0, easing: 'linear', duration: 10 });
    dosomethingelse();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Dynamically resize footer to fill page, IE8 doesn't like this.
function resizeFooter() {
    var windowHeight = window.innerHeight;
    var headerHeight = $("#header").height();
    var contentHeight = $("#outercontainer").height();
    var footerHeight = $("#footer").height();
    var flexFooter = windowHeight - (headerHeight + contentHeight + footerHeight);
    $(".flex-footer").css("height", flexFooter);
}

function isMobile() {
    try {
        if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        };
        return false;
    } catch (e) { console.log("Error in isMobile"); return false; }
}

function isDeviceMobile() {
    var isMobile = false;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/mobile|Mobile/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/BB10; Touch/);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/webOS/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    return isMobile.any()
}

function playaudiofile() {
    document.getElementById('audiobar').play();
}


$(document).ready(function (e) {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {

        //write code for your mobile clients here.
        //write code for your mobile clients here.
        var titleelem = $("#title").detach();
        $("#outercontainer").append(titleelem);
        $("#title").css('z-index', '1000');
        $("#title").css('font-size', '11.0vw');
        $("#title").css('letter-spacing', '0.09em');
        $("#title").css('text-shadow', '-2vw 4vw 0 rgba(255,255,255,0.3),2vw -4vw 0 rgba(255,255,255,0.3)');
        //$("#title").text('Vektor');

        $("div div div div div").remove();
        $('#title').css('opacity', 1.0);
        $("button").remove();
        $("#header").css('height', '0vh');
        $("#footer").css('height', '0vh');
        $("#outercontainer").css('height', '96vh');
        $("#particlecontainer").css('height', '96vh');
        renderer.setSize($("#outercontainer").width(), $("#outercontainer").height());

        $('body').append(
      $('<div/>')
        .attr("id", "togglebutton")
    );
        $("#togglebutton").addClass("newbutton");


        var el = document.getElementById("togglebutton");
        el.addEventListener("click", playaudiofile, false);

        $(document).on("click", ".newbutton", function () {
            $(".newbutton").addClass('enlargebuttontray');
            $('.newbutton').append($('<div/>').attr("id", "linkidspotify"));
            $('.newbutton').append($('<div/>').attr("id", "linkiditunes"));
            $('.newbutton').append($('<div/>').attr("id", "linkidgplay"));
            $('.newbutton').append($('<div/>').attr("id", "linkidsoundcloud"));
            $('.newbutton').append($('<div/>').attr("id", "linkidfacebook"));
            $('.newbutton').append($('<div/>').attr("id", "linkidmyspace"));
            // add styling to buttons
            $("#linkidspotify").addClass("spotifybutton");
            $("#linkiditunes").addClass("itunesbutton");
            $("#linkidgplay").addClass("gplaybutton");
            $("#linkidsoundcloud").addClass("soundcloudbutton");
            $("#linkidfacebook").addClass("facebookbutton");
            $("#linkidmyspace").addClass("myspacebutton");
            // add hyperlinks to buttons
            $("#linkidspotify").wrap('<a href="https://www.spotify.com/us/" target="_blank" />');
            $("#linkiditunes").wrap('<a href="https://www.apple.com/itunes/" target="_blank" />');
            $("#linkidgplay").wrap('<a href="https://play.google.com/store?hl=en" target="_blank" />');
            $("#linkidsoundcloud").wrap('<a href="https://soundcloud.com/vektorcorps" target="_blank" />');
            $("#linkidfacebook").wrap('<a href="https://www.facebook.com/pages/Vektor-Corps/885544241492101" target="_blank" />');
            $("#linkidmyspace").wrap('<a href="https://myspace.com/vektorcorps" target="_blank" />');
            // animate opacity
            $("#linkidspotify").delay(1500).animate({ opacity: '1.0' }, 'slow');
            $("#linkiditunes").delay(1250).animate({ opacity: '1.0' }, 'slow');
            $("#linkidgplay").delay(1000).animate({ opacity: '1.0' }, 'slow');
            $("#linkidsoundcloud").delay(1000).animate({ opacity: '1.0' }, 'slow');
            $("#linkidfacebook").delay(1250).animate({ opacity: '1.0' }, 'slow');
            $("#linkidmyspace").delay(1500).animate({ opacity: '1.0' }, 'slow');
        });

        var jsScript = document.createElement("script");
        jsScript.setAttribute("type", "text/javascript");
        jsScript.setAttribute("src", "js/alternate_js_file.js");
        document.getElementsByTagName("head")[0].appendChild(jsScript);

        var cssScript = document.createElement("link");
        cssScript.setAttribute("rel", "stylesheet");
        cssScript.setAttribute("type", "text/css");
        cssScript.setAttribute("href", "css/alternate_css_file.css");
        document.getElementsByTagName("head")[0].appendChild(cssScript);

    }
    else {
        // write code for your desktop clients here
      //addtitlecontainer();
      //addmovinglayereffects();
      //$("body").click(function () {
      //    $("div div div div div").animate({ opacity: 0.0, letterSpacing: "0.0em", fontSize: "0em" }, 3000);
      //    $("#title").delay(5.000).animate({ opacity: 1.0 }, 5000);
      //});

      //$(function () {
      //    $(window).load(resizeFooter);
      //    $(window).resize(resizeFooter);
      //});

      //$("button").click(function () {
      //    $(this).css("box-shadow", "0px 0px 10px rgba(255,22,82,0.98);");
      //});

        var titleelem = $("#title").detach();
        $("#outercontainer").append(titleelem);
        $("#title").css('z-index', '1000');
        $("#title").css('font-size', '11.0vw');
        $("#title").css('letter-spacing', '0.09em');
        $("#title").css('text-shadow', '-2vw 4vw 0 rgba(255,255,255,0.3),2vw -4vw 0 rgba(255,255,255,0.3)');
        //$("#title").text('Vektor');

        $("div div div div div").remove();
        $('#title').css('opacity', 1.0);
        $("button").remove();
        $("#header").css('height', '0vh');
        $("#footer").css('height', '0vh');
        $("#outercontainer").css('height', '96vh');
        $("#particlecontainer").css('height', '96vh');
        renderer.setSize($("#outercontainer").width(), $("#outercontainer").height());

        $('body').append(
      $('<div/>')
        .attr("id", "togglebutton")
    );
        $("#togglebutton").addClass("newbutton");


        var el = document.getElementById("togglebutton");
        el.addEventListener("click", playaudiofile);

        $(document).on("click", ".newbutton", function () {
            $(".newbutton").addClass('enlargebuttontray');
            $('.newbutton').append($('<div/>').attr("id", "linkidspotify"));
            $('.newbutton').append($('<div/>').attr("id", "linkiditunes"));
            $('.newbutton').append($('<div/>').attr("id", "linkidgplay"));
            $('.newbutton').append($('<div/>').attr("id", "linkidsoundcloud"));
            $('.newbutton').append($('<div/>').attr("id", "linkidfacebook"));
            $('.newbutton').append($('<div/>').attr("id", "linkidmyspace"));
            // add styling to buttons
            $("#linkidspotify").addClass("spotifybutton");
            $("#linkiditunes").addClass("itunesbutton");
            $("#linkidgplay").addClass("gplaybutton");
            $("#linkidsoundcloud").addClass("soundcloudbutton");
            $("#linkidfacebook").addClass("facebookbutton");
            $("#linkidmyspace").addClass("myspacebutton");
            // add hyperlinks to buttons
            $("#linkidspotify").wrap('<a href="https://www.spotify.com/us/" target="_blank" />');
            $("#linkiditunes").wrap('<a href="https://www.apple.com/itunes/" target="_blank" />');
            $("#linkidgplay").wrap('<a href="https://play.google.com/store?hl=en" target="_blank" />');
            $("#linkidsoundcloud").wrap('<a href="https://soundcloud.com/vektorcorps" target="_blank" />');
            $("#linkidfacebook").wrap('<a href="https://www.facebook.com/pages/Vektor-Corps/885544241492101" target="_blank" />');
            $("#linkidmyspace").wrap('<a href="https://myspace.com/vektorcorps" target="_blank" />');
            // animate opacity
            $("#linkidspotify").delay(1500).animate({ opacity: '1.0' }, 'slow');
            $("#linkiditunes").delay(1250).animate({ opacity: '1.0' }, 'slow');
            $("#linkidgplay").delay(1000).animate({ opacity: '1.0' }, 'slow');
            $("#linkidsoundcloud").delay(1000).animate({ opacity: '1.0' }, 'slow');
            $("#linkidfacebook").delay(1250).animate({ opacity: '1.0' }, 'slow');
            $("#linkidmyspace").delay(1500).animate({ opacity: '1.0' }, 'slow');

        });

        var jsScript = document.createElement("script");
        jsScript.setAttribute("type", "text/javascript");
        jsScript.setAttribute("src", "js/alternate_js_file.js");
        document.getElementsByTagName("head")[0].appendChild(jsScript);

        var cssScript = document.createElement("link");
        cssScript.setAttribute("rel", "stylesheet");
        cssScript.setAttribute("type", "text/css");
        cssScript.setAttribute("href", "css/alternate_css_file.css");
        document.getElementsByTagName("head")[0].appendChild(cssScript);


    }

});
