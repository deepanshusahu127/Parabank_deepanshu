import { test} from "../src/fixtures/fixture"
import register from "../src/testdata/register.json"
test.only('Verify user registration', async ({ page, appaction }) => {
  await page.goto(register.baseURL)

  await appaction.regis.registerUser(register.RegisterDetails)
  await appaction.regis.validRegistration()
   await appaction.regis.logout()
  await appaction.regis.loginValidaion()
});
test.skip("Both username and password blank-Validation displayed",async({page,appaction})=>{
  await page.goto(register.baseURL)
  await appaction.regis.invalidcredentials(register.BlankCredentials.username,register.BlankCredentials.password)


})