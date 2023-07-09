describe('test11', () => {
    
    beforeEach(async () => { await browser.url('https://the-internet.herokuapp.com/upload') })

    it('upload step1', async () => {
        const filePath = 'D:/WORK/testWebdriverio/test/specs/testTheinternet/Upload/uploadTest.txt'
        const remoteFilePath = await browser.uploadFile(filePath)
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()
        const elem1 = await $('#content > div > h3').getText()
        expect(elem1).toEqual('File Uploaded!') 
        const elem2 = await $('#uploaded-files').getText()
        expect(elem2).toEqual('uploadTest.txt')
        
    })

})