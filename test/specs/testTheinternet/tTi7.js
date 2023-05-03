describe('test7', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });
    
    //click second checkbox
    //vetify that all checkboxes are not checked
    it('step1', async () => {
        await $('#checkboxes > input[type=checkbox]:nth-child(3)').click()
        //await browser.pause(10000)
        const elem2 = await $('#checkboxes > input[type=checkbox]:nth-child(1)').isSelected()
        await expect(elem2).toEqual(false)
        const elem3 = await $('#checkboxes > input[type=checkbox]:nth-child(3)').isSelected()
        await expect(elem3).toEqual(false)
    });

})