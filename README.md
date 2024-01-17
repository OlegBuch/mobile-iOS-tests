# Tests to run some mobile checks on iOS apps


1. We get the app - https://github.com/analogcode/Swift-Radio-Pro
2. Open it as project through Xcode and open iOS simulator with the app to know it
3. Make sure to have Appium installed so we can run appium inspector
4. After you download the repo just run npm install to install all modules and dependences for a project
5. Run appium through through CLI/terminal to bring up appium-inspector in the next step
6. Set desired capabilities for the app at appium-inspector to get selectors
7. Check selectors through Appium-inspector for the app
8. Run npm install @wdio/cli
9. then run npx wdio config command and set up wdio framework for webdriverio
10. Write the tests with the selectors from appium-selector
11. Start running the test through npx wdio wdio.conf.js --suite main
12. Reports can be found at ./file-results-json/results-iOS.json

6a:
We have webdriverio framework + Appium + app we run on iSO simulator 
The tests can be run through npx wdio wdio.conf.js --suite main
Once you download the repo - do not forget to build modules through npm install and run the tests
The app can be located and downloaded through - https://github.com/analogcode/Swift-Radio-Pro
All settings related to the project are located at wido.conf.js file

6b:
The first test case checks if text is present of the main page of the app - we used xpath selector for this and tobeDisplayed method inside wide
Next test checks that button is present on the page and it is clickable - we used accessibility id selectors for it
The last test checks the error on the page - we used accessibility id selectors and one xpath selectors for it

6c: 
webdriverio - v8, 
appium 2.x.x, 
appium-doctor, 
appium-inspector, 
mocha framework for webdriverio, 
spec reporters + json reporters 