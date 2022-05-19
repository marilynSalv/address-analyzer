chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    if(message.showAction === true){

        // console.log("wooo!");
        // console.log(sender.tab.title);
        chrome.pageAction.show(sender.tab.id);
        chrome.runtime.sendMessage({address : sender.tab.title});
    }
}

// chrome.tabs.getCurrent(function(tab){
//     var address = tab?.title;
//     console.log(tab);
//     console.log("going to print address");
//     console.log(address);
//   });