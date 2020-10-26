describe('benlink page', () => {
    it('should have the right title', () => {
        browser.url('https://techportal.qa.benlink-services.com/en/login')
        expect(browser).toHaveTitle('[qa] Technicians portal');
    })
})