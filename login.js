'use strict'

module.exports = async (page, id, password) => {
    await page.type('input#Login', id);
    await page.type('input#Password', password);

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