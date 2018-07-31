const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')

const timeout = 30000
describe('User Sign In', ()=> { 
  let browser;
  let page;
  it('should redirect to www.facebook.com', async ()=>{
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ],
      
    });
 
    page = await browser.newPage();
    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(`https://www.hijup.com/id/sign_in`)
    await page.waitForSelector("div[class='shrink column sign-in-with-facebook'] button")
    await page.click("div[class='shrink column sign-in-with-facebook'] button")
    await page.waitForNavigation()
    let url = await page.url()
    await browser.close()
    expect(url).toMatch('https://facebook.com')
  },timeout)


},timeout)