# No Bing Search Redirector

This is a local Microsoft Edge extension that redirects Bing search pages to Google.

It does not change the Windows registry, does not use Edge policy, and does not require administrator rights. Because it is a pure extension, it cannot permanently change Edge's built-in default search provider. It only redirects Bing search pages while the extension is installed and enabled.

## Install in Edge

1. Open `edge://extensions`.
2. Turn on **Developer mode**.
3. Choose **Load unpacked**.
4. Select the `extension` folder in this project.

## Test

After loading the extension, open these URLs:

- `https://www.bing.com/search?q=test`
- `https://bing.com/search?q=%E6%B8%AC%E8%A9%A6`

Both should redirect to Google with the same search term.

This URL should not redirect:

- `https://www.bing.com/`

If Edge updates and Bing appears again, check `edge://extensions` and make sure this extension is still enabled.
