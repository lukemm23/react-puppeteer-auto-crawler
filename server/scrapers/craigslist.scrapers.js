const puppeteer = require('puppeteer');

async function scrapers() {
  // console.log('This is a better version of setInterval');
  let sourceUrl = 'https://kansascity.craigslist.org/d/cars-trucks/search/cta';

  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  await page.goto(sourceUrl, { awaitUntil: 'networkidle2' });

  //   scraping craigslist
  let Data = await page.evaluate(() => {
    let price = document.querySelectorAll(
      'span.result-meta >span.result-price'
    );
    let title = document.querySelectorAll('a.result-title');
    let image = document.querySelectorAll('img');
    let sourceURL = document.querySelectorAll('a.result-image');

    let resultArray = [];
    for (let i = 0; i < 20; i++) {
      let priceItem = price[i];
      let titleItem = title[i];
      let imageItem = image[i];
      let sourceItem = sourceURL[i];
      let id = i + 1;

      resultArray.push({
        id,
        title: titleItem.innerText,
        price: priceItem.innerText,
        image: imageItem.src,
        sourceLink: sourceItem.href
      });
    }

    return resultArray;
  });

  // console.log(Data);
  return Data;
  await browser.close();
}

module.exports = scrapers;
