import { LoanPage } from "../pages/loanpage";
import { expect, Page } from '@playwright/test';
import datatest from "../testdata/loan.json";

export type ProfileDetails = {
    firstname:string
    lastname:string
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
};

export type LoanDetails = {
    loanAmount: string;
    downPayment: string;
};

export class LoanAction {

    private readonly loanpage: LoanPage;

    constructor(page: Page) {
        this.loanpage = new LoanPage(page);
    }

    async updateProfile(profileData: ProfileDetails) {

        await this.loanpage.updateContactInfo.click();
       
        await this.loanpage.firstName.fill(profileData.firstname)
       await this.loanpage.lastName.fill(profileData.lastname)
      await this.loanpage.address.fill(profileData.address);
      await this.loanpage.city.fill(profileData.city);
      await this.loanpage.state.fill(profileData.state);
        await this.loanpage.zipCode.fill(profileData.zipCode);
      await this.loanpage.phoneNumber.fill(profileData.phoneNumber);
        await this.loanpage.page.waitForTimeout(4000);
        await this.loanpage.updateProfileBtn.click()
         await this.loanpage.page.waitForTimeout(4000);
    
        
await expect(this.loanpage.updateSuccessMsg).toBeVisible();
    }

    async loanUpdated(loanprofile:LoanDetails){
        await this.loanpage.requestloan.click()
        await this.loanpage.loanamount.fill(loanprofile.loanAmount)
        await this.loanpage.loandownpayment.fill(loanprofile.downPayment)
        await this .loanpage.Applybutton.click()
        await expect(this.loanpage.loansuccesmsg).toBeVisible()
    }
  
}