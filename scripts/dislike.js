// this file is used for detail page in category( like  dota2,lol ... etc)

var listAllLi = document.querySelectorAll("section div.ListContent ul li")

chrome.storage.sync.get(['unlikes'], function(result) {
  if(result && result.unlikes && listAllLi){
    for (var li of listAllLi){
      if (li && li.querySelector("a") && li.querySelector("a").getAttribute("href")){
        let roomIdVar = li.querySelector("a").getAttribute("href").substr(1);
        if (result.unlikes.includes(roomIdVar) ){
          // alert("here we goinggggg");
          li.setAttribute("style","display:none");
          // alert("here we go");
          console.log("屏蔽成功："+roomIdVar)
        }
      }
    }
  }
});
