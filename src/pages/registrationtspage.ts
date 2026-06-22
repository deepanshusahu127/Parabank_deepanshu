import { Locator, Page } from '@playwright/test';

export class RegistrationPage {

    readonly page: Page;
    readonly rLink:Locator
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phoneNumber: Locator;
    readonly ssn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerBtn: Locator;
    readonly succesmsg:Locator
    readonly Logout:Locator
    //
    readonly Username:Locator
    readonly Password:Locator
    readonly loginbtn:Locator
    readonly invalidmsg:Locator
    //
    readonly AccountService:Locator
    readonly UsernameValid:Locator

    constructor(page: Page) {
        this.page = page;
        this.rLink=page.locator("//a[text()='Register']")
        this.firstName = page.locator("//input[@id='customer.firstName']");
        this.lastName = page.locator("//input[@id='customer.lastName']")
       this.address = page.locator("//input[@id='customer.address.street']");
       this.city = page.locator("//input[@id='customer.address.city']");
      this.state = page.locator("//input[@id='customer.address.state']");
      this.zipCode = page.locator("//input[@id='customer.address.zipCode']");
       this.phoneNumber = page.locator("//input[@id='customer.phoneNumber']");
      this.ssn = page.locator("//input[@id='customer.ssn']");
       this.username = page.locator("(//input[@name='customer.username'])[1]");
      this.password = page.locator("(//input[@name='customer.password'])[1]");
       this.confirmPassword = page.locator("//input[@id='repeatedPassword']");
      this.registerBtn = page.locator("//input[@value='Register']");
        this.succesmsg=page.locator("//p[text()='Your account was created successfully. You are now logged in.']")
         this.Logout=page.locator("//a[text()='Log Out']")


         //logindetails
         this.Username=page.locator("//input[@name='username']")
         this.Password=page.locator("//input[@name='password']")
         this.loginbtn=page.locator("//input[@value='Log In']")
         this.AccountService=page.locator("//h2[text()='Account Services']")
         this.UsernameValid=page.locator("//b[text()='Welcome']/parent::p")
         this.invalidmsg=page.locator("//p[text()='The username and password could not be verified.']")

    }
}