import { test} from "../src/fixtures/fixture"
import billdata from "../src/testdata/bill.json"
import register from "../src/testdata/register.json"
test("Bill Payment and Transaction Verification",async({page,appaction})=>{//test.setTimeout(60000)
await page.goto(register.baseURL)
 
  await appaction.regis.registerUser(register.RegisterDetails)
  // await appaction.regis.logout()
 //await appaction.regis.loginValidaion(register.LoginDetails)
    await appaction.account.openAccount()
  await appaction.bill.billPayment(billdata.BillPayDetails)
})