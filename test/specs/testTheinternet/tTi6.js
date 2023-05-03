describe('test6', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });
    
    //click first checkbox
    //vetify that all checkboxes are checked
    it('step1', async () => {
        await $('#checkboxes > input[type=checkbox]:nth-child(1)').click()
        const elem2 = await $('#checkboxes > input[type=checkbox]:nth-child(1)').isSelected()
        expect(elem2).toEqual(true)
        const elem3 = await $('#checkboxes > input[type=checkbox]:nth-child(3)').isSelected()
        expect(elem3).toEqual(true)
    });

})