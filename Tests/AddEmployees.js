import { appURL } from '../AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../roles'
import { Selector, t } from 'testcafe'

fixture `Employee module`
.beforeEach(async t => {
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    .maximizeWindow()
})
test('create employee' , async t => {
  await t

    await t.navigateTo(`${appURL}/employees`)
    .wait(1000)
    .click('#employees_addNew')
    .click('#employees_username')
    .click(Selector('div').withText('nandhini@processdrive.com').nth(6))
    .typeText('#employees_name', 'Monishas1')
    .typeText('#employees_initial','Invoice-01')
    .typeText('#employees_email', 'qwer@gmail.com')
    .typeText('#employees_mobile', '76434543667')
    .typeText('#employees_employee_number', '765545')
    .click('#employees_role_id')
    .click('#role_id_4')
    .click('#employees_hr_responsibleids')
    //.click('#')
    .click('#employees_isadmin')
    .click('#employees_close_handler')

})