// Renders build/page.html to entry.png (1024x1024) with headless Chromium.
// Run: NODE_PATH=/home/hatch/workspace/orbit-work/node_modules node build/render.cjs
const puppeteer = require('puppeteer-core');
const path = require('node:path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/home/hatch/.cache/ms-playwright/chromium-1148/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto('file:///home/hatch/workspace/news-image-26nov-repo/build/page.html', { waitUntil: 'load' });
  await page.screenshot({ path: '/home/hatch/workspace/news-image-26nov-repo/entry.png', type: 'png' });
  await browser.close();
  console.log('wrote entry.png');
})();
