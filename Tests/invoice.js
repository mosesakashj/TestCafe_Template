import { appURL } from '../AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../roles'
import { Selector, t } from 'testcafe'


fixture `add new product`
.beforeEach(async t => {
	
    await t.setNativeDialogHandler(() => true)
    await t.useRole(user_01)
    await t.maximizeWindow()
})
test('add product' , async t => {
 

    await t.navigateTo(`${appURL}/invoice`)
    Selector('#app-navigaition-menu-section div').withText('Invoices').nth(5)
    await t.wait(1000)

    
    await t.click('#DIGITOOL_select_language')
    await t.click('#DIGITOOL_language_en')
    await t.click(Selector('#menu_path_contacts div').withText('Contacts').nth(1))
    await t.click(Selector('#app-navigaition-menu-section div').withText('Invoice').nth(4))
    await t.click(Selector('#app-navigaition-menu-section div').withText('Invoices').nth(5))


await t.click('#invoices_addNew')
await t.wait(3000)
// await t.typeText('#inovices_project', 'aba')
// await t.wait(3000)
// await t.click('#inovices_project_option_2')

await t.typeText('#inovices_order', 'CVS')
await t.pressKey('enter')
await t.click('#inovices_order_option_5')

await t.typeText('#inovices_orderItem_0_product_text','HDMI CABLE PARTS1')
await t.typeText('#inovices_orderItem_0_qty','20')

await t.typeText('#inovices_orderItem_0_cost', '50')

await t.typeText('#inovices_orderItem_0_price', '20')

await t.typeText('#inovices_orderItem_0_discount', '5')

await t.click('#inovices_orderItem_0_dateused')
await t.click(Selector('#inspire div').withText('30').nth(12))

await t.typeText('#inovices_orderItem_0_comments', 'NEW INVOICE ON HDMI')

await t.wait(2000)
await t.click('#inovices_addOrderItemBtn')

await t.typeText('#inovices_orderItem_1_product_text', 'FRIDGE SETS')
await t.typeText('#inovices_orderItem_0_qty','10')

await t.typeText('#inovices_orderItem_0_cost', '20')

await t.typeText('#inovices_orderItem_0_price', '50')

await t.typeText('#inovices_orderItem_0_discount', '4')

await t.click('#inovices_orderItem_0_dateused')
await t.click(Selector('#inspire div').withText('30').nth(12))

await t.typeText('#inovices_orderItem_0_comments', 'NEW INVOICE ON HDMI')

await t.click('#inovices_createBtn')



})