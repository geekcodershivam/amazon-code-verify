const puppeteer = require('puppeteer');
const Sign = require('./utils/getSignIn')
const OTPfile = require('./config/getOTP')
const Signout = require('./utils/getSignOut')
let page, data;
module.exports.getOTP = async function (email, password) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
            args: ["--incognito", "--start-maximized", "--disable-notifications"]
        });
        const pages = await browser.pages();
        page = pages[0];
        await Sign.getSignIN(page, email, password);
        data = await OTPfile.OTP(page);
        await Signout.getSignOut(page);
        if (data != undefined) {
            return data;
        } else {
            return `check your mail !`;
        }
    } catch (err) {
        console.log("login-error")
    }
}