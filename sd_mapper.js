"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Lyle Goldman
   Date:   4/02/2026

*/

// Get the date and time for the planisphere.
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerText = timeStr;

// Determine which sky map to use for the current date and time.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Insert the image.
document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);
