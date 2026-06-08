const sharp = require('sharp');
const path = require('path');

const ROOT = 'D:\\AI-APP\\inframind-website';

async function generateLinkedInAssets() {
  const bannerSvg = path.join(ROOT, 'public/linkedin-banner-v2.svg');
  const profileSvg = path.join(ROOT, 'deployment/linkedin-assets/profile/linkedin-profile-picture.svg');
  
  const bannerDir = path.join(ROOT, 'deployment/linkedin-assets/banner');
  const profileDir = path.join(ROOT, 'deployment/linkedin-assets/profile');
  const webDir = path.join(ROOT, 'deployment/linkedin-assets/web');
  
  // Banner 1x (1584 x 396)
  await sharp(bannerSvg)
    .resize(1584, 396)
    .png()
    .toFile(path.join(bannerDir, 'linkedin-banner-1x.png'));
  console.log('Banner 1x generated');
  
  // Banner 2x (3168 x 792) - retina
  await sharp(bannerSvg)
    .resize(3168, 792)
    .png()
    .toFile(path.join(bannerDir, 'linkedin-banner-2x.png'));
  console.log('Banner 2x generated');
  
  // Banner web-optimized
  await sharp(bannerSvg)
    .resize(1584, 396)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(webDir, 'linkedin-banner-web.png'));
  console.log('Banner web generated');
  
  // Profile 1x (400 x 400)
  await sharp(profileSvg)
    .resize(400, 400)
    .png()
    .toFile(path.join(profileDir, 'linkedin-profile-1x.png'));
  console.log('Profile 1x generated');
  
  // Profile 2x (800 x 800) - retina
  await sharp(profileSvg)
    .resize(800, 800)
    .png()
    .toFile(path.join(profileDir, 'linkedin-profile-2x.png'));
  console.log('Profile 2x generated');
  
  // Profile web-optimized
  await sharp(profileSvg)
    .resize(400, 400)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(webDir, 'linkedin-profile-web.png'));
  console.log('Profile web generated');
  
  console.log('All assets generated successfully');
}

generateLinkedInAssets().catch(console.error);
