// Starting Code
$(".next").toggle();
$(".imgtwo").toggle();
$(".imgthree").toggle();
$(".mars").toggle();
$(".sun").toggle();
$(".earth").toggle();
$(".result1").toggle();
$(".result2").toggle();
$(".result3").toggle();
$(".restart").toggle();

// Easter Eggs
$(".imgone").click(function() {
    $(".imgone").css("filter", "invert(100%)");
});

$(".imgtwo").click(function() {
    $(".imgtwo").css("filter", "invert(100%)");
});

$(".imgthree").click(function() {
    $(".imgthree").css("filter", "invert(100%)");
});

$(".imgone").dblclick(function() {
    $(".imgone").css("filter", "none");
});

$(".imgtwo").dblclick(function() {
    $(".imgtwo").css("filter", "none");
});

$(".imgthree").dblclick(function() {
    $(".imgthree").css("filter", "none");
});
    
$(".top").click(function() {
    $(".top").css("color", "pink");
});

$(".top").dblclick(function() {
    $(".top").css("color", "white");
});

// First Action
$(".start").click(function() {  
    $(".imgone").attr("src", "https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif");
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Click Next To Start!");
    $(".next").toggle();
    $(".start").toggle();
});

// Second Action
$(".next").click(function() {
    $(".imgone").attr("src", "https://cdn5.vectorstock.com/i/1000x1000/01/19/rocket-ship-and-mars-in-cartoon-style-new-vector-19910119.jpg");
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Pick one! Your life depends on it!😮");
    $(".imgtwo").toggle();
    $(".imgthree").toggle();
    $(".next").toggle();
    $(".mars").toggle();
    $(".sun").toggle();
    $(".earth").toggle();
});

// Third Action (Mars)
$(".mars").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".earth").toggle();
    $(".sun").toggle();
    $(".mars").toggle();
    $(".imgtwo").toggle();
    $(".imgthree").toggle();
    $(".imgone").attr("src", "https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif");
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Hold On!");
    $(".result1").toggle();
});

// Third Action (Sun)
$(".sun").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".earth").toggle();
    $(".sun").toggle();
    $(".mars").toggle();
    $(".imgtwo").toggle();
    $(".imgthree").toggle();
    $(".imgone").attr("src", "https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif");
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Hold On!");
    $(".result2").toggle();
});

// Third Action (Earth)
$(".earth").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".earth").toggle();
    $(".sun").toggle();
    $(".mars").toggle();
    $(".imgtwo").toggle();
    $(".imgthree").toggle();
    $(".imgone").attr("src", "https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif");
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Hold On!");
    $(".result3").toggle();
});

// Results1
$(".result1").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("You discovered a new alien!  The alien stunned you.  You're stuck their forever.");
    $(".imgone").attr("src", "https://i.imgur.com/ryrJ4cn.gif");
    $(".result1").toggle();
    $(".restart").toggle();
});

// Results2
$(".result2").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Are you stupid? You thought you were hot?  Now you are...you're dead.");
    $(".imgone").attr("src", "https://media1.tenor.com/images/778fdbd498a4a82f690f87a78e9b4088/tenor.gif?itemid=5662168");
    $(".result2").toggle();
    $(".restart").toggle();
});

// Results3
$(".result3").click(function() {
    $(".imgone").css("filter", "none");
    $(".top").css("color", "white");
    $(".top").text("Smart! But you plunged into the ocean with no parachute and died at impact.");
    $(".imgone").attr("src", "https://thumbs.gfycat.com/WeeklyAromaticDoctorfish-max-1mb.gif");
    $(".result3").toggle();
    $(".restart").toggle();
});
$(".restart").click(function() {
    window.location.reload();
});