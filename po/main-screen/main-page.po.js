import Page from './base.po.js'
import { remote } from 'webdriverio';


/* const createDriver = () => {
    const capabilities = {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 14 Pro',
      'appium:appPackage': '/Users/olegbuchnev/Library/Developer/Xcode/DerivedData/YouTube-erervxmenhqfpafyfbcokjkrknuk/Build/Products/Debug-iphonesimulator/YouTube.app'
    };
  
    const wdOpts = {
      hostname: process.env.APPIUM_HOST || 'localhost',
      port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
      logLevel: 'info',
      capabilities,
    };
    
    
    return remote(wdOpts);
  }; */

    
class MainPage extends Page {
    //get mainHeaderText () {return $('//XCUIElementTypeStaticText[@name=\"Swift Radio\"]')}
    //get mainHeaderText () {return driver.$('//XCUIElementTypeStaticText[@name=\"Swift Radio\"]')}

    async open () {
        await super.open('login')
    }

    async submit () {
        await this.submitBtn.click()
    }

}

export {MainPage}