# Sluggy 🤺

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![NPM](https://img.shields.io/npm/l/@playpickup/sluggy)
![npm](https://img.shields.io/npm/v/@playpickup/sluggy)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@playpickup/sluggy)
![npm bundle size](https://img.shields.io/bundlephobia/min/@playpickup/sluggy)
[![Test & Build](https://github.com/PlayPickUp/sluggy/actions/workflows/test.yml/badge.svg)](https://github.com/PlayPickUp/sluggy/actions/workflows/test.yml)

A small but helpful JS package that removes common stop words and slugifies a string

## 💾 Installation

```sh
yarn add @playpickup/sluggy

# or with NPM

npm install --save @playpickup/sluggy
```

## 👩🏽‍💻 Usage

```js
import { makeSlug } from @playpickup/sluggy;

const string = "Will Clayton Kershaw win MVP again?";
const slug = makeSlug(string); // will-clayton-kershaw-win-mvp
```

---

Brought to you by the fine folks at [PickUp](https://playpickup.com) // Questions? Issues? Feel free to open a [ticket](https://github.com/PlayPickUp/sluggy/issues)
