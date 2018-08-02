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
describe('User Sign In', ()=> { 
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

    await page.goto(`http://${baseUrl}/en/sign_in`,{
      waitUntil:'networkidle2'
    })
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.type('asdasdada')
    await page.click("input[type='password']")
    await page.keyboard.type('asdasdada')
    await page.keyboard.press('Enter')
    await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > p')
    let emailNotValid = await page.evaluate(el => el.innerHTML, await page.$('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > p'))
    expect(emailNotValid).toMatch('Email address is not valid.')
  },timeout)

  it('should show message incorrect email or password', async ()=> {
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control');
    await page.keyboard.type(email)
    await page.keyboard.press('Enter')
    await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(2) > p')
    let incorretPass = await page.evaluate(el => el.innerHTML, await page.$('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(2) > p'))
    expect(incorretPass).toMatch('Incorrect email or password')
    console.log('-------------- login done --------------')
    await browser.close()
  },timeout)

},timeout)