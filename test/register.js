const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')
let email = nconf.get('EMAIL')

const timeout = 30000
describe('User Register', ()=> { 
  let browser;
  let page;
  it('should show show email is not valid', async ()=>{
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ],
      
    });
 
    page = await browser.newPage();

    await page.goto(`http://${baseUrl}/en/register`,{
      waitUntil:'networkidle2'
    })
    await page.waitForSelector("input[type='text']")
    await page.click("input[type='text']")
    await page.keyboard.type('testing')
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.type(email)
    await page.click("input[type='password']")
    await page.keyboard.type('hacktiv8')
    await page.click("label[data-shrink='false']")
    await page.keyboard.type('hacktiv8')
    await page.keyboard.press('Enter')
    await page.waitFor(2000)
    await page.waitForSelector("div[class='s-alert-wrapper']")
    let succesRegisterAlert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-wrapper']"))
    console.log(succesRegisterAlert,'registered')
    expect(succesRegisterAlert).toMatch('registered')
    await browser.close()
  },timeout)

},timeout)