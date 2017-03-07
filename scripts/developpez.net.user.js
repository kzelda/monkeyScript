// ==UserScript==
// @name         developpez.net-forums-blogs
// @namespace    https://github.com/kzelda/monkeyScript
// @version      0.1
// @description  read articles in full page width
// @author       kzelda
// @include      https://www.developpez.net/forums/blogs/*
// @include      http://www.developpez.net/forums/blogs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("sidebar_container").remove();
    document.querySelector("#content").style.marginRight = 0;

    var tab = document.querySelectorAll(".bbcode_code");
    for (var i = 0 ; i < tab.length ; i++) tab[i].style.overflow = "visible";

    var tab2 = document.querySelectorAll(".blogcontent");
    for (var i = 0 ; i < tab.length ; i++) tab[i].style.fontSize = "18px";


})();
