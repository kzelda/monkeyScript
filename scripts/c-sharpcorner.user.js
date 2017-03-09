// ==UserScript==
// @name         c-sharpcorner
// @namespace    https://github.com/kzelda/monkeyScript
// @version      0.1
// @description  read in full width page
// @author       kzelda
// @include        http://*.c-sharpcorner.com/article/*
// @include        https://*.c-sharpcorner.com/article/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(".cotent-share-icon.clearfix").remove();
    document.querySelector(".publish-info").remove();
    document.querySelector(".content-actions").remove();
    document.querySelector(".right-bar.hidden-md-down").remove();
    document.querySelector(".content").style.width = "100%";
})();
