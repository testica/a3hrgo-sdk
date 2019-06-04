import { Page } from 'puppeteer'
import { Credentials } from './types'

/**
 * Login
 * Resolve login process using credentials
 */
export default async (page: Page, credential: Credentials) => {
    await page.type('input#Login', credential.id);
    await page.type('input#Password', credential.password);

    const finalResponse = await Promise.all([
        page.waitForResponse(response =>  {
            return response.url() === 'https://ecolex.a3hrgo.com/Account/Login?ReturnUrl=%2F'
        }),
        await page.click('input.btnLogin')
    ]).then(([response, _]) => response)

    if (finalResponse.status() === 302) {
        console.log('Login OK');
    } else {
        console.log('Login ERROR');
        throw new Error('Login error, please check your credentials');
    }
}