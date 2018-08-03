const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')

const timeout=100000

describe('Add to Whislist', () => {
    let page;
    let browser;
    it('should pop up login alert when click whislist', async ()=>{
      browser = await puppeteer.launch({
        headless:true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ],
      })

      page = await browser.newPage()
      
      await page.goto(`http://${baseUrl}/en/products`,{
        waitUntil: 'networkidle2'
      })
      console.log(await page.title(),'-----', baseUrl,'--------', await page.url())
      await page.waitFor(1000)
      await page.waitForSelector('#product-wishlist-button')
      await page.click('#product-wishlist-button')
      await page.waitFor(1000)
      await page.waitForSelector("div[class='s-alert-wrapper']")
      await page.waitFor(1000)
      let wishlistAlert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-wrapper']"))
      await browser.close()
      expect(wishlistAlert).toMatch('logged')
      console.log('-------------- product done --------------')
    }, timeout)

},timeout)