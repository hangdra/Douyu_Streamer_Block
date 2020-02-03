
var initSwitchStatus = false;
var unlikeExpireInMilsecL = 30*24*60*60*1000;
var streamPlatformHost = "www.douyu.com";
var initVoice = true;

//if need voice talk
function voicecTalk(voiceStr){
  console.log('voicecTalk function');
  chrome.storage.sync.get(['voice'], function(result) {
    if(result && result.voice){
      console.log('voicecTalk'+result.voice);
      chrome.tts.speak(voiceStr);
    }
  });
}

//set listener at the begging of extension installed
chrome.runtime.onInstalled.addListener(function() {
  console.log('onInstalled over.');
  chrome.storage.sync.set({unlikes: []}, function() {});
  chrome.storage.sync.set({voice: initVoice}, function() {});
  chrome.storage.sync.set({unlikeExpireInMilsec: unlikeExpireInMilsecL}, function() {
    console.log('init over.');
    voicecTalk("插件 有直播 dislike 初始化成功。");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.douyu.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


 //output if url host is demand
function hostEquals(inputUrl,tarUrl){
  if (inputUrl && tarUrl){
    console.log("tarUrl:"+tarUrl+" inputUrl:"+inputUrl);
    var reg = /^http(s)?:\/\/(.*?)\//;
    if (reg.exec(inputUrl)&&reg.exec(inputUrl)[2]){
      return reg.exec(inputUrl)[2]==tarUrl;
    }{
      return false;
    }
  }
}

// listen dom loaded and when its cirtical host , we need to put switch on those streamers.
chrome.webNavigation.onCompleted.addListener(function(e) {
  console.log(e);
       if (hostEquals(e.url, streamPlatformHost) ) {
         voicecTalk("匹配斗鱼。");
         console.log("匹配斗鱼。");
         for(var i=1;i<10;i++){
           chrome.alarms.create("unlikeEvent"+i, {"when":Date.now()+500*i});
         }
       //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       //     chrome.tabs.executeScript(
       //         tabs[0].id,
       //         {file:"scripts/dislike.js"}
       //       );
       //   });
       //   // ...
       // }else{
       //  // voicecTalk("没匹配上斗鱼。");
       // }
     }});

chrome.alarms.onAlarm.addListener(function(alarm){
  console.log("ararm"+Date.now()+" "+alarm.name);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:"scripts/dislike.js"}
      );
  });
});
