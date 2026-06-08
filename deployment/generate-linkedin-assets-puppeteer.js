const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROOT = 'D:\\AI-APP\\inframind-website';

async function generateLinkedInAssets() {
  const browser = await puppeteer.launch({ headless: true });
  
  const bannerSvg = fs.readFileSync(path.join(ROOT, 'public/linkedin-banner-v2.svg'), 'utf8');
  const profileSvg = fs.readFileSync(path.join(ROOT, 'deployment/linkedin-assets/profile/linkedin-profile-picture.svg'), 'utf8');
  
  // Banner 1x (1584 x 396)
  const bannerPage = await browser.newPage();
  await bannerPage.setViewport({ width: 1584, height: 396 });
  await bannerPage.setContent(`<html><body style="margin:0;padding:0;">${bannerSvg}</body></html>`);
  await bannerPage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/banner/linkedin-banner-1x.png'), type: 'png' });
  console.log('Banner 1x generated');
  await bannerPage.close();
  
  // Banner 2x (3168 x 792) - retina
  const banner2xPage = await browser.newPage();
  await banner2xPage.setViewport({ width: 3168, height: 792 });
  await banner2xPage.setContent(`<html><body style="margin:0;padding:0;transform:scale(2);transform-origin:top left;">${bannerSvg}</body></html>`);
  await banner2xPage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/banner/linkedin-banner-2x.png'), type: 'png' });
  console.log('Banner 2x generated');
  await banner2xPage.close();
  
  // Banner web-optimized
  const bannerWebPage = await browser.newPage();
  await bannerWebPage.setViewport({ width: 1584, height: 396 });
  await bannerWebPage.setContent(`<html><body style="margin:0;padding:0;">${bannerSvg}</body></html>`);
  await bannerWebPage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/web/linkedin-banner-web.png'), type: 'png' });
  console.log('Banner web generated');
  await bannerWebPage.close();
  
  // Profile 1x (400 x 400)
  const profilePage = await browser.newPage();
  await profilePage.setViewport({ width: 400, height: 400 });
  await profilePage.setContent(`<html><body style="margin:0;padding:0;">${profileSvg}</body></html>`);
  await profilePage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/profile/linkedin-profile-1x.png'), type: 'png' });
  console.log('Profile 1x generated');
  await profilePage.close();
  
  // Profile 2x (800 x 800) - retina
  const profile2xPage = await browser.newPage();
  await profile2xPage.setViewport({ width: 800, height: 800 });
  await profile2xPage.setContent(`<html><body style="margin:0;padding:0;transform:scale(2);transform-origin:top left;">${profileSvg}</body></html>`);
  await profile2xPage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/profile/linkedin-profile-2x.png'), type: 'png' });
  console.log('Profile 2x generated');
  await profile2xPage.close();
  
  // Profile web-optimized
  const profileWebPage = await browser.newPage();
  await profileWebPage.setViewport({ width: 400, height: 400 });
  await profileWebPage.setContent(`<html><body style="margin:0;padding:0;">${profileSvg}</body></html>`);
  await profileWebPage.screenshot({ path: path.join(ROOT, 'deployment/linkedin-assets/web/linkedin-profile-web.png'), type: 'png' });
  console.log('Profile web generated');
  await profileWebPage.close();
  
  await browser.close();
  console.log('All LinkedIn assets generated successfully');
}

generateLinkedInAssets().catch(console.error);
