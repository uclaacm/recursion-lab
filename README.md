# Recursion Excursion

![Production Build](https://github.com/uclaacm/recursion-lab/workflows/Production%20Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4932fc43-c02a-4724-bfc0-0253ac602219/deploy-status)](https://recursion-excursion.netlify.app/)

What's this? This is a template repository that sets up a few minor systems for a React micro-app, which is something that we've done frequently at Teach LA. Here's what it does:

- has GitHub Actions automatically set up for testing and linting builds
- has a default Dependabot config for `yarn` (with monthly audits)
- has Netlify redirects set up for multi-route SPAs
- has Webpack that helps bundle JS/TS files for browser usage
- Husky for Git Hooks which enforces linting rules for files on commit
- ESLint for our .TS and .TSX files
- StyleLint with SASS guidelines for CSS, SASS, SCSS stylesheets.
- includes the [Contributor Covenant](https://www.contributor-covenant.org/) in `CODE_OF_CONDUCT.md`
- has a little bit of documentation for new people!
- Some extra stuff like changing the app logo to TeachLA's logo and setting up the `src` directory for further development!

## Overview

Recursion Excursion is a step-by-step, interactive format for teaching the concept of recursion. This web app is suitable for CS31 and CS32 students who want practice with recursion.

## Development Setup

We'll use a really common Node.js project workflow + Yarn!
First, let's clone our repository, and install all of our yarn dependencies:

```
git clone https://github.com/uclaacm/recursion-lab.git
cd recursion-lab
```

The instructions to install Node.js will be different based on which platform you're running. It's heavily advised to install your Node.js using NVM (Node Version Manager) because it's easy to manage a standardized version and update it as needed.

### macOS or Linux

Instructions for installing NVM on macOS and Linux (including WSL) are [here](https://github.com/nvm-sh/nvm#installing-and-updating).

At this point you can run `nvm install`. Assuming you've already `cd`ed into the correct directory as mentioned earlier, this will download the LTS (Long-Term Support) version of Node.js for you. Then, run `nvm use` to make sure you've switched to the right version; if it tells you `Now using Node v16.13.2` or something similar, you're good to go!

### Windows

If you're on Windows, you can use NVM for Windows, a separate version manager whose installation instructions can be found [here](https://github.com/coreybutler/nvm-windows#installation--upgrades). Once you've done that, you can run `nvm install 16.13.2` to install the LTS version of Node.js, and `nvm use 16.13.2` to switch to it.

If you don't have yarn installed...

```
npm install --global yarn
```

Then install our dependencies!

```
yarn install
yarn prepare
```

(If the above commands don't work even after installing yarn via npm, check this [npm installation guide](https://classic.yarnpkg.com/en/docs/install/#mac-stable), click on alternatives, choose your operating system, and follow the steps there!)

(We handle the yarn and npm conflict issues within our `.gitignore` we set up so dw about it!)
To start our app, you just need to run `yarn start`!

```
yarn start
```

And to build our project for production (with CRA and Webpack's bundling with all that goodness),

```
yarn run build
```

## Contribution Workflow

Thanks for your interest in contributing to Recursion Excursion! ❤️

Here's a quick guide on how to get started.

1. Make a new branch of this repository using `git checkout -b <your-branch-name>`. `main` is a protected branch, **so you cannot push to it**.
2. Follow the yarn instructions in "Development Setup" above.
3. Beep boop away!
4. **Before you push**, make sure you fix linting errors with `yarn lint-fix` and your app runs with `yarn start`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/recursion-lab/pulls) with your changes, and let someone on your project team know.
   a. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
7. If your code passes code review, then we can **squash and merge** it into `main`. Congratulations! If you'd like, it's now safe to delete your branch.

## Helpful Commands

By running `yarn lint-fix` we can use the linter that we set-up to format our code the way that passes our style checks! Before you commit your changes and submit a pull request, make sure to run

```
yarn lint-fix
```

## FAQs

### Some lint is unnecessary :( How do I disable it?

There are actually 2 main ways to disable lint. Disabling the "rule" entirely, or in just a single line or file!

#### Disabling the rule entirely.

\*\* **Make sure this is what you really want!! It is often likely that you want to disable for just a single file.** \*\*

Depending on whether it's from `stylelint` or `eslint`, you can go to `stylelintrc.json` and add to `"rules"

```
<rule-name>: null
```

or `eslintrc.json` and add

```
'<rule-name>': 'off',
```

#### Disabling a rule for a single line or file

Take a look at the eslint docs for this: https://eslint.org/docs/user-guide/configuring/rules#disabling-rules

Or the stylelint docs for this: https://stylelint.io/user-guide/ignore-code/

It's pretty simple though, it'd look something like

```
/* eslint-disable <rule-name> */
```

or

```
// eslint-disable-next-line
```

The process for `stylelint` is very similar.


### Assets are angry and won't accept <x filetype>

Our webpack set-up currently accepts asset files with the following extensions: `png, svg, jpg/jpeg, gif, mp3, ttf`

Code for it can be seen in line 22 `webpack.dev.js` and in `webpack.prod.js`

```
      {
        test: /\.(png|svg|jpe?g|gif|mp3|ttf)$/i, // we use regex to test different file types
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      },
```

If you want to add more assets like `.pdf`, `.wav`, `.mp4`, <YOUR_ASSET_TYPE> etc.

- [ ] Update `webpack.dev.js` file. Change `test: /\.(png|svg|jpe?g|gif|mp3)$/i` to `test: /\.(png|svg|jpe?g|gif|mp3|<YOUR_ASSET_TYPE>)$/i`
- [ ] Update `webpack.prod.js` file. Change `test: /\.(png|svg|jpe?g|gif|mp3)$/i,` to `test: /\.(png|svg|jpe?g|gif|mp3|<YOUR_ASSET_TYPE>)$/i`
- [ ] (If typing is needed) add a folder under `custom_typing` => `import-<YOUR_ASSET_TYPE>`
- [ ] (If typing is needed) create a file like `import-<YOUR_ASSET_TYPE>.d.ts`
- [ ] (If typing is needed) add in:

```
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.<YOUR_ASSET_TYPE>' {
  const value: <YOUR_ASSET_TYPE-TYPE>;
  export default value;
}
```

### How can I tell if my asset is actually being served?

Take a look at `https://recursion-excursion.netlify.app/asset-manifest.json`. [Like this!](https://teach-la-ts-react-starter.netlify.app/asset-manifest.json)

## Some More Helpful Tools

- Preloading Images - if rendering images gets annoying because it's slow: [Link Example here](https://github.com/uclaacm/Playnet/blob/c2414e7d1179eb11af6b4a49047ab3d8fb9aed66/src/components/shared/Preload.tsx)

## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!
