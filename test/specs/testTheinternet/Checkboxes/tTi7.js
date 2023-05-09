describe('test7', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });
    
    

    it('verify that all checkboxes are not checked', async () => {
        await $('#checkboxes > input[type=checkbox]:nth-child(3)').click()
        const elem2 = await $('#checkboxes > input[type=checkbox]:nth-child(1)').isSelected()
        expect(elem2).toEqual(false)
        const elem3 = await $('#checkboxes > input[type=checkbox]:nth-child(3)').isSelected()
        expect(elem3).toEqual(false)
    });

})