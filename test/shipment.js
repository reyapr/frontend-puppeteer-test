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
describe('fill the form in shipment page', ()=>{
  it('should show message fill form name', async ()=>{
    browser = await puppeteer.launch({
      headless:false
    })
   
    page = await browser.newPage()
    await page.setViewport({
      width:1366, 
      height:768
    })
    await page.goto(`http://${baseUrl}/en/shipping/93075119/942c77b0cb4e638ca0da39ce0bfc61bd0c7db4bc`,{
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
    await page.keyboard.type('haha test haha')
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
    await page.keyboard.type('haha@haha.haha')
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
    await page.keyboard.type('Jl. Jalan, Haha Gg Haha.RT ha RW ha No. haha')
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
    await page.click('#radio-shipping')
    await page.waitFor(1500)
    let formChooseShipping = await page.evaluate(el => el.value, await page.$('#select-shipping'))
    console.log(formChooseShipping,'Regular')
    expect(formChooseShipping).toMatch('Regular')
    await page.waitFor(2000)
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    // await browser.close()
  },timeout)
},timeout)