import { Locator, Page } from "@playwright/test";

export class BillPage {

    readonly page: Page;
    readonly billpaylink: Locator;

    readonly payeeName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phoneNumber: Locator;
    readonly accountNumber: Locator;
    readonly verifyAccountNumber: Locator;
    readonly amount: Locator;
    readonly sendPayment: Locator;
    readonly BillPayment:Locator
    readonly findTrancaion:Locator
    readonly selectaccount:Locator
    readonly amount1:Locator
    readonly bytransaction:Locator
    readonly transactionsuc:Locator

    constructor(page: Page) {
        this.page = page;

        this.billpaylink = page.locator("//a[text()='Bill Pay']");

        this.payeeName = page.locator("input[name='payee.name']");
        this.address = page.locator("input[name='payee.address.street']");
        this.city = page.locator("input[name='payee.address.city']");
        this.state = page.locator("input[name='payee.address.state']");
        this.zipCode = page.locator("input[name='payee.address.zipCode']");
        this.phoneNumber = page.locator("input[name='payee.phoneNumber']");
        this.accountNumber = page.locator("input[name='payee.accountNumber']");
        this.verifyAccountNumber = page.locator("input[name='verifyAccount']");
        this.amount = page.locator("input[name='amount']");

        this.sendPayment = page.locator("//input[@value='Send Payment']");
        this.BillPayment=page.locator("//h1[text()='Bill Payment Complete']")
        this.findTrancaion=page.locator("//a[text()='Find Transactions']")
        this.selectaccount=page.locator("//select[@id='accountId']")
        this.amount1=page.locator("//input[@id='amount']")
        this.bytransaction=page.locator("//button[@id='findByAmount']")
        this.transactionsuc=page.locator("//div[@id='resultContainer']/h1")
        
    }
}