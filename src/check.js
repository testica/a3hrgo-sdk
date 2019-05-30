'use strict';

const puppeteer = require('puppeteer');
const Login = require('./login');

module.exports = async ({user, password}) => {

    const headless = process.env.INTERFACE !== "true"
    
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
    
    // go to main page
    await page.goto('https://ecolex.a3hrgo.com');
    
    // do login
    await Login(page, user, password);
    
    // go to report page
    await Promise.all([
        page.goto('https://ecolex.a3hrgo.com/Fichajes/CrearFichajes/0'),
        page.waitForNavigation({ waitUntil: 'load' })
    ])
    
    // a little stop
    if (!headless) await page.waitFor(1000)
    
    // do report
    await page.click('button#btnGuardar')
    console.log('Report OK')
    
    // other little stop
    if (!headless) await page.waitFor(3000)
    
    return await browser.close();
};
