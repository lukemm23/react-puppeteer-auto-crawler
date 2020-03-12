// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const config = require('../');
// const cookies = require('./cookies.json');

// async function scrapers() {
//   //initiating the puppeteer library
//   let browser = await puppeteer.launch({ headless: false });
//   let page = await browser.newPage();

//   if (Object.keys(cookies).length) {
//     //set the saved cookies in the puppeteer browser page
//     await page.setCookie(...cookies);
//     //go to facebook
//     await page.goto(
//       'https://www.facebook.com/marketplace/kansascity/vehicles/?sort=BEST_MATCH',
//       { waitUntil: 'networkidle2' }
//     );

//     await page.waitForSelector('p._2tux');

//     // scraping facebook
//     const titles = await page.$$('p._2tux');
//     const prices = await page.$$('div._f3l');
//     const images = await page.$$('img._7ye');
//     const sources = await page.$$('a._1oem');

//     const resultArray = [];
//     for (let i = 0; i < (titles.length < 20 ? titles.length : 20); i++) {
//       let id = i + 1;
//       let title = titles[i];
//       let price = prices[i];
//       let image = images[i];
//       let source = sources[i];

//       let titleValue = await page.evaluate(title => title.innerText, title);
//       let priceValue = await page.evaluate(price => price.innerText, price);
//       let imageValue = await page.evaluate(image => image.src, image);
//       let sourceURL = await page.evaluate(source => source.href, source);

//       resultArray.push({
//         id,
//         title: titleValue,
//         price: priceValue,
//         image: imageValue,
//         sourceLink: sourceURL
//       });
//     }
//     // console.log(resultArray);
//     return resultArray;
//   } else {
//     //go to facebook
//     await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle0' });
//     //write in the username and password
//     await page.type('#email', config.username, { delay: 30 });
//     await page.type('#pass', config.password, { delay: 30 });
//     //click the login button
//     await page.click('#loginbutton');
//     //wait for navigation to finish
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//     await page.waitFor(15000);

//     //go to marketplace vehicles
//     await page.goto(
//       'https://www.facebook.com/marketplace/kansascity/vehicles/?sort=BEST_MATCH',

//       { waitUntil: 'networkidle2' }
//     );

//     await page.waitForSelector('p._2tux');

//     // scraping facebook setting variables to scrapped items by its element classes
//     const titles = await page.$$('p._2tux');
//     const prices = await page.$$('div._f3l');
//     const images = await page.$$('img');
//     const sources = await page.$$('a._1oem');

//     const resultArray = [];
//     for (let i = 0; i < (titles.length < 20 ? titles.length : 20); i++) {
//       let id = i + 1;
//       let title = titles[i];
//       let price = prices[i];
//       let image = images[i];
//       let source = sources[i];

//       let titleValue = await page.evaluate(title => title.innerText, title);
//       let priceValue = await page.evaluate(price => price.innerText, price);
//       let imageValue = await page.evaluate(image => image.src, image);
//       let sourceURL = await page.evaluate(source => source.href, source);

//       resultArray.push({
//         id,
//         title: titleValue,
//         price: priceValue,
//         image: imageValue,
//         sourceLink: sourceURL
//       });
//     }

//     // return resultArray;

//     try {
//       await page.waitFor('[data-click="profile_icon"]');
//     } catch (error) {
//       console.log('failed to login');
//       process.exit(0);
//     }

//     //get current browser page session
//     let currentCookies = await page.cookies();
//     //holding cookie sessions in cookie.json file
//     fs.writeFileSync('./cookies.json', JSON.stringify(currentCookies));

//     // debugger;
//     // console.log(resultArray);
//     return resultArray;
//   }
// }

// // scrapers();

// module.exports = scrapers;
