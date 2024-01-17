import { expect } from 'expect-webdriverio';
import MainPage  from '../../po/main-screen/main-page.po.js';


describe('Check mobile tests', ()=>{
    it('Check that text is present on the page', async()=>{
        await MainPage.mainHeaderText.waitForExist();
        await expect(await MainPage.mainHeaderText).toHaveText('Swift Radio');
    });
    
    it('Check that button is present on the page and can be clicked', async()=>{
        await (MainPage.hamburgerMenu).waitForExist();
        await (MainPage.hamburgerMenu).click();
        await (MainPage.closePopUpButton).click();            
        await expect(await (MainPage.hamburgerMenu)).toExist();
    });
    
    it('Check that an error is shown on the page', async()=>{
        await (MainPage.nowPlaytingButton).waitForExist();
        await (MainPage.nowPlaytingButton).click();
        await (MainPage.logoIcon).click();
        await (MainPage.emailMenuItem).click();
        await expect(MainPage.counldNotSendEmailError).toHaveText('Could Not Send Email');
    });
});    
