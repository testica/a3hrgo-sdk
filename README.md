# a3HRgo assistant

### Requisites
- Node >= 6
- NPM

### Install

    `npm install -g a3hrgo`

### Setup

In order to allow a3HRgo assistant to makes report, you need to supply your ID and PASSWORD

```
  a3hrgo-cli config save [user] [password]
```

Those values would be stored in your computer so next time you can just check, if you want to see the values

```
  a3hrgo-cli config print
```

### Usage

Stop! I want to report!

```
  a3hrgo-cli check
```
(Be careful, run this only when be necessary, so you can fuck up your report history)

If you want to check with other user and password different from the stored ones

```
  a3hrgo-cli check [--user=user] [--password=password]
```
In case you have doubts about the tool, you can always check the documentation

```
  a3hrgo-cli -h
```
