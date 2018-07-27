const puppeteer = require('puppeteer')
const nconf = require('nconf')
const { pagesTest } = require('./listUrlTitlePage')

let page;
let browser;
let response
let groupsPage = []


let groupsLength = Math.ceil(pagesTest.length/10)
let count = 0
// for(let i=0;i<groupsLength;i++){
//   let group = []
//   pagesTest.slice(count,count+10).forEach(() => {
//     group.push(pagesTest[count])
//     count+=1
//   })
//   groupsPage.push(group)
// }
// console.log(groupsLength)


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
  for(let i=0;i<groupsLength;i++){
    let group = []
  
    pagesTest.slice(count,count+10).forEach(() => {
      it(`should pass the title page on ${pagesTest[count].url}`,async ()=>{
          console.log(pagesTest[count])
          // group.push(
          //   browser.newPage().then(async page => {
          //     response = await page.goto(pagesTest[count].url,{
          //       waitUntil:'networkidle2'
          //     })
          //     const title = await page.title()
          //     const url = await page.url()  
          //     const status = await response.status()
          //     await page.close()
          //     expect(title).toMatch(pageTest.title)
          //     expect(url).toMatch(pageTest.url)
          //     expect(status).toBe(200)
          //   })
          // )
          count+=1
          // await Promise.all(group)
      })
    })
   
      // it(`should pass the title page on ${pagesTest[count].url}`,async ()=>{
      //   console.log(pagesTest[count])
      //   // group.push(
      //   //   browser.newPage().then(async page => {
      //   //     response = await page.goto(pagesTest[count].url,{
      //   //       waitUntil:'networkidle2'
      //   //     })
      //   //     const title = await page.title()
      //   //     const url = await page.url()  
      //   //     const status = await response.status()
      //   //     await page.close()
      //   //     expect(title).toMatch(pageTest.title)
      //   //     expect(url).toMatch(pageTest.url)
      //   //     expect(status).toBe(200)
      //   //   })
      //   // )
    
      //   await Promise.all(group)
    
      // },100000)
  }
//  pagesTest.forEach(pageTest => {

//   it(`should pass the title page on ${pageTest.url}`,async ()=>{
    
//     promises.push(
//       browser.newPage().then(async page => {
//         response = await page.goto(pageTest.url,{
//           waitUntil:'networkidle2'
//         })
//         const title = await page.title()
//         const url = await page.url()
//         const status = await response.status()
//         await page.close()
//         expect(title).toMatch(pageTest.title)
//         expect(url).toMatch(pageTest.url)
//         expect(status).toBe(200)
//       })
//     )

//     await Promise.all(promises)

//   },100000)
//  })

 it('done', ()=>{
    console.log('-------------- title page done --------------')
   browser.close()
 })
})
