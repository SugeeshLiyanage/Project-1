$(document).ready(function(){

$.fx.speeds.xslow = 3000;

function open(){
	$("nav").hide();
	$("head").hide();
	$("body").hide();
	$("nav").fadeIn("xslow");
	$("head").fadeIn("xslow");
	$("body").fadeIn("xslow");
	$(".entry").tooltip();
	$(".about").tooltip();
	$("logout").tooltip();
	$(".submitBtn").tooltip();
}

open();

 function getStylesheet() {
      var currentTime = new Date().getHours();

      if (0 <= currentTime && currentTime < 5) {
       $("head").append("<link rel='stylesheet' href='assets/night.css' type='text/css'>");
      }
      if (5 <= currentTime && currentTime < 11) {
       $("head").append("<link rel='stylesheet' href='assets/morning.css' type='text/css'>");
      }
      if (11 <= currentTime && currentTime < 16) {
       $("head").append("<link rel='stylesheet' href='assets/daytime.css' type='text/css'>");
      }
      if (16 <= currentTime && currentTime < 22) {
       $("head").append("<link rel='stylesheet' href='assets/dusk.css' type='text/css'>");
      }
      if (22 <= currentTime && currentTime <= 24) {
       $("head").append("<link rel='stylesheet' href='assets/night.css' type='text/css'>");
      }
}

getStylesheet();







});