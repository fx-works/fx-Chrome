/**
 * Created with JetBrains WebStorm.
 * User: zxt1016
 * Date: 13-10-21
 * Time: 下午3:16
 * To change this template use File | Settings | File Templates.
 */

if (window.localStorage) {
    if (!localStorage.initial) {
        //initial标志位，initial为0代表未初始化，为1代表离线试用初始化，为2代表登录初始化。
        localStorage.setItem("initial", 0);
        chrome.browserAction.setPopup({popup:'popup.html'});
        chrome.tabs.create({url: "../installed.html"}, function () {
            //do nothing;
        });
    }
    else {
        if(localStorage.getItem("initial")==0){
            chrome.browserAction.setPopup({popup:'popup.html'});
        } else {
            chrome.browserAction.setPopup({popup:''});
        }
    }
} else {
    alert("Your browser don't support localStorage");
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "js/content_script.js"});
    chrome.tabs.insertCSS(null, {file: "css/toolbar_style.css"});
});