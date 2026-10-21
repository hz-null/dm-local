// Render landing page ke PNG. node website/shot.js
const path = require("path");
const { chromium } = require("C:/Users/Hz/xstocks-content/node_modules/playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1.5,
  });
  await page.goto("file:///" + path.resolve(__dirname, "index.html").replace(/\\/g, "/"));
  await page.waitForTimeout(600);

  // Hero saja
  await page.screenshot({ path: path.resolve(__dirname, "_preview_hero.png"), clip: { x: 0, y: 0, width: 1280, height: 900 } });

  // Full page
  await page.screenshot({ path: path.resolve(__dirname, "_preview_full.png"), fullPage: true });
  await browser.close();
  console.log("OK");
})();
