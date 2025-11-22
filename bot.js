import puppeteer from 'puppeteer';

const USER = 'xCB7tcYjRYgP';
const PASS = '150707';
const PROXY = 'superproxy.zenrows.com:1337';
const TARGET = 'https://www.geckoterminal.com/tr/bsc/pools/0x1f7b009acfb88aa5e1be0b26bbb7006fe8bda4c5';

let success = 0;

async function vote() {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage',
        '--single-process','--no-zygote','--disable-gpu',
        `--proxy-server=http://${PROXY}`
      ]
    });

    const page = await browser.newPage();
    await page.authenticate({ username: USER, password: PASS });
    await page.goto(TARGET, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForTimeout(7000);

    const clicked = await page.evaluate(() => {
      const btn = [...document.querySelectorAll('button, [role="button"], div')]
        .find(b => /good|bullish|👍|🚀/i.test(b.innerText || ''));
      if (btn) { btn.click(); return true; }
      return false;
    });

    if (clicked) {
      success++;
      console.log(`OY ATILDI → ${success} | 1337 CANAVAR MODU AÇIK`);
    }
  } catch (e) { } finally { if (browser) await browser.close(); }
}

console.log('ZENROWS 1337 SUPERPROXY BAŞLADI → SAATTE 1500+ OY');
setInterval(() => { for (let i = 0; i < 45; i++) vote(); }, 13000);
