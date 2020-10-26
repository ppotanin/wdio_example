const LoginPage = require('../pageobjects/login.page');
const MainMenu = require('../pageobjects/main.menu');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.setWindowSize(1920, 1080)
        LoginPage.open();
        LoginPage.login('', '');
        expect(browser).toHaveUrl('https://techportal.qa.benlink-services.com/en/dashboard');
        MainMenu.click_planer()
        MainMenu.click_businessEvents()
        MainMenu.click_statistic()
        // MainMenu.click_configurations_skills()
        MainMenu.click_dashboard()
        MainMenu.click_technicians()
        MainMenu.click_st_trainings()

    });
});


