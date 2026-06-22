import { BillPage } from '../pages/billpages'
import { expect, Page } from '@playwright/test';
 
export type BillPayDetails = {
    payeeName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    accountNumber: string;
    verifyAccountNumber: string;
    amount: string;
};
 
export class BillAction {
 
    private readonly billpage: BillPage;
 
    constructor(page: Page) {
        this.billpage = new BillPage(page);
    }
 
    async billPayment(billData: BillPayDetails) {
 
        await this.billpage.billpaylink.click();
 
        await this.billpage.payeeName.fill(billData.payeeName);
        await this.billpage.address.fill(billData.address);
        await this.billpage.city.fill(billData.city);
        await this.billpage.state.fill(billData.state);
        await this.billpage.zipCode.fill(billData.zipCode);
        await this.billpage.phoneNumber.fill(billData.phoneNumber);
        await this.billpage.accountNumber.fill(billData.accountNumber);
        await this.billpage.verifyAccountNumber.fill(billData.verifyAccountNumber);
        await this.billpage.amount.fill(billData.amount);
 
        await this.billpage.sendPayment.click();
        await expect(this.billpage.BillPayment).toBeVisible()
        await this.billpage.findTrancaion.click()
        await this.billpage.selectaccount.selectOption({index:0})
        await this.billpage.amount1.fill(billData.amount)
        await this.billpage.bytransaction.click()
        await expect(this.billpage.transactionsuc).toBeVisible()
 
    }
}
 