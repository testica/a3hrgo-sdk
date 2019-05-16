# a3HRgo assistant

### Requisites
- Node >= 6
- NPM


### Install

- Clone repository
    
    `git clone https://github.com/testica/a3hrgo-assistant`

- Inside project install dependencies

    `npm install`

### Setup

In order to allow a3HRgo assistant to makes report, you need to supply your ID and PASSWORD under environment variable into `.env` file

``` bash
# inside root project
touch .env

echo "ID=<YOUR_A3HRGO_ID>" >> .env
echo "PASSWORD=<YOUR_A3HRGO_PASSWORD>" >> .env

```

a3HRgo assistant under the hood use [puppeteer](https://github.com/GoogleChrome/puppeteer), so you can disable the headless mode using `INTERFACE` variable an set to true

``` bash
# INTERFACE = true shows the browser interaction
echo "INTERFACE=true" >> .env
```

### Usage

Stop! I want to report!

To run the script you only have to do:

`npm start`

(Be careful, run this only when be necessary, so you can fuck up your report history)
