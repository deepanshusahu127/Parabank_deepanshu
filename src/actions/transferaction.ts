import { FundTransfer } from "../pages/transferpage";
import { expect, Page } from '@playwright/test';
import datatest from "../testdata/fund.json"
export class FundAction{
      private readonly fundpage: FundTransfer
    
        constructor(page: Page) {
            this.fundpage = new FundTransfer(page);
        }

        async Fundtransfer(Amount :string){
            await this.fundpage.TransferFundlink.click()
             await this.fundpage.amount.fill(Amount)
            await this.fundpage.account1.selectOption({index:1})
            await this.fundpage.page.waitForTimeout(4000);
        
            await this .fundpage.acccount2.selectOption({index:0})
            await this.fundpage.page.waitForTimeout(4000);
            await this.fundpage.Transfer.click()
            await expect(this.fundpage.Transfercomplete).toBeVisible()
            await this.fundpage.accoundoverview.click();
            await this.fundpage.accountno.first().click()
            await this.fundpage.tranfermsg.click()
            expect((await this.fundpage.validBalanc.textContent())?.replace('$', '').replace('.00', '').trim()).toBe(Amount.trim());
        }
}
