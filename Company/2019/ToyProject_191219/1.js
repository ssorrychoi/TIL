document.addEventListener("DOMContentLoaded",function(){
  let naver = document.getElementById("naver");
  naver.addEventListener("click",function(){
    chrome.tabs.executeScript({
      code:"document.getElementById('sform').innerText='';document.getElementById('ke_kbd_btn').innerText=''"
    })
  })

  let bodyTag = document.getElementById('bodyTag');
  bodyTag.addEventListener('click',function(){
    chrome.tabs.executeScript({
      code:'document.querySelector("body").innerText="";alert("Remove <body> tag")'
    });
  });

  let braincolla = document.getElementById('braincolla');
  braincolla.addEventListener('click',function(){
    chrome.tabs.executeScript({
      code:'window.open("http://www.braincolla.com")'
    })
  })
  // chrome.browserAction.setBadgeText({text: 'ON'});
  // chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
});