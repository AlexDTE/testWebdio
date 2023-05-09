describe('test8', () => {
    
    //navigate to https://the-internet.herokuapp.com/checkboxes
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/checkboxes') });    

    it('verify checked 1', async () => {
        const checkBox = await browser.$('#checkboxes > input[type=checkbox]:nth-child(3)').getProperty('checked')
        expect(checkBox).toEqual(true)
    }); 
    
    it('verify checked 2', async () => {
        const myInput = await $('input[type=checkbox]:nth-child(3)')
        await expect(myInput).toHaveAttr('checked')
    });

    it('verify type', async () => {
        const elementType = await $("//input[@type='checkbox']").getTagName()
        expect(elementType).toEqual('input')
    });
})