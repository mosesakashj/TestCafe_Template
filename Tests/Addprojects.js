import { appURL, generateRandom } from './AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from './roles'
import { Selector, t } from 'testcafe'


fixture `Adding Projects`
.beforeEach(async t => { 
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    .maximizeWindow()
})
test('Add facility address' , async t => {
  await t

    await t.navigateTo(`${appURL}/projects`)
    .click('#projects_addNew')
    .typeText('#projects_name', 'Bluestar')

    .click('#projects_customer_id')
    .click('#customer_id_132')

    .click('#projects_projectlead_id')
    .click('#projectlead_id_27')

    .click('#projects_category_id')
    .click('#category_id_18')

    .click('#projects_startdate')
    .click(Selector('#inspire div').withText('28').nth(5))
   
    .click('#projects_enddate')
    .click(Selector('#inspire div').withText('30').nth(11))

    .click('#projects_status')
    .click('#status_2')

    .typeText('#projects_description', 'New project')

    .click('#budgetAndNotifications_expansion')
    .typeText('#budgetAndNotifications_expectedcost', generateRandom('number', 2))

    .typeText('#budgetAndNotifications_expectedsale', generateRandom('number', 3))
    .typeText('#budgetAndNotifications_expectedearning', generateRandom('number', 2))

    .typeText('#budgetAndNotifications_hoursestimation',generateRandom('number', 2))
    .typeText('#budgetAndNotifications_sumestimation', generateRandom('number', 2))

    .click('#projects_action_handler')












})