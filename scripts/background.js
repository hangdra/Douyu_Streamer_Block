
var initSwitchStatus = false;
var unlikeExpireInMilsecL = 30*24*60*60*1000;
var initVoice = false;//true

var platformHost = "www.douyu.com";
var platformResourceHost=[/^http(s)?:\/\/.*douyu.com\/.*/]


//if need voice talk
function voicecTalk(voiceStr){
  console.log('voicecTalk function');
  chrome.storage.local.get(['voice'], function(result) {
    if(result && result.voice){
      console.log('voicecTalk'+result.voice);
      chrome.tts.speak(voiceStr);
    }
  });
}
chrome.alarms.onAlarm.addListener(function(alarm){
    console.log("ararm"+Date.now()+" "+alarm.name);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (chrome.runtime.lastError){
            console.log("Whoops.. " + chrome.runtime.lastError.message);
        }else{
            if ((tabs != undefined )&& (tabs.length != 0 )){
                if (platformResourceHost[0].exec(tabs[0].url)&&platformResourceHost[0].exec(tabs[0].url)[0]){
                    console.log("background:web thing running")
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {file:"scripts/dislike.js"});
                }
            };
       }
     });
});

rule_show_action_button ={
          conditions: [new chrome.declarativeContent.PageStateMatcher(
//          urls: ["<all_urls>"]
                {pageUrl: {urlMatches: platformHost},})],
                actions: [new chrome.declarativeContent.ShowPageAction()]}
    //set listener at the begging of extension installed
chrome.runtime.onInstalled.addListener(function() {
  console.log('onInstalled over.');
//  chrome.storage.local.set({switchStatus: true}, function() {});
  chrome.storage.local.set({switchBtn: initSwitchStatus}, function() {});
  chrome.storage.local.set({unlikes: []}, function() {});
  chrome.storage.local.set({voice: initVoice}, function() {});
  console.log("set in over")
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule_show_action_button]);
  });
});






     //output if url host is demand
function hostEquals(inputUrl,tarUrls){
    var find = false;
    for (tarUrl of tarUrls){
        if (inputUrl && tarUrl){
//            var reg = /^http(s)?:\/\/(.*?)\//;
            console.log(" bg:inputUrl:",inputUrl,"tarUrls",tarUrls)
//            console.log("tarUrl:",tarUrl," inputUrl:",inputUrl," sencond:",tarUrl.exec(inputUrl)[2]);
            if (tarUrl.exec(inputUrl)&&tarUrl.exec(inputUrl)[0]){
                find = true;
                break;
            }
        }
    }

    console.log("find:",find)
    return find;
}

function add_clear_alarms(e){
    console.log("bg:add_clear_alarms run")
    console.log(e);
    if (hostEquals(e.url, platformResourceHost) ) {
        console.log("bg:add_clear_alarms 匹配页面。");
    //        for(var i=1;i<100;i++){
        i = 0;
        chrome.alarms.create("add_clear_alarms"+i, {"when":Date.now()+50*i});
    }

//    }
}




// listen dom loaded and when its cirtical host , we need to put switch on those streamers.
//chrome.webNavigation.onCompleted.addListener(function(e) {
//    console.log("webNavigation:",e);
//    // voicecTalk("匹配斗鱼。");
//    console.log("webNavigation 匹配知乎。");
//    for(var i=1;i<100;i++){
////                console.log("webNavigation 匹配知乎。createing alarms:"+i);
//        chrome.alarms.create("unlikeEvent"+i, {"when":Date.now()+50*i});
//    }
//},{urls:["*://"+streamPlatformHost+"/*"]});
chrome.webRequest.onCompleted.addListener(add_clear_alarms,{urls: ["<all_urls>"]})


//chrome.webRequest.onCompleted.addListener(add_clear_alarms,{urls:["*://"+platformHost+"/*"]})



