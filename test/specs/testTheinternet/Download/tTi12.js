const fs = require('fs');
//const downloadDir = 'D:/WORK/testWebdriverio/test/specs/testTheinternet/Download/forFile';
describe('test12', () => {
    
    //browser.url('https://the-internet.herokuapp.com/download')

    it('download step1', async () => {
        browser.url('https://the-internet.herokuapp.com/download')
        await $('#content > div > a: nth - child(10)').click()
        browser.pause(5000)
        const downloadDir = 'D:/WORK/testWebdriverio/test/specs/testTheinternet/Download/forFile'
        const file = fs.readdirSync(downloadDir)
        expect(file.length).toBeGreaterThan(0);    
        
    })

})