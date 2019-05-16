'use strict'

require('dotenv').config()
const puppeteer = require('puppeteer');

const login = require('./login');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // go to main page
    await page.goto('https://ecolex.a3hrgo.com');

    // do login
    await login(page, process.env.ID, process.env.PASSWORD);

    // go to report page
    await Promise.all([
        page.goto('https://ecolex.a3hrgo.com/Fichajes/CrearFichajes/0'),
        page.waitForNavigation({ waitUntil: 'load' })
    ])

    // a little stop
    await page.waitFor(1000)

    // do report
    await page.click('button#btnGuardar')
    console.log('Report OK')

    // other little stop
    await page.waitFor(3000)

    await browser.close();
})();
