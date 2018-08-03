const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')

const timeout=100000
let page;
let browser;
let shipmentUrl;
let paymentUrl;
let paymentConfirmUrl;
describe('Add to Cart', () => {
    it('should add to cart when buy a product', async ()=>{
      browser = await puppeteer.launch({
        headless:false,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      })

      page = await browser.newPage()

      await page.setViewport({
        width:1366, 
        height:768
      })
      await page.goto(`http://${baseUrl}/en/products`,{
          waitUntil: 'networkidle2'
      })
      await page.waitForSelector("a[title='image-product']")
      await page.click("a[title='image-product']")

      await page.waitForSelector("button[name='size-button']")
      await page.click("button[name='size-button']")

      await page.waitForSelector('#buy-now-button')
      await page.click('#buy-now-button')

      await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(3) > div > a > span > span')
      let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(3) > div > a > span > span'))
      console.log(totalCart)
      expect(Number(totalCart)).toBeGreaterThan(0)
      page.close()
    },100000)

},timeout)

describe('buy a product from cart as a guest', ()=> {
  it('should click continue to payment and and go to login page', async ()=>{
    page = await browser.newPage()

    await page.setViewport({
      width:1366, 
      height:768
    })

    await page.goto(`http://${baseUrl}/en/review`,{
      waitUntil:'networkidle2'
    })
    await page.waitForSelector('#continue-to-payment')
    await page.click('#continue-to-payment')
    
  },timeout)
  it('should go to shipping page address', async()=>{
    let guestButton = "button[title='Checkout as guest']"
    await page.waitForSelector(guestButton)
    let guest = await page.evaluate(el => el.getAttribute('title'), await page.$(guestButton))
    expect(guest).toMatch('Checkout as guest')
    await page.click(guestButton)

    await page.waitFor(2000)
    shipmentUrl = await page.url()
    console.log(shipmentUrl,'dalam')
    await page.close()
  },timeout)
},timeout)

describe('fill the form in shipment page', ()=>{
  it('should show message fill form name', async ()=>{
    page = await browser.newPage()
    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(shipmentUrl,{
      waitUntil:'networkidle2'
    })
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div:nth-child(1) > div:nth-child(1) > div > span'
    let errFillMsg = await page.evaluate(el=> el.innerHTML, await page.$(errFill))
    console.log(errFillMsg,'Please fill out name.')
    expect(errFillMsg).toMatch('Please fill out name.')
  },timeout)

  it('should show message fill form email', async ()=>{
    let inputName = "input[placeholder='Name:']"
    await page.waitForSelector(inputName)
    await page.click(inputName)
    await page.keyboard.type('test test test')
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div:nth-child(1) > div:nth-child(2) > div > span'
    let errFillMsg = await page.evaluate(el => el.innerHTML, await page.$(errFill))
    console.log(errFillMsg,'Please fill out email.')
    expect(errFillMsg).toMatch('Please fill out email.')
  },timeout)

  it('should show message fill form address', async ()=>{
    let inputEmail = "input[placeholder='Email']"
    await page.waitForSelector(inputEmail)
    await page.click(inputEmail)
    await page.keyboard.type('test@test.test')
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(7) > div > div > span'
    let errFillMsg = await page.evaluate(el => el.innerHTML, await page.$(errFill))
    console.log(errFillMsg,'Please fill out address.')
    expect(errFillMsg).toMatch('Please fill out address.')
  },timeout)

  it('should show message fill form province', async ()=>{
    await page.waitForSelector('#text-area-shipping')
    await page.click('#text-area-shipping')
    await page.keyboard.type('Jl. Jalan, test Gg test.RT ha RW ha No. test')
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(3) > div > div > span'
    let errFillMsg = await page.evaluate(el => el.innerHTML, await page.$(errFill))
    console.log(errFillMsg,'Please fill out province.')
    expect(errFillMsg).toMatch('Please fill out province.')
  },timeout)

  it('should show message fill form phone', async ()=>{
    await page.waitForSelector("label[for='province-shipping']")
    await page.click("label[for='province-shipping']")
    await page.click("label[for='province-shipping']")
    await page.waitFor(2000)
    await page.waitForSelector("label[for='city-shipping']")
    await page.click("label[for='city-shipping']")
    await page.click("label[for='city-shipping']")
    await page.waitFor(2000)
    await page.click("label[for='district-shipping']")
    await page.click("label[for='district-shipping']")
    await page.waitFor(2000)
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(1) > div > div > span'
    let errFillMsg = await page.evaluate(el => el.innerHTML, await page.$(errFill))
    console.log(errFillMsg,'Please fill out phone.')
    expect(errFillMsg).toMatch('Please fill out phone.')
  },timeout)

  it('should show form shipping', async ()=>{
    await page.waitFor(2000)
    await page.waitForSelector('#phone-shipping')
    await page.click('#phone-shipping')
    await page.keyboard.type('088088088088')
    let phoneNum = await page.$('#phone-shipping')
    let getPhoneNum = await page.evaluate(el=> el.getAttribute('value'),phoneNum)
    console.log(getPhoneNum)
    await page.waitFor(1000)
    await page.waitForSelector('#select-shipping')
    await page.waitFor(1000)
    await page.click('#select-shipping')
    await page.waitFor(1000)
    await page.click('#regular')
    await page.waitFor(1500)
    let formChooseShipping = await page.evaluate(el => el.value, await page.$('#select-shipping'))
    console.log(formChooseShipping,'Regular')
    expect(formChooseShipping).toMatch('Regular')
    await page.waitFor(2000)
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')

    await page.waitFor(3000)
    paymentUrl = await page.url()
    console.log(paymentUrl)
    await page.close()
  },timeout)
},timeout)

describe('checking payment method', ()=>{
  it('should have continue button when click gopay, and cimb clicks', async ()=>{
    page = await browser.newPage()

    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(paymentUrl,{
      waitUntil:'networkidle2'
    })
    
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
  },timeout)

  it('should pop up customer support contact', async()=>{
    await page.waitFor(2000)
    await page.waitForSelector("input[value='bank_transfer']")
    await page.click("input[value='bank_transfer']")
    await page.waitFor(1000)
    await page.click('#sfe-widget-toggle')
    let contactCustomerSupport = await page.evaluate(el=> el.innerHTML, await page.$('#sfe-widget-toggle'))
    console.log(contactCustomerSupport,'test')

    await page.waitFor(1000)
    await page.waitForSelector('#sfe-signup-name')
    await page.click('#sfe-signup-name')
    // await page.click('#sfe-offline-name')
    await page.keyboard.type('test test test')
  
    await page.waitForSelector('#sfe-widget__header-subtitle--container')
    let chatWithUs = await page.evaluate(el => el.innerHTML, await page.$('#sfe-widget__header-subtitle--container'))
    console.log(chatWithUs,'chat with us')
    expect(chatWithUs).toMatch('chat with us')
  
    await page.waitForSelector('#continue-payment')
    await page.click('#continue-payment')

    await page.waitForNavigation()
    await page.waitFor(2000)
    paymentConfirmUrl = await page.url()
    console.log(paymentConfirmUrl)
    await page.close()
  },timeout)
})

describe('check confirmation payment button without fill bank account', ()=> {
  it('', async ()=> {
    page = await browser.newPage()
  
    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(paymentConfirmUrl,{
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
    console.log('-------------- buy product done --------------')
    await browser.close()
  },timeout)
})