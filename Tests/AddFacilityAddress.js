import { appURL } from './AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from './roles'
import { Selector, t } from 'testcafe'


fixture `Facility address`
.beforeEach(async t => {
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    .maximizeWindow()
})
test('Add facility address' , async t => {
  await t

    await t.navigateTo(`${appURL}/buildings`)
    .click('#buildings_addNew')
    .typeText('#buildings_short_name', 'Building-01')
    .typeText('#buildings_address', 'UnitedKingdom')

    .typeText('#buildings_zip', '76745346')
    .typeText('#buildings_zip', '654326')

    .typeText('#buildings_city', 'NORWAY')
    .typeText('#buildings_serviceinterval', '3')
    
    .click('#buildings_last_visit')
    .click(Selector('#inspire div').withText('27').nth(5))

    .click('#buildings_planned_visit')
    .click(Selector('#inspire div').withText('29').nth(11))

    .click('#buildings_productgroupids')
    //.click('#')

    .typeText('#buildings_comment', 'Here is the facilities address for the product group from the facilities adress')
    .click('#buildings_action_handler')

})