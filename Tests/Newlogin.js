import { Selector } from 'testcafe'

fixture `digitool`.page `https://staging.digitool.no/login`


test('login with valid credintials', async t => {
  await t

  .click('#DIGITOOL_lang_select')
  .click('#DIGITOOL_select_lang_no')
  .typeText('#DIGITOOL_username', 'miloinfo.cube14@gmail.com',{ paste: true })
  .typeText('#DIGITOOL_password', 'Miloinfo@14', { paste: true })
  .wait(1000)

  .skipJsErrors(true)
  .setNativeDialogHandler(() => true)
  .click('#DIGITOOL_login_button') 
})


test('login with invalid credintials', async t => {
    await t
  .typeText('#DIGITOOL_username', 'miloinfo.cube14@gmail.com',{ paste: true })
  .typeText('#DIGITOOL_password', 'Miloinfo@1412', { paste: true })
  .wait(1000)

  .skipJsErrors(true)
  .setNativeDialogHandler(() => true)
  .click('#DIGITOOL_login_button')
})


test('Forget password', async t => {
    const emailInput = Selector('#DIGITOOL_reset_email')
    const message = Selector('#commonSnackbar').innerText
  await t

  .click('#DIGITOOL_forgotpassword')
//.click('#DIGITOOL_forgot_back_option')
  .typeText(emailInput, 'miloinfo.cube14@gmail.com',{ paste: true })
  .click('#DIGITOOL_reset_send')
  
  .expect(message).contains('reset password link sent to your email')

  .setNativeDialogHandler(() => true)
  .expect(emailInput.exists).notOk
  .wait(1000)
})

fixture `New Fixture`
    .page `https://staging.digitool.no/login`;
    

test(`login with sharepoint`, async t => {
    await t
    
       await t .setNativeDialogHandler(() => true)
       await t .click('#DIGITOOL_loginwithsharepoint')
       await t .wait(5000)   
       await t.typeText('#i0116', 'rosy@processdrive.com')
       await t.click('#idSIButton9')
       await t. wait(1000)
       await t.typeText('#i0118', 'jesslin@28')
       await t.click('#idSIButton9')
       await t.click(Selector('#idDiv_SAOTCS_Proofs div').withText('Text +XX XXXXXXXX74‎').nth(3))
       await t .wait(40000);
        let json = require('../test.json')
        console.log(json)
        await t.typeText('#idTxtBx_SAOTCC_OTC',json.ms365OTP)
        await t.click('#idSubmit_SAOTCC_Continue')
        await t.click('#idSIButton9')
});