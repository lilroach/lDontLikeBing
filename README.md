# No Bing Search Redirector

## 中文介紹

你也討厭 Microsoft Edge 每次更新後，又偷偷把搜尋引擎改回 Bing 嗎？

`No Bing Search Redirector` 是一個簡單的本機 Edge 外掛。它不碰登錄檔、不需要系統管理員權限，也不使用企業政策；只要外掛啟用，當 Edge 或你手動打開 Bing 搜尋結果頁時，它就會自動把搜尋導到 Google。

這不是一個會「永久刪除 Bing」的工具。純外掛無法鎖住 Edge 內建的預設搜尋設定，但它可以讓你在日常使用中盡量不要再被帶回 Bing。

### 功能

- 自動將 `bing.com/search?q=...` 轉到 Google。
- 保留原本搜尋關鍵字，包含中文查詢。
- 不重導 Bing 首頁或其他非搜尋頁面。
- 不收集資料、不追蹤瀏覽紀錄、不連外傳送任何使用資訊。
- 不寫入 Windows 登錄檔，不需要系統管理員權限。

### 安裝方式

1. 開啟 Microsoft Edge。
2. 前往 `edge://extensions`。
3. 打開 **開發人員模式**。
4. 點選 **載入解壓縮的擴充功能**。
5. 選擇本專案中的 `extension` 資料夾。

### 測試方式

安裝後開啟以下網址：

- `https://www.bing.com/search?q=test`
- `https://bing.com/search?q=%E6%B8%AC%E8%A9%A6`

它們應該會自動跳到 Google，並保留同樣的搜尋字。

以下網址不應該被重導：

- `https://www.bing.com/`

### 注意事項

如果 Edge 更新後又出現 Bing，請先到 `edge://extensions` 確認此外掛仍然啟用。因為這是純外掛，它只能在啟用狀態下重導 Bing 搜尋頁，不能保證 Edge 永遠不改回 Bing 作為預設搜尋引擎。

---

## English

Do you hate it when Microsoft Edge updates and quietly sends your searches back to Bing again?

`No Bing Search Redirector` is a small local Edge extension. It does not touch the Windows registry, does not require administrator rights, and does not use enterprise browser policies. When the extension is enabled, Bing search result pages are automatically redirected to Google.

This is not a tool that permanently removes Bing from Edge. A pure browser extension cannot lock Edge's built-in default search provider, but it can keep day-to-day searches from landing on Bing while the extension is enabled.

### Features

- Redirects `bing.com/search?q=...` to Google.
- Keeps the original search query, including Unicode text.
- Does not redirect the Bing homepage or other non-search Bing pages.
- Does not collect data, track browsing history, or send usage information anywhere.
- Does not write to the Windows registry and does not require administrator rights.

### Install in Edge

1. Open Microsoft Edge.
2. Go to `edge://extensions`.
3. Turn on **Developer mode**.
4. Choose **Load unpacked**.
5. Select the `extension` folder in this project.

### Test

After loading the extension, open these URLs:

- `https://www.bing.com/search?q=test`
- `https://bing.com/search?q=%E6%B8%AC%E8%A9%A6`

Both should redirect to Google with the same search term.

This URL should not redirect:

- `https://www.bing.com/`

### Notes

If Bing appears again after an Edge update, open `edge://extensions` and make sure this extension is still enabled. Because this is a pure extension, it only redirects Bing search pages while enabled; it cannot guarantee that Edge will never change its default search provider back to Bing.
