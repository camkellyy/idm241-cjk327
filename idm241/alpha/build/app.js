var menu = document.getElementById("menu");
var bottom = document.getElementById("bottom");
var bottom2 = document.getElementById("bottom2");
var nav = document.getElementById("nav");
var item1 = document.getElementById("one");
var item2 = document.getElementById("two");
var item3 = document.getElementById("three");
var item4 = document.getElementById("four");
var item5 = document.getElementById("five");
var item6 = document.getElementById("six");
var item7 = document.getElementById("seven");

menu.onmouseover = function() {mouseOver()};
menu.onmouseout = function() {mouseOut()};

function mouseOver() {
  menu.style.cursor = "pointer";
  linesOn();
  item1On();
  item2On();
  item3On();
  item4On();
  item5On();
  item6On();
  item7On();
}

function mouseOut() {
  linesOff();
  item7Off();
  item6Off();
  item5Off();
  item4Off();
  item3Off();
  item2Off();
  item1Off();
}

function linesOn() {
  bottom.style.opacity = "0%";
  bottom.style.transition = "0s";
  bottom.style.transitionDelay = "0s";
  bottom.style.transitionTimingFunction = "ease-in-out";
  
  bottom2.style.opacity = "100%";
  bottom2.style.transition = "0.25s";
  bottom2.style.transitionDelay = "0.25s";
  bottom2.style.transitionTimingFunction = "ease-in-out";
}

function linesOff() {
  bottom.style.opacity = "100%";
  bottom.style.transition = "0.15s";
  bottom.style.transitionDelay = "0.5s";
  bottom.style.transitionTimingFunction = "ease-in-out";
  
  bottom2.style.opacity = "0%";
  bottom2.style.transitionDelay = "0.2s";
  bottom2.style.transitionTimingFunction = "ease-in-out";
}

function item1On() {
  item1.style.opacity = "100%";
  item1.style.transition = "all 0.25s";
  item1.style.transitionTimingFunction = "ease-in-out";
}

function item7Off() {
  item7.style.opacity = "0%";
  item7.style.transition = "all 0.25s";
  item7.style.transitionTimingFunction = "ease-in-out";
}

function item2On() {
  item2.style.opacity = "100%";
  item2.style.transition = "all 0.25s";
  item2.style.transitionDelay = "0.1s";
  item2.style.transitionTimingFunction = "ease-in-out";
}

function item6Off() {
  item6.style.opacity = "0%";
  item6.style.transition = "all 0.25s";
  item6.style.transitionDelay = "0.1s";
  item6.style.transitionTimingFunction = "ease-in-out";
}

function item3On() {
  item3.style.opacity = "100%";
  item3.style.transition = "all 0.25s";
  item3.style.transitionDelay = "0.15s";
  item3.style.transitionTimingFunction = "ease-in-out";
}

function item5Off() {
  item5.style.opacity = "0%";
  item5.style.transition = "all 0.25s";
  item5.style.transitionDelay = "0.15s";
  item5.style.transitionTimingFunction = "ease-in-out";
}

function item4On() {
  item4.style.opacity = "100%";
  item4.style.transition = "all 0.25s";
  item4.style.transitionDelay = "0.2s";
  item4.style.transitionTimingFunction = "ease-in-out";
}

function item4Off() {
  item4.style.opacity = "0%";
  item4.style.transition = "all 0.25s";
  item4.style.transitionDelay = "0.2s";
  item4.style.transitionTimingFunction = "ease-in-out";
}

function item5On() {
  item5.style.opacity = "100%";
  item5.style.transition = "all 0.25s";
  item5.style.transitionDelay = "0.25s";
  item5.style.transitionTimingFunction = "ease-in-out";
}

function item3Off() {
  item3.style.opacity = "0%";
  item3.style.transition = "all 0.25s";
  item3.style.transitionDelay = "0.25s";
  item3.style.transitionTimingFunction = "ease-in-out";
}

function item6On() {
  item6.style.opacity = "100%";
  item6.style.transition = "all 0.25s";
  item6.style.transitionDelay = "0.3s";
  item6.style.transitionTimingFunction = "ease-in-out";
}

function item2Off() {
  item2.style.opacity = "0%";
  item2.style.transition = "all 0.25s";
  item2.style.transitionDelay = "0.3s";
  item2.style.transitionTimingFunction = "ease-in-out";
}

function item7On() {
  item7.style.opacity = "100%";
  item7.style.transition = "all 0.25s";
  item7.style.transitionDelay = "0.35s";
  item7.style.transitionTimingFunction = "ease-in-out";
}

function item1Off() {
  item1.style.opacity = "0%";
  item1.style.transition = "all 0.25s";
  item1.style.transitionDelay = "0.35s";
  item1.style.transitionTimingFunction = "ease-in-out";
}