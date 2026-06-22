import { test} from "../src/fixtures/fixture"
import register from "../src/testdata/register.json"
import funddata from "../src/testdata/fund.json"
import loantest from "../src/testdata/loan.json"

//three other TestCases are here
test('Open New Account and Verify Account Creation', async ({ page, appaction }) => {
  await page.goto(register.baseURL)

  await appaction.regis.registerUser(register.RegisterDetails)
  await appaction.regis.validRegistration()
   await appaction.regis.logout()
  await appaction.regis.loginValidaion(register.LoginDetails)
  await appaction.account.openAccount()

});
test("Fund Transfer Between Accounts",async({page,appaction})=>{test.setTimeout(60000)
await page.goto(register.baseURL)

  await appaction.regis.registerUser(register.RegisterDetails)
  await appaction.regis.validRegistration()
   await appaction.regis.logout()
  await appaction.regis.loginValidaion(register.LoginDetails)
  await appaction.account.openAccount()
  await appaction.fund.Fundtransfer(funddata.amount)
})



test("Customer Profile Update and Loan Request",async({page,appaction})=>{
await page.goto(register.baseURL)
await appaction.regis.registerUser(register.RegisterDetails)
await appaction.regis.validRegistration()
await appaction.loan.updateProfile(loantest.ProfileDetails)
  
})

test("Customer Invalid Loan Request",async({page,appaction})=>{
await page.goto(register.baseURL)
await appaction.regis.registerUser(register.RegisterDetails)
await appaction.regis.validRegistration()
await appaction.loan.invalidloan(loantest.LoanDetails.LoanNotvalid,loantest.LoanDetails.downPayment)
  
})