import { Selector, t, Role } from 'testcafe'
const appUrl = 'https://staging.digitool.no'


export const user_01 = Role(appUrl, async t => {
    await login('miloinfo.cube14@gmail.com', 'Miloinfo@14')
},{ preserveUrl: true })

export const user_02 = Role(appUrl, async t => {
    await login('rosypd831@gmail.com', 'jesslin@28')
})
export const user_03 = Role(appUrl, async t => {
  
    await t.setNativeDialogHandler(() => true)
    await msLogin('rosy@processdrive.com','pdrive@2023','74')
})
async function login(userName, password) {
    await t.typeText('#DIGITOOL_username', userName)
    await t.typeText('#DIGITOOL_password', password)
    await t.wait(1000)
    .skipJsErrors(true)
    .setNativeDialogHandler(() => true)
    await t.click('#DIGITOOL_login_button')
    await t.wait(1000)
}
async function msLogin(username, password,lastTwoDigitPhone) {
   
    await t.click('#DIGITOOL_loginwithsharepoint')
    await t.wait(2000)
    await t.typeText('#i0116', username)
    await t.click('#idSIButton9')
    await t. wait(1000)
    await t.typeText('#i0118', password)
    await t.pressKey('enter')
    await t.click(Selector('#idDiv_SAOTCS_Proofs div').withText(`Text +XX XXXXXXXX${lastTwoDigitPhone}‎`).nth(3))
    await t.wait(40000)
    let json = require ('./test.json')
    await t.typeText('#idTxtBx_SAOTCC_OTC', json.ms365OTP)
    await t.click('#idSubmit_SAOTCC_Continue')
    .setNativeDialogHandler(() => true)
    await t.click('#idSIButton9')
    
}
export const microsoftLoginAdmin = Role(appUrl, async t => {
    await msLogin( 'rosy@processdrive.com','jesslin@28','74')
})
export const microsoftLoginGuestUser = Role(appUrl, async t => {
    await msLogin( 'moses@processdrive.com','Jessi@9750840534','34')
})