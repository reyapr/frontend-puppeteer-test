const puppeteer = require('puppeteer')
const nconf = require('nconf')
const { pagesTest } = require('./listUrlTitlePage')

let page;
let browser;
let response
describe('checking title page', async ()=>{
  it('open the browser', async ()=>{
    browser = await puppeteer.launch({
      headless:true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    })
  })
 pagesTest.forEach(pageTest => {
  it(`should pass the title page on ${pageTest.url}`,async ()=>{
    page = await browser.newPage()
    response = await page.goto(pageTest.url,{
      waitUntil:'networkidle2'
    })
    const title = await page.title()
    const url = await page.url()
    const status = response.status()
    await page.close()
    expect(title).toMatch(pageTest.title)
    expect(url).toMatch(pageTest.url)
    expect(status).toBe(200)
  },100000)
 })

 it('done', ()=>{
    console.log('-------------- title page done --------------')
   browser.close()
 })
})
