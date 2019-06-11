import Puppeteer from 'puppeteer';

import Login from './login';
import { Options, Credentials } from './types';

/**
 * Report
 * Resolve a report process doing a login
 * and then proper navigation until report
 */
export default async (credentials: Credentials, { showInterface }: Options): Promise<void> => {
    const headless = !showInterface;

    const browser = await Puppeteer.launch({ headless });
    const page = await browser.newPage();

    // go to main page
    await page.goto('https://ecolex.a3hrgo.com');

    // do login
    await Login(page, credentials);

    // go to report page
    await Promise.all([
        page.goto('https://ecolex.a3hrgo.com/Fichajes/CrearFichajes/0'),
        page.waitForNavigation({ waitUntil: 'load' })
    ]);

    // a little stop
    if (!headless) await page.waitFor(1000);

    // do report
    await page.click('button#btnGuardar');
    console.log('Report OK');

    // other little stop
    if (!headless) await page.waitFor(3000);

    await browser.close();
};