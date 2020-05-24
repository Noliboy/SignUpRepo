var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome'),

path = require('chromedriver').path;
var driver = chrome.Driver.createSession(new chrome.Options(), new 
chrome.ServiceBuilder(path).build());
   
driver.get('https://brand.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);
driver.findElement(By.css('button')).click();
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[1]/div[2]/span')).getText().then(function(errorFirstName){                                                     
    assert.strictEqual(errorFirstName,"Include first name", "Incorrect error")
    console.log(errorFirstName)  //print the error message for First Name field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[2]/div[2]/span')).getText().then(function(errorLastName){
    assert.strictEqual(errorLastName,"Include last name", "Incorrect error")
    console.log(errorLastName)  //print the error message for Last Name field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[2]/div[2]/span')).getText().then(function(errorCompanyName){
    assert.strictEqual(errorCompanyName,"Include company name", "Incorrect error")
    console.log(errorCompanyName)  //print the error message for Company Name field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[3]/div[1]/div[2]/span')).getText().then(function(errorCompanySize){
    assert.strictEqual(errorCompanySize,"Include company size", "Incorrect error")
    console.log(errorCompanySize)  //print the error message for Company Size field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[3]/div[2]/div[2]/span')).getText().then(function(errorCompanyType){
    assert.strictEqual(errorCompanyType,"Include company type", "Incorrect error")
    console.log(errorCompanyType)  //print the error message for Company Type field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[5]/div[2]/span')).getText().then(function(errorWorkEmail){
    assert.strictEqual(errorWorkEmail,"Your email looks incomplete", "Incorrect error")
    console.log(errorWorkEmail)  //print the error message for Work Email field
});
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[6]/div[2]/span')).getText().then(function(errorPassword){
    assert.strictEqual(errorPassword,"Create a password", "Incorrect error")
    console.log(errorPassword)  //print the error message for Password field
});
driver.quit();


