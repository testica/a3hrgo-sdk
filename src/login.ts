import { Page, Response } from 'puppeteer';

import { Credentials } from './types';

/**
 * Login
 * Resolve login process using credentials
 */
export default async (page: Page, credentials: Credentials): Promise<void> => {
    await page.type('input#Login', credentials.id);
    await page.type('input#Password', credentials.password);

    const finalResponse = await Promise.all([
        page.waitForResponse((response): boolean => {
            return response.url() === 'https://ecolex.a3hrgo.com/Account/Login?ReturnUrl=%2F';
        }),
        await page.click('input.btnLogin')
    ]).then( ([response]): Response => response);

    if (finalResponse.status() === 302) {
        console.log('Login OK');
    } else {
        console.log('Login ERROR');
        throw new Error('Login error, please check your credentials');
    }
};