import { appURL } from '../AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../roles'
import { Selector, t } from 'testcafe'


fixture `Contact module`
.beforeEach(async t => {
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    .maximizeWindow()
})
test('create contact' , async t => {
  await t

    await t.navigateTo(`${appURL}/contacts`)
    await t.wait(1000)
    await t.click('#contacts_dataListCreateBtn')
    await t.click('#contact_customer_id')
    await t.click('#customer_id_10')
    await t.typeText('#contact_firstname','saravananpd',{replace: true })
    await t.typeText('#contact_lastname','saravanan')
    await t.typeText('#contact_title', 'Employment service' ,{replace: true })
    await t.typeText('#contact_email', 'sara@gmail.com')
    await t.typeText('#contact_mobilephone','873984634636', {replace: true })
    await t.typeText('#contact_note', 'Contacts have saved')


})