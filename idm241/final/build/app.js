const menu = document.getElementById("menu");
var bottom = document.getElementById("bottom");
var bottom2 = document.getElementById("bottom2");
const nav = document.getElementById("nav");
const item1 = document.getElementById("one");
const item2 = document.getElementById("two");
const item3 = document.getElementById("three");
const item4 = document.getElementById("four");
const item5 = document.getElementById("five");
const item6 = document.getElementById("six");
const item7 = document.getElementById("seven");
const selected = document.getElementById("selectedItem");

item1.addEventListener('click', item1Click);
function item1Click() {
  item1.innerHTML = "* Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* Work";
}

item2.addEventListener('click', item2Click);
function item2Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "* Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* Services";
}

item3.addEventListener('click', item3Click);
function item3Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "* Team";
  item4.innerHTML = "News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* Team";
}

item4.addEventListener('click', item4Click);
function item4Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "* News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* News";
}

item5.addEventListener('click', item5Click);
function item5Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "News";
  item5.innerHTML = "* Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* Thoughts";
}

item6.addEventListener('click', item6Click);
function item6Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "* Careers";
  item7.innerHTML = "Contact";
  selected.innerHTML = "* Careers";
}

item7.addEventListener('click', item7Click);
function item7Click() {
  item1.innerHTML = "Work";
  item2.innerHTML = "Services";
  item3.innerHTML = "Team";
  item4.innerHTML = "News";
  item5.innerHTML = "Thoughts";
  item6.innerHTML = "Careers";
  item7.innerHTML = "* Contact";
  selected.innerHTML = "* Contact";
}

item1.addEventListener('mouseenter', function (evt) {
  userPicked(0);
});
item1.addEventListener('mouseout', function (evt) {
  userPicked(0);
});

item2.addEventListener('mouseenter', function (evt) {
  userPicked(1);
});
item2.addEventListener('mouseout', function (evt) {
  userPicked(1);
});

item3.addEventListener('mouseenter', function (evt) {
  userPicked(2);
});
item3.addEventListener('mouseout', function (evt) {
  userPicked(2);
});

item4.addEventListener('mouseenter', function (evt) {
  userPicked(3);
});
item4.addEventListener('mouseout', function (evt) {
  userPicked(3);
});

item5.addEventListener('mouseenter', function (evt) {
  userPicked(4);
});
item5.addEventListener('mouseout', function (evt) {
  userPicked(4);
});

item6.addEventListener('mouseenter', function (evt) {
  userPicked(5);
});
item6.addEventListener('mouseout', function (evt) {
  userPicked(5);
});

item7.addEventListener('mouseenter', function (evt) {
  userPicked(6);
});
item7.addEventListener('mouseout', function (evt) {
  userPicked(6);
});

function userPicked(classNdx) {
  const indentArray = document.getElementsByClassName("indent");
  indentArray[classNdx].classList.toggle("indentMake");
}

menu.onmouseover = function() {mouseOver()};
menu.onmouseout = function() {mouseOut()};

function mouseOver() {
  bottom.style.opacity = "0%";
  bottom.style.transition = "opacity 0s ease-in-out 0s";
  
  bottom2.style.opacity = "100%";
  bottom2.style.transition = "opacity 0.25s ease-in-out 0.25s";
  
  expandMenu();
}


function mouseOut() {
  bottom.style.opacity = "100%";
  bottom.style.transition = "opacity 0.15s ease-in-out 0.5s";
  
  bottom2.style.opacity = "0%";
  bottom2.style.transition = "opacity 0s ease-in-out 0.2s";
  
  collapseMenu();
}

function expandMenu() {
  item1On();
  item2On();
  item3On();
  item4On();
  item5On();
  item6On();
  item7On();
  bottom.style.marginTop = "0px";
  selectedOn();
}

function collapseMenu() {
  item7Off();
  item6Off();
  item5Off();
  item4Off();
  item3Off();
  item2Off();
  item1Off();
  selectedOff();
}

function itemPicked(classNdx) {
  const selectedArray = document.getElementsByClassName("selected-item-toggle");
  selectedArray[classNdx].classList.toggle("selected-item-toggle-on");
}

function selectedOn() {
  selected.style.display = "none";
  selected.style.opacity = "0%";

}

function selectedOff() {
  selected.style.display = "block";
  selected.offsetHeight;
  bottom.style.opacity = "100%";
  selected.style.opacity = "100%";
  selected.style.transition = "opacity 0.25s ease 0.45s";
  // bottom.style.marginTop = "65px";
  // selected.style.transition = "margin 0.25s ease 0.45s";
  
}

function item1On() {
  item1.style.opacity = "100%";
  item1.style.transition = "opacity 0.25s ease 0s";
}

function item7Off() {
  item7.style.opacity = "0%";
  item7.style.transition = "opacity 0.25s ease 0s";
}

function item2On() {
  item2.style.opacity = "100%";
  item2.style.transition = "opacity 0.25s ease 0.1s";
}

function item6Off() {
  item6.style.opacity = "0%";
  item6.style.transition = "opacity 0.25s ease 0.1s";
}

function item3On() {
  item3.style.opacity = "100%";
  item3.style.transition = "opacity 0.25s ease 0.15s";
}

function item5Off() {
  item5.style.opacity = "0%";
  item5.style.transition = "opacity 0.25s ease 0.15s";
}

function item4On() {
  item4.style.opacity = "100%";
  item4.style.transition = "opacity 0.25s ease 0.2s";
}

function item4Off() {
  item4.style.opacity = "0%";
  item4.style.transition = "opacity 0.25s ease 0.2s";
}

function item5On() {
  item5.style.opacity = "100%";
  item5.style.transition = "opacity 0.25s ease 0.25s";
}

function item3Off() {
  item3.style.opacity = "0%";
  item3.style.transition = "opacity 0.25s ease 0.25s";
}

function item6On() {
  item6.style.opacity = "100%";
  item6.style.transition = "opacity 0.25s ease 0.3s";
}

function item2Off() {
  item2.style.opacity = "0%";
  item2.style.transition = "opacity 0.25s ease 0.3s";
}

function item7On() {
  item7.style.opacity = "100%";
  item7.style.transition = "opacity 0.25s ease 0.35s";
}

function item1Off() {
  item1.style.opacity = "0%";
  item1.style.transition = "opacity 0.25s ease 0.35s";
}