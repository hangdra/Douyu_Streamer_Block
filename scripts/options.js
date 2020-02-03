let page = document.getElementById('buttonDiv');

if(document.getElementById('roomId')){
  document.getElementById('roomId').onkeydown = function(){
    if (event.keyCode == 13){
       document.getElementById('unlike').click();
       document.getElementById('roomId').value='';
    }
  }
}
// $("#roomId").bind("keydown",function(e){
//         // 兼容FF和IE和Opera
//     var theEvent = e || window.event;
//     var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
//     if (code == 13) {
//         //回车执行查询
//             $("#unlike").click();
//         }
// });


//if need voice talk
function voicecTalk(voiceStr){
  // console.log('voicecTalk function');
  // chrome.storage.sync.get(['voice'], function(result) {
  //   if(result && result.voice){
      // console.log('voicecTalk'+result.voice);
      chrome.tts.speak(voiceStr);
  //   }
  // });
  // return true;
}


let unlikeBtn = document.getElementById('unlike');
if (unlikeBtn){
  unlikeBtn.onclick = function(element) {

   let roomIdVar = document.getElementById('roomId').value;
   if (roomIdVar!=''){
     chrome.storage.sync.get(['unlikes'], function(result) {
            if (!result.unlikes.includes(roomIdVar) ){
              result.unlikes.push(roomIdVar);
              chrome.storage.sync.set({unlikes: result.unlikes}, function() {});
              paintOneStreamerEle(roomIdVar,result.unlikes);
              voicecTalk("dislike  "+roomIdVar);
              console.log('Settings saved  '+roomIdVar);
            }
            console.log('Value currently is ' + result.unlikes);
          });

   }
  }
}

let unlikeClearBtn = document.getElementById('unlikeClear');
if (unlikeClearBtn){
unlikeClearBtn.onclick = function(element) {
  chrome.storage.sync.get(['unlikes'], function(result) {
    let unlikeCount = result.unlikes.length
    voicecTalk("请确认清空共 "+unlikeCount+" 项dislike    吗?")
    let recon = confirm("请确认清空共 "+unlikeCount+" 项dislike吗？");
    if(recon){
      chrome.storage.sync.set({unlikes: []}, function() {
        page.innerHTML="";
        console.log('unlikes cleared ');
        voicecTalk("共清空 "+unlikeCount+" 项dislike。")
        alert("共清空 "+unlikeCount+" 项dislike。")
      });
    }
  });
 }
}

if (page){
  chrome.storage.sync.get(['unlikes'], function(result) {
    for (let item of result.unlikes) {
      paintOneStreamerEle(item,result.unlikes);
    }
  });
}

function paintOneStreamerEle(streamerIdInput,wholeListInput=undefined){
  let unlikesDiv = document.createElement('div');
  unlikesDiv.setAttribute("value",streamerIdInput);
  unlikesDiv.setAttribute("style","float:left;margin:10px;background: #94d9f1;");
  // unlikesDiv.style.magin = "10px";
  let unlikesIdP = document.createElement('p');
  unlikesIdP.setAttribute("style","float:left;margin-left:7px");
  let likeDiv = document.createElement('div');
  likeDiv.setAttribute("value",streamerIdInput);
  likeDiv.setAttribute("style","float:left;margin:5px;cursor: cell;");
  //clean one of the id out of dislike pool
  likeDiv.onclick = function(ele){
    voicecTalk("放出这个人？"+streamerIdInput);
    let likeAgainBool = confirm("放出这个人？"+streamerIdInput);
    if(likeAgainBool){
      unlikes2 = []
      for(let item2 of wholeListInput){
        if (item2 != streamerIdInput){
          unlikes2.push(item2);
        }
      }
      chrome.storage.sync.set({unlikes: unlikes2}, function() {
        unlikesDiv.outerHTML="";
      });
    }
  }

  likeDiv.innerHTML="X"
  unlikesIdP.innerHTML = streamerIdInput;
  unlikesDiv.appendChild(unlikesIdP);
  unlikesDiv.appendChild(likeDiv);
  page.appendChild(unlikesDiv);
}
