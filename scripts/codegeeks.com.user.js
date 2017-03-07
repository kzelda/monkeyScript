// ==UserScript==
// @name         codegeeks
// @namespace    https://github.com/kzelda/monkeyScript
// @version      0.1
// @description  read in full width page
// @author       You
// @include        https://*.javacodegeeks.com/*
// @include        https://*.webcodegeeks.com/*
// @include        https://*.systemcodegeeks.com/*
// @include        https://*.dotnetcodegeeks.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
    	if(document.querySelector(".content") !== null) document.querySelector(".content").style.width = "100%";
    	if(document.querySelector("#mc4wp-form-2") !== null) document.querySelector("#mc4wp-form-2").remove();
    	if(document.querySelector("#mc4wp-form-1") !== null) document.querySelector("#mc4wp-form-1").remove();
	if(document.querySelector(".snp-overlay") !== null) document.querySelector(".snp-overlay").remove();
	if(document.querySelector("#snp-bld-step-1") !== null) document.querySelector("#snp-bld-step-1").remove();
	if(document.querySelector(".x-white.foobar-wrapper.shadow.fb-top") !== null) document.querySelector(".x-white.foobar-wrapper.shadow.fb-top").remove();
},500);

try{
	document.querySelector(".sidebar").remove();
}catch(e){}
    
})();
