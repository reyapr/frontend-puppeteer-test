const puppeteer = require('puppeteer')
const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')

const timeout = 150000
let page;
let browser;

describe('testing user enironment in small screen', ()=>{
  it('should show side bar menu', async ()=> {
    browser = await puppeteer.launch({
      headless:true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    })
  
    page = await browser.newPage()
  
    await page.setViewport({
      width:376, 
      height:617
    })
    await page.goto(`http://${baseUrl}/en/`)
    await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
    await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
    
    await page.waitFor(1000)
    await page.waitForSelector("a[title='Sign In to your account']")
    let signIn = await page.evaluate(el => el.innerHTML, await page.$("a[title='Sign In to your account']"))
    console.log(signIn)
    expect(signIn).toMatch('Sign In')
    await page.click("a[title='Sign In to your account']")
  },timeout)

  it('should fill the email and password input', async ()=> {
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.type('automated_test@gmail.com');

    await page.waitFor(1000)
    let emailFilled = await page.evaluate(el => el.getAttribute('value'), await page.$("input[type='email']"))
    expect(emailFilled).toMatch('automated_test@gmail.com')

    await page.click("input[type='password']")
    await page.keyboard.type('hacktiv8');

    await page.waitFor(1000)
    let passFilled = await page.evaluate(el => el.getAttribute('value'), await page.$("input[type='password']"))
    expect(passFilled).toMatch('hacktiv8')
    await page.keyboard.press('Enter')
    console.log('fill the email pass')
  },timeout)

  it('should pop up sign in success', async ()=> {
    await page.waitForNavigation()
    await page.waitFor(1000)
    await page.waitForSelector("div[class='s-alert-wrapper']")
    let succesLoginAlert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-wrapper']"))
    console.log(succesLoginAlert,'Sign in success')
  },timeout)

  it('it should go to popular product', async () => {
    await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
    await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
    await page.waitFor(1000)
    await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(1) > div > nav > ul:nth-child(7) > li > a')
    await page.click('#app > div > div:nth-child(3) > div:nth-child(1) > div > nav > ul:nth-child(7) > li > a')
    await page.waitFor(1000)
    await page.waitForSelector("a[title='See our popular collections']")
    await page.click("a[title='See our popular collections']")

    //click the product
    await page.waitForSelector("a[title='image-product']")
    let urlProduct = await page.url()
    expect(urlProduct).toMatch('http://m.hijup.com:8000/en/products/most-popular')
    console.log('go to popular product')
  },timeout)

  it('should in detail product and  click size button', async () => {
    await page.click("a[title='image-product']")
    //click size
    await page.waitFor(1000)
    let sizeButton = "button[name='size-button']"
    await page.waitForSelector(sizeButton)
    await page.click(sizeButton)
    let size = await page.evaluate(el => el.innerHTML, await page.$(sizeButton))
    expect(size).toMatch('Left')

    await page.waitFor(1000)
    await page.waitForSelector('#buy-now-button')
    await page.click('#buy-now-button')
    console.log('in detail product')
  },timeout)

  it('should add to cart', async ()=> {
    await page.waitFor(1000)
    let popupTotalCart = '#app > div > div:nth-child(2) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span > span'
    await page.waitForSelector(popupTotalCart)
    let totalCart = await page.evaluate(el => el.innerHTML, await page.$(popupTotalCart))
    console.log(totalCart)
    expect(Number(totalCart)).toBeGreaterThan(0)
    await page.click("a[title='See your shopping bag']")

    await page.waitFor(2000)
    await page.waitForSelector("#continue-to-payment")
    await page.click("#continue-to-payment")
  },timeout)

  it('should fill the form in shipment page', async () => {
    //fill shipping address
    await page.waitForSelector('#text-area-shipping')
    await page.click('#text-area-shipping')
    await page.keyboard.type('Jl. Jalan, test Gg test.RT ha RW ha No. test')

    //test5phone
    await page.waitForSelector("label[for='province-shipping']")
    await page.click("label[for='province-shipping']")
    await page.waitFor(1000)
    await page.click("li[id='DKI Jakarta']")
    await page.waitFor(1000)
    await page.waitForSelector("label[for='city-shipping']")
    await page.click("label[for='city-shipping']")
    await page.click("label[for='city-shipping']")
    await page.waitFor(1000)
    await page.click("label[for='district-shipping']")
    await page.click("label[for='district-shipping']")
    await page.waitFor(1000)
    await page.waitForSelector('#phone-shipping')
    await page.click('#phone-shipping')
    await page.keyboard.type('088088088088')
    let phoneNum = await page.$('#phone-shipping')
    let getPhoneNum = await page.evaluate(el=> el.getAttribute('value'),phoneNum)
    expect(getPhoneNum).toMatch('088088088088')
    await page.waitFor(2000)
    await page.waitForSelector('#select-shipping')
    await page.click('#select-shipping')
    await page.waitFor(1000)
    await page.click("label[id='HIJUP Try and Pay - COD by Cash']")
    await page.waitFor(1500)
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    console.log('fill the address form')
  }, timeout)

  it('should go to thank you page ', async () => {
    await page.waitFor(3000)
    await page.waitForSelector("input[value='cod']")
    await page.click("input[value='cod']")
  
    await page.waitFor(2000)
    await page.waitForSelector('#continue-payment')
    await page.click('#continue-payment')
  
    await page.waitForNavigation()
    await page.waitFor(2000)
    let thankYouUrl = await page.url()
    console.log(thankYouUrl)
    expect(thankYouUrl).toMatch('thank_you')
    console.log('-------------- user_envi small done --------------')
    browser.close()
  },timeout)
},timeout)