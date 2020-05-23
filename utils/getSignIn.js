module.exports.getSignIN=async function(page,email,password) {
    try {
        await page.goto('https://outlook.live.com/owa/',{
            waitUntil: "networkidle0"
        });
        await page.evaluate(() => {
            document.querySelectorAll('.auxiliary-actions ul li a')[1].click()
        })
        //type="email"
        await page.waitForSelector('input[type="email"]', {
            visible: true
        })
        await page.type('input[type="email"]', email, {
            delay: 120
        })
        //document.querySelector('input[type="submit"]').click()
        await page.evaluate(() => {
            document.querySelector('input[type="submit"]').click()
        })
        //type="password"
        await page.waitForSelector('input[type="password"]', {
            visible: true
        })
        await page.type('input[type="password"]', password, {
            delay: 120
        })
        await page.evaluate(() => {
            document.querySelector('input[name="KMSI"]').click()
        })
        await Promise.all([page.waitForNavigation({
                waitUntil: "networkidle0",
            }),
            page.click('.btn.btn-block.btn-primary')
        ])
        await page.waitForSelector('input[type="password"]', {
            visible: true
        })
        await page.type('input[type="password"]', password, {
            delay: 120
        })
        await page.evaluate(() => {
            document.querySelector('input[name="KMSI"]').click()
        })
        await Promise.all([page.waitForNavigation({
                waitUntil: "networkidle0",
            }),
            page.click('.btn.btn-block.btn-primary')
        ])
        
    } catch (err) {
        console.log('LOGIN---IN_Complete');
    }

}