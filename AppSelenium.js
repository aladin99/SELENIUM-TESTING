// Selenium testing
// Testing AntDesign input
// First start frontend i backend of Webus project
// Start project copy this and run in terminal ---- node ./AppSelenium.js

const {By, Builder, Browser} = require('selenium-webdriver');

async function selenium() {

    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:3000/login');

    let title = await driver.getTitle();
// Sacekaj 5sec
    await driver.sleep(5000) 
    let emailinput = await driver.findElement(By.css('#email'));
    
    await emailinput.sendKeys('Selenium testiranje'); 



}

selenium();
 