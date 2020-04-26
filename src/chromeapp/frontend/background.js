'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("STOP FAKE NEWS CHROME EXTENSION INTIALIZED !!!");
  });
});


// Comment out (or don't require) services you don't want to use
// require("firebase/storage");

//let button = document.getElementById('Submit');

//button.onclick = function(element) {
//  console.log("STOP FAKE NEWS CHROME EXTENSION INTIALIZED !!!");
//}
