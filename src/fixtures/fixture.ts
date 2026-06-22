import { test as base, expect } from '@playwright/test';
import { RegistrationAction } from '../actions/registertionaction';
import { faker } from '@faker-js/faker';
import { AccountAction } from '../actions/accountaction';
import { FundAction } from '../actions/transferaction';
import { BillAction } from '../actions/billaction';
import { LoanAction} from '../actions/loanaction';

type Application = {
    regis: RegistrationAction;
    account:AccountAction;
    fund:FundAction;
    bill:BillAction;
    loan:LoanAction
};

type RandomUser = {
    username: string;
    password: string;
};

type Fixture = {
    appaction: Application;
    randomUser: RandomUser;
};

export const test = base.extend<Fixture>({

    appaction: async ({ page }, use) => {
        const appaction: Application = {
            regis: new RegistrationAction(page),
            account:new AccountAction(page),
            fund:new FundAction(page),
            bill:new BillAction(page),
            loan:new LoanAction(page)
        };

        await use(appaction);
    },

    randomUser: async ({}, use) => {
        const user: RandomUser = {
            username: faker.internet.username(),
            password: faker.internet.password()
        };

        await use(user);
    }
});

export { expect };