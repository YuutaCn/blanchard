

var $first = $(".source:first-child");
var $last = $(".source:last-child");
var initial = $first.text();

$(".source:first-child").addClass("current");
$(".slider").css({ 'background-image': 'url(' + initial + ')' });

setInterval(() => {
  if ($last.hasClass("current")) {
    $last.removeClass("current");
    $first.addClass("current");
  }

  else {
    $(".current").removeClass("current").next(".source").addClass("current");
  }

  var src = $(".current").text();
  $(".slider").css({ 'background-image': 'url(' + src + ')' });
}, 1700);

