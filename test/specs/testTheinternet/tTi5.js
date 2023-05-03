describe('test5', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });
    
    //verify that page title is equal to "Checkboxes"
    it('step1', async () => {
        const elem1 = await $('.example > h3')
        await elem1.waitForDisplayed()
        const elemText1 = await $('.example > h3').getText()
        const expectedText1 = ('Checkboxes')
        expect(elemText1).toEqual(expectedText1)
    });

    //verify that number of checkboxes is 2
    it('step2', async () => {
        const chekbox = await $$('#checkboxes > input[type=checkbox').length
        expect(chekbox).toEqual(2)
    });

    //verify that first checkbox title is "checkbox 1"
    
    //verify that second checkbox title is "checkbox 2"

    //verify that first checkbox is not checked
    it('step5', async () => {
        const elem2 = await $('#checkboxes > input[type=checkbox]:nth-child(1)').isSelected()
        expect(elem2).toEqual(false)
    });

    //verify that second checkbox is checked
    it('step6', async () => {
        const elem2 = await $('#checkboxes > input[type=checkbox]:nth-child(3)').isSelected()
        expect(elem2).toEqual(true)
    });
    
})