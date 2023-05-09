describe('test2', () => {
    
    //navigate https://the-internet.herokuapp.com/add_remove_elements/
    //click "Add Element" button
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
        await $('#content > div > button').click()
    });
    
    //verify that "Delete" button is displayed
    it('step1', async () => {
        const elem3 = await $('#elements > button')
        await elem3.waitForDisplayed({ timeout: 3000 })
    });

    //verify that "Delete" button is enabled
    it('step2', async () => {
        let isEnabled = await $('#elements > button').isEnabled()
        expect(isEnabled).toEqual(true)
    });

    //verify that "Delete" button has text "Delete"
    it('step3', async () => {
        const elemText3 = await $('#elements > button').getText()
        const expectedText3 = ('Delete')
        expect(elemText3).toEqual(expectedText3)          
    });

});