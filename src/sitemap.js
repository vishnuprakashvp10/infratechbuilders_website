import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const routes = [
  '/',
  '/home',
  '/construction',
  '/commercial-interior-designs',
  '/overview-home-interiors',
  '/modular-kitchen',
  '/living-room-hall',
  '/false-ceiling',
  '/cupboard-Wardrobes',
  '/dining-room',
  '/toilet-bathroom',
  '/tv-show-case',
  '/study-room',
  '/pooja-room',
  '/bed-room',
  '/multi-turf-construction',
  '/painting-services',
  '/renovation-services',
  '/about-us',
  '/contact-us',
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://infratechbuilders.in/' }); // Change 'https://example.com' to your domain

  routes.forEach((route) => {
    stream.write({ url: route, changefreq: 'weekly', lastmod: new Date().toISOString() });
  });

  stream.end();

  const sitemap = await streamToPromise(stream);
  const filePath = './sitemap.xml'; // Path to save the sitemap file
  const writeStream = createWriteStream(filePath);

  writeStream.write(sitemap.toString());
  console.log('Sitemap generated successfully!');
};

generateSitemap();
