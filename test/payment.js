const puppeteer = require('puppeteer')
const timeout = 100000
let page;
let browser;

describe('checking payment method', ()=>{
  it('should pop up customer support contact', async()=>{
    browser = await puppeteer.launch({
      headless:false
    })

    page = await browser.newPage()

    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto('http://m.hijup.com:8000/en/orders/show/714972/3eaa4b783957f89d6cc2e2a2b728190c60798572',{
      waitUntil:'networkidle2'
    })
  
    await page.click('#contact-customer-support')
    let contactCustomerSupport = await page.evaluate(el=> el.innerHTML, await page.$('#contact-customer-support'))
    console.log(contactCustomerSupport,'haha')

    await page.waitFor(1000)
    await page.waitForSelector('#sfe-signup-name')
    await page.click('#sfe-signup-name')
    await page.keyboard.type('haha test haha')
  
    await page.waitForSelector('#sfe-widget__header-subtitle--container')
    let chatWithUs = await page.evaluate(el => el.innerHTML, await page.$('#sfe-widget__header-subtitle--container'))
    console.log(chatWithUs,'chat with us')
    expect(chatWithUs).toMatch('chat with us')
  },timeout)

  it('should have continue button when click gopay, and cimb clicks', async ()=>{
    await page.waitFor(2000)
    await page.waitForSelector("input[value='gopay']")
    await page.click("input[value='gopay']")
    await page.waitForSelector('#continue-payment')
    let payment = await page.evaluate(el=>el.innerHTML, await page.$('#continue-payment'))
    console.log(payment,'<!-- react-text: 583 -->Continue<!-- /react-text -->')
    expect(payment).toMatch('Continue')
  
    await page.waitForSelector("input[value='cimb_clicks']")
    await page.click("input[value='cimb_clicks']")
    await page.waitForSelector('#continue-payment')
    let payment1 = await page.evaluate(el=>el.innerHTML, await page.$('#continue-payment'))
    console.log(payment1,'<!-- react-text: 583 -->Continue<!-- /react-text -->')
    expect(payment).toMatch('Continue')
    // await browser.close()
  },timeout)
})
