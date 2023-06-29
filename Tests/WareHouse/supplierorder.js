import { appURL, generateRandom } from './AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from './roles'
import { Selector, t } from 'testcafe'


fixture `adding supplier order`
.beforeEach(async t => {
	
    await t.setNativeDialogHandler(() => true)
    await t.useRole(user_01)
    await t.maximizeWindow()
})
test('add expenses' , async t => {
 

    await t.navigateTo(`${appURL}/w_h/stocks`)
    await t.wait(1000)

    
    .click('#DIGITOOL_select_language')
    .click('#DIGITOOL_language_en')

    //creating new supplier order

    .click('#stocks_createNew')
    .click('#stocks_createNewAction_supplierOrder')

    .click('#supplierid')
    .click('#supplierid_182')

    .click('#priority')
    .click('#priority_high')

     .click('#action_handler')




  






});