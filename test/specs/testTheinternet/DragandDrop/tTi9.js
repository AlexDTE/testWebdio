describe('test9', () => {
    
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/dropdown') })

    it('dropbox step1', async () => {
        const elem1 = await $('#content > div > h3')
        await elem1.waitForDisplayed()
        const elemText1 = await $('#content > div > h3').getText()
        const expectedText1 = ('Dropdown List')
        expect(elemText1).toEqual(expectedText1)
    })

    it('dropbox step2', async () => {
        const elem2 = await $('//*[@id="dropdown"]')
        elem2.click()
        const dropdownItem = $('#dropdown > option:nth-child(3)')
        dropdownItem.click()
        expect(await $('#dropdown > option:nth-child(3)').isSelected()).toEqual(true)
    })

    it('dropbox step3', async () => {
        const elem3 = await $('//*[@id="dropdown"]')
        elem3.click()
        const dropdownItem = $('#dropdown > option:nth-child(3)')
        dropdownItem.click()
        var elem4 = await browser.$('#dropdown > option:nth-child(3)').getProperty('selected')
        expect(elem4).toEqual(true)
    })

})