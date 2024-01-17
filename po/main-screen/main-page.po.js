import Page from './base.po.js'
    
class MainPage extends Page {
    get mainHeaderText () {return $('//XCUIElementTypeStaticText[@name="Swift Radio"]')};
    get hamburgerMenu () {return $('~icon hamburger')};
    get closePopUpButton () {return $('~btn close')};
    get nowPlaytingButton () {return $('~btn nowPlaying')};
    get logoIcon () {return $('~logo')};
    get emailMenuItem () {return $('//XCUIElementTypeStaticText[@name="email me"]')};
    get counldNotSendEmailError () {return $(`//XCUIElementTypeStaticText[@name="Could Not Send Email"]`)};
}

export default new MainPage();