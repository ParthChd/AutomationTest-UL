## System Requirements:

Check if brew is already installed on your machine(I have homebrew 4.0.3 on local).
`brew --version`

To install node via Homebrew.
`brew install node`

Check if brew is already installed on your machine(I have v19.4.0 on local).
`node --version`

To install cypress via npm.
`npm install cypress`

Check if cypress is already installed on your machine(I have cypress 12.10.0 on local).
`npx cypress --version`

`Any IDE such as VS,intellij etc.`

## Steps to run Script :
1. Open the repo , click on `code` button then clone HTTPS click on `copy link`.
2. On local  create a new folder and  use `git clone` command + the copied URL from github.
3. `npm i --force` - Install all the dependencies of the project. I tired in my other computer `npm i ` doesn't work.
4. Run `npm test` to execute the tests in Test Runner.
5. `npx cypress run` This command helps to execute all testcases in default Electron browser in headless mode.
6. Choose the E2E test and then the browser and next testcase you want to run.

## Architecture layers
**fixtures** : files for static data mass for the tests (csv, png, xlsx, txt).

**integration** : separate test files into API categories/modules for easy organization. Extension *.spec.js.

**plugins** : plugins that are used in the solution are inside the "plugins/index.js" file.

**support**: layer with custom Cypress commands.

**index.js** : file responsible for receiving imports from Cypress commands.

**node_modules** : files or directories that can be loaded by Node.js.

**cypress.json** : Cypress configuration file.

**package-lock.json** : automatically generated with package installs and updates.

**About Capatcha** 


##  Captcha verification
While submitting application this test gets blocked and asks for hcaptcha validation, reason seems like this test passed on bot detection and thereby only in case hcaptcha is solved test will be passed. I tried to learn on few methods to bypass hcaptcha as below :-

1. The easiest and best way for automation tests to bypass hcaptcha is to disable captcha on test environments 
2. In case of recaptcha there is a possiblity to pass the Site Key/ Secret Key which can be useful again for test environments and I didn't find much use case for this with hcaptcha.
3. **Puppeteer** - I tried puppeteer stealth mode and slow mo but in my case it didn't helped a lot as in cypress there are xhr headers being passed which puppeteer cannot delete/remove and I believe these cypress default headers can be one of the reasons of bot detection.
4. Last but not the least :) these are few of the paid services available https://geekflare.com/captcha-solving-services-api/ which can resolve hcaptcha at a price. Easy to embed out of these are 2captcha which is easy to integrate and use.
