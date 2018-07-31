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
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ],
      
    });
 
    page = await browser.newPage();
    await page.setViewport({
      width:376, 
      height:617
    })
    await page.goto(`http://${baseUrl}/en/`)
    let sideBarButton = '#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button'
    await page.waitForSelector(sideBarButton)
    await page.click(sideBarButton)
    let textContain = await page.evaluate(el => el.innerHTML, await page.$("nav[class='main-nav vertical menu']"))
    console.log(textContain)
    
  },timeout)


},timeout)