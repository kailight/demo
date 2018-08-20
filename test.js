console.info('Hello world')



const main = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://example.com');

  await Promise.resolve('ok');
}



(async () => {
  console.log(await main());
})()
