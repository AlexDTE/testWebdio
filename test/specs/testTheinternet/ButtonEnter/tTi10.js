describe('test10', () => {
    //import { Key } from 'webdriverio'
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/key_presses') })

    it('dropbox step1', async () => {
        browser.keys('\uE007')
        //browser.pause(10000)
        const elemText = await $('#result').getText()
        expect(elemText).toEqual('You entered: ENTER')
    })

})