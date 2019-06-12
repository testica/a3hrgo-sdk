# a3HRgo SDK
[![npm version](https://badge.fury.io/js/a3hrgo-sdk.svg)](https://badge.fury.io/js/a3hrgo-sdk)

### Requisites
- Node >= 6
- NPM


### Install

```
npm install a3hrgo-sdk
```

### Usage

``` ts
import { A3hrgo } from 'a3hrgo-sdk';

const a3hrgo = new A3hrgo({
     id: "xxxx", password: "xxxx"
});

// Do a report
(async () => {
    await a3hrgo.report();
})();

```

### API

- `A3hrgo(credentials, options)` class constructor
    - credentials: object
        - id: string
        - password: string
    - options: object
        - showInterface: boolean to enable/disable headless chrome

- `report()` async method class to do a report
