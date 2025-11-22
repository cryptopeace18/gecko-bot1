const puppeteer = require('puppeteer');

const PROXIES = [
  'user-livi0zuaoi1b-sessid-all738ufe778cd55zj5-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all9cdaxl8pfgnje41g-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all7b570fmjn4egtrch-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allxlkehtpenogzem92-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allg120efipgpsjyvnw-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allggnn0nhxv7f7uk9g-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allpqfrdqdb83ingfn0-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all2dh1i11nv2mibo08-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-alld3jx6riasfwn69z1-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allxdwyqcsq7sbbe874-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allgc5zc2bvmqiba9z1-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allb1dv8p5txcy2qtxz-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allyd23uc0icy0vffgs-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-alla93mw98lvgasop23-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allcjywf1hacjus5teg-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allan9qrr5y5q68bs0f-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-alltf5ftj8kfabj6te8-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allnst7ide7xludh7c8-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allmb2dift7bg7ecmzv-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allu3wlihgk5xxpsdb9-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all5kp1qpgjekldc2d4-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all5fli4ruoirbjzwzy-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-all98ndskgbefohj19h-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allzcakzulqo5r3hcan-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233',
  'user-livi0zuaoi1b-sessid-allxe7oflzfm1e0w91e-sesstime-90:Qyu4Q0l4UxL4q@pr.lunaproxy.com:12233'
];

let success = 0;

async function vote() {
  const proxy = PROXIES[Math.floor(Math.random() * PROXIES.length)];
  const [auth, ip] = proxy.split('@');
  const [user, pass] = auth.split(':');

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-zygote',
      '--single-process',
      `--proxy-server=http://${ip}`
    ]
  });

  const page = await browser.newPage();
  await page.authenticate({ username: user, password: pass });

  try {
    await page.goto('https://www.geckoterminal.com/en', { timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.click('.aa-DetachedSearchButton, [data-testid="search-button"]')?.catch(() => {});
    await page.waitForTimeout(2000);
    await page.keyboard.type('0xcf640fdf9b3d9e45cbd69fda91d7e22579c14444');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(12000);

    const clicked = await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button, div[role="button"]'))
        .find(el => /good|bullish|👍|🚀/i.test(el.innerText));
      if (btn) btn.click();
      return !!btn;
    });

    if (clicked) {
      success++;
      console.log(`OY ATILDI → ${success} (7/24 çalışıyor!)`);
    }
  } catch (e) { }

  await browser.close();
}

setInterval(() => {
  for (let i = 0; i < 15; i++) vote();
}, 20000);

console.log('GECCO BOT BAŞLADI – Render Free’de 7/24 çalışıyor!');
