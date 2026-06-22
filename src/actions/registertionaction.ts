import { RegistrationPage } from '../pages/registrationtspage';
import { expect, Page } from '@playwright/test';
import { userdata } from '../testdata/fakerdata'
// Move type outside class
export type RegisterDetails = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;

};
export type LoginDetails={
    Username:string;
    Password:string;
}

export class RegistrationAction {
      

     private readonly registrationPage: RegistrationPage;

    constructor(page: Page) {
        this.registrationPage = new RegistrationPage(page);
    }

    async registerUser(registerData: RegisterDetails) {
         await this.registrationPage.rLink.click()
        await this.registrationPage.firstName.fill(registerData.firstName);
        await this.registrationPage.lastName.fill(registerData.lastName);
        await this.registrationPage.address.fill(registerData.address);
        await this.registrationPage.city.fill(registerData.city);
        await this.registrationPage.state.fill(registerData.state);
        await this.registrationPage.zipCode.fill(registerData.zipCode);
        await this.registrationPage.phoneNumber.fill(registerData.phoneNumber);
        await this.registrationPage.ssn.fill(registerData.ssn);
        await this.registrationPage.username.fill(userdata.username);
        await this.registrationPage.password.fill(userdata.password);
        await this.registrationPage.confirmPassword.fill(userdata.password);

        await this.registrationPage.registerBtn.click();
    }
    async validRegistration() {
    await expect(this.registrationPage.succesmsg).toBeVisible()
    }
    async logout(){
        await this.registrationPage.Logout.click()
    }
    async loginValidaion(logindetails:LoginDetails){
      await   this.registrationPage.Username.fill(userdata.username)
      await   this.registrationPage.Password.fill(userdata.password)
      await   this.registrationPage.loginbtn.click()
        await expect(this.registrationPage.AccountService).toBeVisible()
        await expect(this.registrationPage.UsernameValid).toBeVisible()
        
    }
    async invalidcredentials(userid:string,pass:string){
        await this.registrationPage.Username.fill(userid)
        await this.registrationPage.Password.fill(pass)
        await this.registrationPage.loginbtn.click()
        await expect(this.registrationPage.invalidmsg).toBeVisible();
    }

}