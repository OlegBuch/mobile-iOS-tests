import { remote } from 'webdriverio';
import { expect } from 'expect-webdriverio';
//import { MainPage } from '../../po/main-screen/main-page.po.js';

const capabilities = {
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:appPackage': './app/SwiftRadio.app'
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

const driver = await remote(wdOpts);


describe('Check mobile tests', ()=>{
    
    it('Check that text is present on the page', async()=>{
        await driver.$('//XCUIElementTypeStaticText[@name="Swift Radio"]').waitForDisplayed();
        await expect((await driver.$('//XCUIElementTypeStaticText[@name="Swift Radio"]'))).toBeDisplayed();
    }).timeout(10000);

    it('Check that button is present on the page and can be clicked', async()=>{
        await driver.$('~icon hamburger').waitForDisplayed();
        await driver.$('~icon hamburger').click();
        await driver.$('~btn close').click();            
        await expect((await driver.$('~icon hamburger'))).toBeDisplayed();
    }).timeout(10000);

    
    it('Check that an error is shown on the page', async()=>{
        await driver.$(`~btn nowPlaying`).click();
        await driver.$(`~logo`).click();
        await driver.$(`//XCUIElementTypeStaticText[@name="email me"]`).click();
        await expect(driver.$(`//XCUIElementTypeStaticText[@name="Could Not Send Email"]`)).toBeDisplayed();
    }).timeout(10000);
    
    
});    
