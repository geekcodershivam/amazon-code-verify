let otp;
module.exports.OTP = async function (page) {
    try {
        await page.waitForNavigation({
            waitUntil: 'networkidle2',
            wait: 3000
        })
        await page.waitForSelector('div[aria-label="Message list"] div._3Cyb5RCzk-gWPlpiAoHEXR div.laGnUXZu6QC88ONZDEBcE >div[role="listbox"] div.BVgxayg_IGpXi5g7S77GK > div[role="option"]', {
            visible: true
        })

        let mails = await page.$$('div[aria-label="Message list"] div._3Cyb5RCzk-gWPlpiAoHEXR div.laGnUXZu6QC88ONZDEBcE >div[role="listbox"] div.BVgxayg_IGpXi5g7S77GK > div[role="option"]')
        let item = await mails[0].$('._2miAFnGHXlWwulyUmLEbzZ div');
        await item.click({
            delay: 100
        });

        const names = await page.$eval('._1Cz6QWtbduTKlAyf910p0h', el => el.innerText)
        otp = names.split(" ")[18];
        return otp;
    } catch (err) {
        console.log('otp-error !');
    }
}