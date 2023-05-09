describe('test1', () => {
    
    //navigate https://the-internet.herokuapp.com/add_remove_elements/
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/add_remove_elements/') });
    
    //verify that title is displayed and has text "Add/Remove Elements"
    it('step1', async () => {
        const elem1 = await $('#content > h3')
        await elem1.waitForDisplayed()
        const elemText1 = await $('#content > h3').getText()
        const expectedText1 = ('Add/Remove Elements') 
        expect(elemText1).toEqual(expectedText1)
    });

    //verify that "Add Element" button is displayed
    it('step2', async () => {
        const elem2 = await $('#content > div > button')
        await elem2.waitForDisplayed()                       
    });

    //verify that "Add Element" button is enabled
    it('step3', async () => {
        let isEnabled = await $('#content > div > button').isEnabled()
        expect(isEnabled).toEqual(true) 
    });

    //verify that "Add Element" button has text "Add Element"
    it('step4', async () => {
        const elemText2 = await $('#content > div > button').getText()
        const expectedText2 = ('Add Element')
        expect(elemText2).toEqual(expectedText2)           
    });
});