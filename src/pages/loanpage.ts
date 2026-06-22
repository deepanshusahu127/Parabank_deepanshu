import {Locator,Page }from "@playwright/test"
export class LoanPage{
   readonly page:Page
   readonly updateContactInfo:Locator
   readonly firstName: Locator;
   readonly lastName: Locator;
   readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
   readonly phoneNumber: Locator;
   readonly updateProfileBtn: Locator;
  readonly updateSuccessMsg: Locator;
  readonly requestloan:Locator
  readonly loanamount:Locator
  readonly loandownpayment:Locator
  readonly Applybutton:Locator
  readonly loansuccesmsg:Locator
  readonly loaninvalid:Locator
  constructor(page:Page){
    this.page=page
    this.updateContactInfo = page.locator("//a[contains(text(),'Update Contact Info')]");

this.firstName = page.locator("//input[@id='customer.firstName']");
this.lastName = page.locator("//input[@id='customer.lastName']");
this.address = page.locator("//input[@id='customer.address.street']");
this.city = page.locator("//input[@id='customer.address.city']");
this.state = page.locator("//input[@id='customer.address.state']");
this.zipCode = page.locator("//input[@id='customer.address.zipCode']");
this.phoneNumber = page.locator("//input[@id='customer.phoneNumber']");

this.updateProfileBtn = page.getByRole('button', { name: 'Update Profile' })

this.updateSuccessMsg = page.locator("//h1[text()='Profile Updated']")
//loan module
this.requestloan=page.locator("//a[text()='Request Loan']")
this.loanamount=page.locator("//input[@id='amount']")
this.loandownpayment=page.locator("//input[@id='downPayment']")
this.Applybutton=page.locator("//input[@value='Apply Now']")
this.loansuccesmsg=page.locator("//h1[text()='Loan Request Processed']")
this.loaninvalid=page.locator("//p[text()='We cannot grant a loan in that amount with your available funds.']")



   }
}