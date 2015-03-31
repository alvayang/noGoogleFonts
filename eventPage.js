chrome.webRequest.onBeforeRequest.addListener(
        function(info) {
            console.log(info.url);
            return {
                cancel : true 
            };
        },
        {
            urls: [ 
        "*://www.google.com/webfonts*",
        "*://*.googleapis.com/*",
        "*://fonts.googleapis.com/*",
        "*://fonts.google.com/*",
        "*://ajax.googleapis.com/*",
        "*://*.googlesyndication.com/*",
        "*://*.wp.com/*",
        "*://www.google-analytics.com/ga.js",
        "*://*.imgur.com/*",
        "*://www.google-analytics.com/analytics.js",
        "*://*.gravatar.com/*",
        "*://*.facebook.com/*",
        "*://*.facebook.net/*",
        "*://*.youtube.com/*",
        "*://*.gravatar.com/*"
    ], 
types: []  
//types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest","other"]  
        },
        ["blocking"]);
