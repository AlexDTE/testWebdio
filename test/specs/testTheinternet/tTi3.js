describe('test3', () => {

    //navigate https://the-internet.herokuapp.com/add_remove_elements/
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
    });

    //click "Add Element" button
    //click "Delete" button
    //verify that "Delete" button is not displayed
    it('step1', async () => {
        await $('#content > div > button').click()
        await $('#elements > button').click()
        await $('#elements > button').waitForDisplayed({ reverse: true })
    });

    //verify that "Add Element" button is displayed
    it('step2', async () => {
        const elem4 = await $('#content > div > button')
        await elem4.waitForDisplayed({ timeout: 3000 })
    });

    //verify that "Add Element" button is enabled
    it('step3', async () => {
        let isEnabled2 = await $('#content > div > button').isEnabled()
        expect(isEnabled2).toEqual(true)
    });

});