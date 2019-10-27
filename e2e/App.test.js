import puppeteer from 'puppeteer';

describe('e2e test', () => {
  it('/ (Home Page)', async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');
  });
});