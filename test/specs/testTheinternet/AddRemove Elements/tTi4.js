describe('test4', () => {

    //navigate https://the-internet.herokuapp.com/add_remove_elements/
    //click "Add Element" button 3 times
    //verify that number of  "Delete" buttons is equal to 3
    it('step1', async () => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
        await $('#content > div > button').click()
        await $('#content > div > button').click()
        await $('#content > div > button').click()
        const buttons = await $$('#elements > button').length
        expect(buttons).toEqual(3)
    })
})
