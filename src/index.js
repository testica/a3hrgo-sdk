#!/usr/bin/env node

'use strict'

require('dotenv').config()
const puppeteer = require('puppeteer');
const { kebabCase, defaults } = require('lodash');
const Preferences = require('preferences');
const { docopt } = require('docopt');
const { version } = require('../package');
const Check = require('./check.js');

const {
    A3HRGO_USER,
    A3HRGO_PASSWORD
} = process.env;

const wrapOptions = (opt) =>

    new Proxy(opt, {
        get(target, key) {

            return target[`<${key}>`] || target[`--${kebabCase(key)}`] || target[key] || target[kebabCase(key)];
        }
    });

const help = `
a3hrgo-cli

 Options can be read from a stored configuration or provided through environment variables.

 Usage:
    a3hrgo-cli check
    a3hrgo-cli config save
    a3hrgo-cli config print
    a3hrgo-cli -v

 Options:
    -v --version                    Show the version of the tool
    -e --environment <NAME=value>   Adds a new environment variable to the list of already existing environment variables
`;

const login = require('./login');

const main = async (options) => {

    // Preferences store with default undefined values
    const prefs = new Preferences('com.work.a3hrgo.cli', {
        user: undefined,
        pass: undefined
    });

     // Load configurations giving preference to environment variables
     const preferences = defaults(
        {
            user: A3HRGO_USER,
            pass: A3HRGO_PASSWORD
        },
        prefs
    );

    if (options.version) {
        return console.info('v' + version);
    }

    if (options.check) {
        // return Check(preferences);
        return console.info('check');
    }

    if (options.config){
        if (options.save){
            //prefs = preferences;
            return;
        }
        if (options.print){
            return console.log(prefs);
        }
    }

    console.log('Unsupported commands combination');
};

const options = wrapOptions(docopt(help));
main(options)
    .catch((err) => {
        console.error(err);
    });