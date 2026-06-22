import { Locator, Page } from '@playwright/test';
export class Accountpage{
    readonly page:Page
    readonly Account:Locator
    readonly openaccount:Locator
    readonly chosseaccount:Locator
    readonly chooseamount:Locator
    readonly accountsucess:Locator
    readonly  Accountoverview:Locator
    readonly AccountNovalid:Locator
     constructor(page: Page) {
        this.page = page;
        this.Account=page.locator("//a[text()='Open New Account']")
        this.chosseaccount=page.locator("//select[@id='type']")
        this.chooseamount=page.locator("//select[@id='fromAccountId']")
        this.openaccount=page.locator("[value='Open New Account']")
        this.accountsucess = page.locator("//p[text()='Congratulations, your account is now open.']");
       this.Accountoverview=page.locator("//a[text()='Accounts Overview']")
       this.AccountNovalid=page.locator("//a[@id='newAccountId']")


}
}
