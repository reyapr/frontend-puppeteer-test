const { pagesTest } = require('./listUrlTitlePage')
const { Cluster } = require('puppeteer-cluster')
let timeout = 600000
let cluster;
 
let checkPage = async ({ page, data }) => {
    await page.goto(data.url);
    const title = await page.title()
    const url = await page.url()
    const status = response.status()
    console.log(title)
    // expect(title).toMatch(data.title)
    // expect(url).toMatch(data.url)
    // expect(status).toBe(200)
};
describe('options', () => {
  it('browse', async ()=>{
    cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_CONTEXT,
      puppeteerOptions: { args: ['--no-sandbox'] },
      maxConcurrency: 2,
      skipDuplicateUrls: true,
    });
  },timeout)

    let test1 = async ({ page, data }) => {
      it('hahaha', async (done)=>{
        await page.goto(data.url);
        // expect(data.url).toBe(TEST_URL);
        let title = await page.title()
        console.log(title)
        expect(title).toMatch('data.title')
      })
    };
    // expect(title).toMatch('data.title')  
    pagesTest.forEach(page => {
      it('', ()=>{
        cluster.queue(page, test1);

      })
    })

  it('done', async ()=>{
    await cluster.idle();
    await cluster.close();
  },timeout)
})
