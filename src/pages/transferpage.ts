import{ Locator,Page} from "@playwright/test"
export class FundTransfer{
   readonly page: Page;
   readonly  TransferFundlink:Locator
   readonly amount:Locator
   readonly account1:Locator
   readonly acccount2:Locator
   readonly Transfer:Locator
   readonly Transfercomplete:Locator
   readonly accoundoverview:Locator
   readonly accountno:Locator
   readonly tranfermsg:Locator
   readonly validBalanc:Locator

      constructor(page: Page) {
        this.page=page;
        this.TransferFundlink=page.locator("//a[contains(text(),'Transfer Funds')]")
        this.amount=page.locator("//input[@id='amount']")
        this.account1=page.locator("//select[@id='fromAccountId']")
        this.acccount2=page.locator("//select[@id='toAccountId']")
        this.Transfer=page.locator("//input[@value='Transfer']")
        this.Transfercomplete=page.locator("//h1[text()='Transfer Complete!']")
        this.accoundoverview=page.locator("//a[text()='Accounts Overview']")
        this.accountno=page.locator("//table[@id='accountTable']//tbody//tr//td[1]//a")
        this.tranfermsg=page.locator("//a[text()='Funds Transfer Received']/parent::td")
        this.validBalanc=page.locator("//h1[text()='Transaction Details']/following::table[1]//tr[last()]/td[last()]")



}
}