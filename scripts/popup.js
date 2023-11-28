// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';
//
//



window.onload=function(){
    let switchBtn = document.getElementById('switchBtn');
    console.log( "here log",switchBtn)
    var platformHost = /^http(s)?:\/\/.*douyu.com\/.*/;
    default_checked = true
    init_check_input()
    function init_check_input(){
         chrome.storage.local.get(['switchBtn'], function(result) {
            console.log("result",result)
            if (result.switchBtn == null){
                console.log("if status: switchBtn null")
                chrome.storage.local.set({'switchBtn':default_checked}, function() {});
                if(switchBtn.checked!=default_checked){
                    switchBtn.click()
                }
            }else{
                switchBtn.checked = result.switchBtn
                console.log("if status: switchBtn ",result.switchBtn)
            }
         });

    }
    chrome.alarms.onAlarm.addListener(function(alarm){
        console.log("pop:ararm"+Date.now()+" "+alarm.name);
        chrome.tabs.query({ active: true, currentWindow: true} , function(tabs) {
            if (chrome.runtime.lastError){
                console.log("Whoops.. " + chrome.runtime.lastError.message);
            }else{
                if ((tabs != undefined )&& (tabs.length != 0 )){
                    console.log("pop:web thing",tabs)
                    if (platformHost.exec(tabs[0].url)&&platformHost.exec(tabs[0].url)[0]){
                        console.log("pop:web thing running")
                        chrome.tabs.executeScript(
                            tabs[0].id,
                            {file:"scripts/dislike.js"});
                    }
                };
            }
        });
    });

    //switch function onclick
    switchBtn.onclick=function(element) {
        console.log("status change switchBtn",switchBtn.checked);
        console.log(switchBtn)
        chrome.storage.local.set({'switchBtn': switchBtn.checked}, function() {});
        chrome.alarms.create("unlikeEvent", {"when":Date.now()+300});
    };
}

