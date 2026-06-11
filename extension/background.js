importScripts("redirect.js");

chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    if (details.frameId !== 0) {
      return;
    }

    const redirectUrl = getGoogleRedirectUrl(details.url);
    if (!redirectUrl || redirectUrl === details.url) {
      return;
    }

    chrome.tabs.update(details.tabId, { url: redirectUrl });
  },
  {
    url: [
      { hostEquals: "bing.com", pathEquals: "/search" },
      { hostEquals: "www.bing.com", pathEquals: "/search" }
    ]
  }
);
