var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Keys = webdriver.Key,
    chrome = require('selenium-webdriver/chrome'),

path = require('chromedriver').path;
var driver = chrome.Driver.createSession(new chrome.Options(), new 
chrome.ServiceBuilder(path).build());
   
driver.get('https://brand.tribegroup.co/signUp');
driver.manage().window().maximize();
driver.wait(until.elementLocated(By.css('button')), 50000);

var signUpButton = driver.findElement(By.css('button'));
var firstNameField = driver.findElement(By.name('first_name'));
var lastNameField = driver.findElement(By.name('last_name'));
var companyNameField = driver.findElement(By.name('company_name'));
var workEmailField = driver.findElement(By.name('email'));
var passwordField = driver.findElement(By.name('password'));

firstNameField.sendKeys(Keys.SPACE);            //entering spaces in the First name field
firstNameField.sendKeys(Keys.SPACE);
signUpButton.click();    
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[1]/div[2]/span')).getText().then(function(errorFirstName){                                                     
    assert.strictEqual(errorFirstName,"Include first name", "Incorrect error")
    console.log(errorFirstName)                 //print the error message for First Name field
});

lastNameField.sendKeys(Keys.SPACE);             //entering spaces in the Last name field
lastNameField.sendKeys(Keys.SPACE);
signUpButton.click();    
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[1]/div[2]/div[2]/span')).getText().then(function(errorLastName){
    assert.strictEqual(errorLastName,"Include last name", "Incorrect error")
    console.log(errorLastName)  //print the error message for Last Name field
});

companyNameField.sendKeys(Keys.SPACE);          //entering spaces in the Company name field
companyNameField.sendKeys(Keys.SPACE);
signUpButton.click();    
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[2]/div[2]/span')).getText().then(function(errorCompanyName){
    assert.strictEqual(errorCompanyName,"Include company name", "Incorrect error")
    console.log(errorCompanyName)               //print the error message for Company Name field
});

workEmailField.sendKeys("!@#$%&^'");            //populating invalid email value in the Email field
signUpButton.click();
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[5]/div[2]/span')).getText().then(function(errorWorkEmail){
    assert.strictEqual(errorWorkEmail,"Your email looks incomplete", "Incorrect error")
    console.log(errorWorkEmail)                 //print the error message for Work Email field
});

passwordField.sendKeys(Keys.SPACE);             //entering spaces in the Company name field
passwordField.sendKeys(Keys.SPACE);
signUpButton.click(); 
driver.findElement(By.xpath('//*[@id="root"]/main/div[3]/div/div/form/div[6]/div[2]/span')).getText().then(function(errorPassword){
    assert.strictEqual(errorPassword,"Create a password", "Incorrect error")
    console.log(errorPassword)  //print the error message for Password field
});

driver.quit();

