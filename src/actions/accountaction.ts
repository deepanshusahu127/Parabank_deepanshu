import { expect,Page } from "playwright/test";
import { Accountpage } from "../pages/accountpage";

export class AccountAction {
      

     private readonly accountpage: Accountpage;

    constructor(page:Page) {
        this.accountpage = new Accountpage(page);
    }

    async openAccount(){
    await this.accountpage.Account.click();
    await this.accountpage.chosseaccount.selectOption({ index: 1 })
    await this.accountpage.page.waitForTimeout(4000);
    await this.accountpage.chooseamount.selectOption({ index: 0 })
    await this.accountpage.page.waitForTimeout(4000);
    await this.accountpage.openaccount.click();
    await expect(this.accountpage.accountsucess).toBeVisible();
    const accountNumber = await this.accountpage.AccountNovalid.textContent();
    console.log(accountNumber)
    await this.accountpage.Accountoverview.click()
    await expect(
        this.accountpage.page.locator(`//a[text()='${accountNumber?.trim()}']`)
    ).toBeVisible();
    

    }
}