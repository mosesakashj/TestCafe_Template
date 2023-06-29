import { appURL } from '../AppURL'
//import { microsoftLogin, microsoftLoginGuestUser, user_03 } from './roles'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../roles'
import { Selector, t } from 'testcafe'


fixture `Quick check from the beginning`
.beforeEach(async t => {
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    //.useRole(user_03)
    .maximizeWindow()

})
test(`New Test`, async t => {
   
       await t.navigateTo(`${appURL}/dashboard`)
       await t
    .expect(Selector('#menu_path_customers').exists)
    .ok('Customers menu should exist')

    
    .click(Selector('#DIGITOOL_language_en div').withText('Engelsk').nth(1))
    .click(Selector('#customertab_invoices'))
    .click(Selector('#customertab_offers'))
    .click(Selector('#customertab_equipments'))
    .click(Selector('#customertab_documents'))
    .wait(3000)

    .click(Selector('#customertab_projects'))
    .click(Selector('#customertab_address'))
    .click(Selector('#tab a').withText('TASKS'))
    .click(Selector('#tab a').withText('EARNING AND DISCOUNTS'))
    .click(Selector('#customertab_smshistory'))
    .click(Selector('#menu_path_employees div').nth(1).find('div'))
    .click(Selector('#menu_path_resourceplanner div').nth(1).find('div'))
    .click(Selector('#menu_path_contacts div').nth(1).find('div'))
    .click(Selector('#menu_path_buildings div').nth(1).find('div'))
    .click(Selector('#menu_path_equipments div').nth(1))
    .click(Selector('#menu_path_projects div').nth(1).find('div'))
    .click(Selector('#menu_path_offers div').nth(1).find('div'))
    .click(Selector('#menu_path_orders div').nth(1).find('div'))
    .click(Selector('#menu_path_expenses div').nth(1).find('div'))
    .click(Selector('#menu_path_appointments div').nth(1).find('div'))
    .click(Selector('#menu_path_w_h\\/stocks div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(39).find('div div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(39).find('div').nth(3).find('a div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(39).find('div').nth(3).find('a').nth(1).find('div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(39).find('div').nth(3).find('a').nth(2).find('div').nth(1).find('div'))
    .click(Selector('#menu_path_production_order\\/order div').nth(1).find('div'))
    .click(Selector('#menu_path_productionwork_list div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(59).find('div div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(59).find('div').nth(3).find('a div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(59).find('div').nth(3).find('a').nth(1).find('div').nth(1).find('div'))
    .click(Selector('#menu_path_tasks div').nth(1).find('div'))
    .click(Selector('#menu_path_timer div').nth(1).find('div'))
    .click(Selector('#menu_path_documents div').nth(1))
    .click(Selector('#app-navigaition-menu-section div').withText('HSE').nth(3))
    .click(Selector('#app-navigaition-menu-section div div').nth(3).find('div').nth(82).find('div').nth(3).find('a div').nth(1).find('div'))
    .click(Selector('#app-navigaition-menu-section div').withText('Measures').nth(5))
    .click(Selector('#app-navigaition-menu-section div').withText('Chemical list').nth(4))
    .click(Selector('main a').withText('23.2.chemical list'))
    .click(Selector('#app-navigaition-menu-section div').withText('Expertise').nth(4))
    .click(Selector('#app-navigaition-menu-section div').withText('Documents').nth(7))
    .wait(2000)

    .click(Selector('#app-navigaition-menu-section div').withText('Internal Equipments').nth(5))
    .click(Selector('#app-navigaition-menu-section div').withText('HSE Wheel').nth(5))
    .click(Selector('#app-navigaition-menu-section div').withText('Reports').nth(4))
    .click(Selector('#null div').withText('Hour Reports'))
    .click(Selector('#null').nth(1).find('div').withText('Warehouse reports').nth(1))
    .click(Selector('#null').nth(2).find('div').withText('Offer').nth(1))
    .click(Selector('#null').nth(3).find('div').withText('Projects').nth(1))
    .click(Selector('#null').nth(4).find('div').withText('Projects Reports').nth(1))
    .click(Selector('#null').nth(5).find('div').withText('Product usage').nth(1))
    .click(Selector('#null').nth(6).find('div').withText('Expense report'))
    .click(Selector('#null').nth(7).find('div').withText('Equipment Overview'))
    .click(Selector('#null').nth(8).find('div').withText('Equipment SerialNumber'))
    .click(Selector('#null').nth(9).find('div').withText('Equipment Status'))
    .click(Selector('#null').nth(10).find('div').withText('Drain & Fill Reports').nth(1))
    .click(Selector('#null').nth(11).find('div').withText('Document report builder').nth(1))
    .click(Selector('#menu_path_logs div').withText('Logg'))
    .click(Selector('#menu_path_wiki\\/3 div').withText('Fiirst Wiki'))
    .click(Selector('#menu_path_wiki\\/4 div').withText('TEST WIKI 3'))
    .click(Selector('#menu_path_wiki\\/21 div').withText('Rosy wiki 1').nth(1))
    .click(Selector('#menu_path_wiki\\/11 div').withText('TEST WIKI 2'))
    .click(Selector('#app-navigaition-menu-section div').withText('Settings').nth(4))
    .click(Selector('#menu_path_orders div').withText('Orders').nth(1))
    .click(Selector('header').nth(1).find('a').withText('NEW'))

  // Assertions
  await t
    .expect(Selector('#elementId').exists)
    .ok('Element should exist')

    .expect(Selector('#elementId').innerText)
    .eql('Expected text', 'Element should have expected text')
})

         