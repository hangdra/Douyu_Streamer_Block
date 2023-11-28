// this file is used for detail page in category( like  dota2,lol ... etc)

function log_str(patten,...obj_ins){
    log_bool = false
    for (var obj_in of obj_ins) {
        if (String(obj_in).includes(patten)) {
          log_bool=true;
          break;
        }
      }
    if (log_bool){
        //console.log("f99513df718693d2996c91c4f091a7cf",...obj_ins)
    }
}


var listAllLi = document.querySelectorAll("section div.layout-Cover ul li")


//var result_of_status = false
//chrome.storage.local.get(['switchBtn'], function(result) {
//    result_of_status = result.switchBtn
//});


show_or_hidden()

function hide(item){
    //console.log("hide:",item)
    old_style = item.getAttribute("style")
    new_style = old_style+" ;display: none;"
    item.setAttribute("style",new_style)
}

function show(item){
//    console.log("show:",item)
    old_style = item.getAttribute("style")
    if (String(old_style).includes("display: none;")){
        new_style = old_style.replaceAll("display: none;", "")
//        console.log("new_style",new_style)
        item.setAttribute("style",new_style)
    }
}

function show_or_hidden(){
    //log_str("f99513df718693d2996c91c4f091a7cf","dislike running")
    //log_str("f99513df718693d2996c91c4f091a7cf","obj_inner",obj_inner)z
//        log_str("f99513df718693d2996c91c4f091a7cf","show_or_hidden result",result)
    chrome.storage.local.get(['unlikes'], function(result) {
        console.log("dislike: show_or_hidden unlikes",result.unlikes)
        if(result && result.unlikes && listAllLi){
//            console.log("dislike: here we are listAllLi",listAllLi)
            chrome.storage.local.get(['switchBtn'], function(result2) {
//            console.log("dislike: here we are result:",result)
                for (var li of listAllLi){
                    if (li && li.querySelector("a") && li.querySelector("a").getAttribute("href")){
                        let roomIdVar = li.querySelector("a").getAttribute("href").substr(1);
                        console.log("dislike: roomIdVar:",roomIdVar)
                        if (result.unlikes.includes(roomIdVar)){
                            if(result2.switchBtn){
                                hide(li)
                            }else{
                                show(li)
                            }
                        }
                    }
                }
            });
        }
    });
};


//chrome.storage.sync.get(['unlikes'], function(result) {
//  console.log("result："+result)
//  if(result && result.unlikes && listAllLi){
//    for (var li of listAllLi){
//      if (li && li.querySelector("a") && li.querySelector("a").getAttribute("href")){
//        let roomIdVar = li.querySelector("a").getAttribute("href").substr(1);
//        if (result.unlikes.includes(roomIdVar) ){
//          alert("here we goinggggg"+roomIdVar);
//          li.setAttribute("style","display:none");
//          // alert("here we go");
//          console.log("屏蔽成功："+roomIdVar)
//        }
//      }
//    }
//  }
//});
