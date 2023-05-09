describe('test5', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });
    
    it('verify that page title is equal to "Checkboxes"', async () => {
        const elem1 = await $('.example > h3')
        await elem1.waitForDisplayed()
        expect(await $('.example > h3').getText()).toEqual('Checkboxes')
    });

    it('verify that number of checkboxes is 2', async () => {
        expect(await $$('#checkboxes > input[type=checkbox').length).toEqual(2)
    });

    it('verify that first checkbox is not checked', async () => {
        expect(await $('#checkboxes > input[type=checkbox]:nth-child(1)').isSelected()).toEqual(false)
    });

    it('verify that second checkbox is checked', async () => {
        expect(await $('#checkboxes > input[type=checkbox]:nth-child(3)').isSelected()).toEqual(true)
    });
    
})