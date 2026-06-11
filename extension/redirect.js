"use strict";

const BING_HOSTS = new Set(["bing.com", "www.bing.com"]);

function getGoogleRedirectUrl(inputUrl) {
  let url;

  try {
    url = new URL(inputUrl);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return null;
  }

  if (!BING_HOSTS.has(url.hostname.toLowerCase())) {
    return null;
  }

  if (url.pathname !== "/search") {
    return null;
  }

  const query = url.searchParams.get("q");
  if (!query) {
    return null;
  }

  const googleUrl = new URL("https://www.google.com/search");
  googleUrl.searchParams.set("q", query);
  return googleUrl.toString();
}

if (typeof module !== "undefined") {
  module.exports = { getGoogleRedirectUrl };
}
