#!/usr/bin/env node

'use strict'

require('dotenv').config()
const puppeteer = require('puppeteer');
const { kebabCase, defaults } = require('lodash');
const Preferences = require('preferences');
const { docopt } = require('docopt');
const { version } = require('../package');
const Check = require('./check.js');

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
    a3hrgo-cli check [--user=<user>] [--password=<password>]
    a3hrgo-cli config save <user> <password>
    a3hrgo-cli config print
    a3hrgo-cli -v

 Options:
    -v --version                    Show the version of the tool
`;

const login = require('./login');

const main = async (options) => {

    // Preferences store with default undefined values
    const prefs = new Preferences('com.work.a3hrgo.cli', {
        a3hrgo: {
            user: undefined,
            password: undefined
        }
    });

    // Load configurations giving preference to environment variables
    const preferences = defaults(
       {
            user: options.user,
            password: options.password
        },
        prefs.a3hrgo
    );

    if (options.version) {
        return console.info('v' + version);
    }

    if (options.check) {
        return Check(preferences);
    }

    if (options.config) {
        if (options.save) {
            prefs.a3hrgo = {
                user: options.user,
                password: options.password
            };
            return;
        }
        if (options.print) {
            return console.log(prefs);
        }
    }

    console.log('Unsupported commands combination');
};

const options = wrapOptions(docopt(help));
main(options)
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });