const test = require("node:test");
const assert = require("node:assert/strict");

const { getGoogleRedirectUrl } = require("../extension/redirect");

test("redirects www.bing.com search queries to Google", () => {
  assert.equal(
    getGoogleRedirectUrl("https://www.bing.com/search?q=test"),
    "https://www.google.com/search?q=test"
  );
});

test("redirects bing.com search queries with encoded Unicode terms to Google", () => {
  assert.equal(
    getGoogleRedirectUrl("https://bing.com/search?q=%E6%B8%AC%E8%A9%A6"),
    "https://www.google.com/search?q=%E6%B8%AC%E8%A9%A6"
  );
});

test("does not redirect non-search Bing pages", () => {
  assert.equal(getGoogleRedirectUrl("https://www.bing.com/"), null);
});

test("does not redirect non-Bing hosts", () => {
  assert.equal(getGoogleRedirectUrl("https://www.google.com/search?q=test"), null);
});
