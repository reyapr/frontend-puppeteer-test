const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'./.env'
})
let baseUrl = nconf.get('PUPPETEER_TEST').BASE_URL
const timeout = 100000
let page;
let browser;

describe('check confirmation payment button without fill bank account', ()=> {
  it('', async ()=> {
    browser = await puppeteer.launch({
      headless:false
    })
  
    page = await browser.newPage()
  
    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(`http://${baseUrl}/en/orders/summary/714972/3eaa4b783957f89d6cc2e2a2b728190c60798572`,{
      waitUntil:'networkidle2'
    })
  
    await page.waitForSelector('#confirmation-payment-button')
    await page.click('#confirmation-payment-button')
  
    let confirmOrdersSelector = '#app > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-typeItem-427 > div > div.Surface-root-516 > div > div > p'
    await page.waitForSelector(confirmOrdersSelector)
    let confirmOrders = await page.evaluate(el => el.innerHTML, await page.$(confirmOrdersSelector))
    console.log(confirmOrders)
    await page.waitFor(1000)
    await page.waitForSelector('#confirmation-payment-now')
    await page.click('#confirmation-payment-now')
  
    await page.waitFor(1000)
    await page.waitForSelector("div[class='s-alert-wrapper']")
    await page.waitForSelector("div[class='s-alert-box-inner']")
    let alert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-box-inner']"))
    console.log(alert,'Failed to confirm your order. Please ensure you have fill in bank account you transfered to')
    expect(alert).toMatch('Failed to confirm your order. Please ensure you have fill in bank account you transfered to')
  },timeout)
  it('should include CIMB, CIMB Syariah, Mandiri, and BCA when click list bank account',async ()=> {
    await page.waitFor(1000)
    await page.waitForSelector("label[for='bankReceived-confirmation']")
    await page.click("label[for='bankReceived-confirmation']")
  
    await page.waitForSelector("ul[role='listbox']")
    let listBank = await page.evaluate(el => el.innerHTML, await page.$("ul[role='listbox']"))
    expect(listBank.includes('CIMB')).toBe(true)
    expect(listBank.includes('CIMB Syariah')).toBe(true)
    expect(listBank.includes('Mandiri')).toBe(true)
    expect(listBank.includes('BCA')).toBe(true)
    await page.click("li[role='option']")
    await browser.close()
  },timeout)
})