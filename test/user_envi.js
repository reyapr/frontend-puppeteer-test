const puppeter = require('puppeteer')
const nconf = require('nconf')
const timeout = 150000
nconf.argv()
.env()
.file({
  file:'.env'
})
let baseUrl = nconf.get('BASE_URL')

describe('User Environment', () => {
  let page;
  let browser;
  it('should go to login', async()=>{
    browser = await puppeter.launch({
      headless:true,
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
    await page.goto(`http://${baseUrl}`,{
        waitUntil:'networkidle2'
    })

    let url = await page.url()
    console.log(url)
    await page.waitForSelector("a[title='Sign In to your account']")
    await page.click("a[title='Sign In to your account']")
    console.log('check is sign in')
  },timeout)
  it('should fill the form login', async()=>{
    let signInUrl = await page.url()
    console.log(signInUrl)
    expect(signInUrl).toBe('http://m.hijup.com:8000/en/sign_in')
    if(signInUrl=='http://m.hijup.com:8000/en/sign_in'){

      await page.waitForSelector("input[type='email']")
      await page.click("input[type='email']")
      await page.keyboard.type('automated_test1@gmail.com');
      
      await page.click("input[type='password']")
      await page.keyboard.type('hacktiv8');
      await page.keyboard.press('Enter')

      await page.waitForSelector("a[title='See your wishlist']")
      await page.click("a[title='See your wishlist']")

      await page.waitForSelector('#shopping-now-button')
      await page.click('#shopping-now-button')
      
    }
  },timeout)

  it('should in products page',async ()=>{
    let productUrl = await page.url()
    expect(productUrl).toBe('http://m.hijup.com:8000/en/products')
    //click first Product
    await page.waitForSelector("a[title='image-product']")
    await page.click("a[title='image-product']")
    
    //in detail Product Page
    await page.waitForSelector('#buy-now-button')
    await page.waitForSelector("button[name='size-button']")
    await page.click("button[name='size-button']")
    await page.click('#buy-now-button')

    await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span')
    let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span'))
    expect(Number(totalCart)).toBeGreaterThan(0)
      
    //Go to cart page
    await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a')
    await page.click('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a')
    console.log(productUrl)
  },timeout)
  
  it('in Cart Page go to Payment Page', async ()=>{
    let cartPage = await page.url()
    expect(cartPage).toBe('http://m.hijup.com:8000/en/review')

    //Go to payment page
    await setTimeout(async function(){
      await page.click('#continue-to-payment')
    },5000)
  },timeout)

  it('should fill the form on shipping adress and continue to payment', async ()=>{
    await page.waitForSelector('#text-area-shipping')
    await page.click('#text-area-shipping')
    await page.keyboard.type('Jl. Jalan, Haha Gg Haha.RT ha RW ha No. haha')

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
    await page.waitForSelector('#phone-shipping')
    await page.click('#phone-shipping')
    await page.keyboard.type('088088088088')
    let phoneNum = await page.$('#phone-shipping')
    let getPhoneNum = await page.evaluate(el=> el.getAttribute('value'),phoneNum)
    expect(getPhoneNum).toMatch('088088088088')
    await page.waitFor(1000)
    await page.waitForSelector('#select-shipping')
    await page.waitFor(1000)
    await page.click('#select-shipping')
    await page.waitFor(1000)
    await page.click('#regular')
    await page.waitFor(1500)
    await page.waitForSelector('#continue-to-payment-shipping')
    await page.click('#continue-to-payment-shipping')
    console.log('fill the address form')
  },timeout)

  it('should choose BCA transfer for payment, and save to order history', async ()=>{
    await page.waitForNavigation()
    await page.waitFor(3000)
    await page.waitForSelector("input[value='bank_transfer']")
    await page.click("input[value='bank_transfer']")
    await page.waitFor(1000)
    await page.waitForSelector('#continue-payment')
    await page.click('#continue-payment')
    await page.waitForNavigation()
    await page.waitForSelector('#confirmation-payment-button')
    await page.click('#confirmation-payment-button')
    await page.waitForSelector("label[for='bankReceived-confirmation']")
    await page.click("label[for='bankReceived-confirmation']")
    await page.waitForSelector("#bca")
    await page.click("#bca")
    await page.waitFor(3000)
    await page.click('#confirmation-payment-now')
    await page.waitForNavigation()
    await page.waitFor(2000)
    let orderHistory = await page.url()
    expect(orderHistory).toMatch('http://m.hijup.com:8000/en/orders')
    console.log('-------------- user_envi done --------------')
    await browser.close()
  },timeout)
},300000)