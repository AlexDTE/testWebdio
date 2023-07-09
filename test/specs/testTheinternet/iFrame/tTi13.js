describe('test13', () => {
    
    //beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/frames') })

    it('upload step1', async () => {
        browser.url('https://the-internet.herokuapp.com/frames')
        await $('#content > div > ul > li:nth-child(2) > a').click()
        browser.pause(5000)
        const editBut = await $('#content div.tox-menubar > button:nth-child(2) > span')
        editBut.click()
        await $('div:nth-child(3) > div > div.tox-collection__item-label').click()
        browser.keys('\ue017')
        let input = await $('//*[@id="tinymce"]/pe')
        await input.addValue('я твоя понимать')
        browser.pause(5000)


        //const elem1 = await $('#content > div > h3').getText()
        //expect(elem1).toEqual('File Uploaded!') 
        //const elem2 = await $('#uploaded-files').getText()
        //expect(elem2).toEqual('uploadTest.txt')
        
    })

})