// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';
//
//
// let switchEle = document.getElementById('switchBtn');
//
// //switch switch status..
// function switchExchange(status){
//   switchEle.checked=status
//   chrome.storage.sync.set({switchStatus: status}, function() {});
// }
//
// //switch function onclick
// switchEle.onclick = function(element) {
//   switchExchange(!switchVal);
// };
//
// chrome.storage.sync.get(['switchStatus'], function(result) {
//   switchExchange(result.switchStatus=="1")
// });
//






// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function(element) {
//   chrome.alarms.create("bp")
//   chrome.alarms.onAlarm.addListener()
//   // let color = element.target.value;
//   // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   //   chrome.tabs.executeScript(
//   //       tabs[0].id,
//   //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   // });
// };
