const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://openwifi.netlify.app';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function checkLinks() {
  try {
    // Read sitemap
    const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const $ = cheerio.load(sitemap, { xmlMode: true });
    const urls = $('url > loc').map((i, el) => $(el).text()).get();

    console.log('Checking links...\n');

    const results = {
      working: [],
      broken: [],
      errors: []
    };

    for (const url of urls) {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          results.working.push(url);
          console.log(`✅ ${url}`);
        }
      } catch (error) {
        results.broken.push(url);
        console.log(`❌ ${url}`);
        console.log(`   Error: ${error.message}`);
      }
    }

    console.log('\nResults:');
    console.log(`Working links: ${results.working.length}`);
    console.log(`Broken links: ${results.broken.length}`);
    
    if (results.broken.length > 0) {
      console.log('\nBroken links:');
      results.broken.forEach(url => console.log(url));
    }

  } catch (error) {
    console.error('Error checking links:', error);
  }
}

checkLinks(); 