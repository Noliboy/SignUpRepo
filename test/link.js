var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome'),

path = require('chromedriver').path;
var driver = chrome.Driver.createSession(new chrome.Options(), new 
chrome.ServiceBuilder(path).build());
   
driver.get('https://uat.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/div/span[1]/a/span')).click();
driver.getCurrentUrl().then(function(signInUrl){                                                     
    assert.strictEqual(signInUrl,"https://uat.tribegroup.co/signIn", "Incorrect url")
    console.log('Passed: ' + signInUrl)            //print the sign in url
});

driver.get('https://uat.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/div/span[2]/a/span')).click();
driver.getCurrentUrl().then(function(tribeAppUrl){                                                     
    assert.strictEqual(tribeAppUrl,"https://offers.tribegroup.co/tribe-app", "Incorrect url")
    console.log('Passed: ' + tribeAppUrl)           //print the tribe app url
});

driver.get('https://uat.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[7]/div/div/label/span/span/span[1]/span/a[1]/span')).click();
driver.getCurrentUrl().then(function(tocUrl){                                                     
    assert.strictEqual(tocUrl,"https://www.tribegroup.co/toc", "Incorrect url")
    console.log('Passed: ' + tocUrl)                //print the terms and condition url
});

driver.get('https://uat.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[7]/div/div/label/span/span/span[1]/span/a[2]/span')).click();
driver.getCurrentUrl().then(function(privacyUrl){                                                     
    assert.strictEqual(privacyUrl,"https://www.tribegroup.co/privacy", "Incorrect url")
    console.log('Passed: ' + privacyUrl)            //print the privacy url
});

driver.quit();