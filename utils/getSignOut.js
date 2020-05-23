module.exports.getSignOut=async function(page){
    try{
        await page.close();
    }
    catch(err){
        console.log(`please try again`);
    }
}