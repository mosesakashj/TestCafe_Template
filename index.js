import { appURL , generateRandom} from './AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from './roles'
import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe'
import xpathSelector  from './xpath-selector'
import { createCustomer } from './Services/CustomerServices.js'
import { createExpense } from './Services/ExpenseServices'
import { createOrder, createProductOverviewItem, createInvoice, createHourOverviewItem } from './Services/OrderServices.js'

fixture `Crm module`
.beforeEach(async t => {
	await t
    .setNativeDialogHandler(() => true)
    .useRole(user_01)
    .maximizeWindow()
})


test('add expenses' , async t => {
    await createExpense(t)
})

test('Customer Search and equipment relate' , async t => {
    await t.navigateTo(`${appURL}/customers`)
    await t.click('#customers_search')
    await t.wait(1000)
      .typeText('#customers_search', 'aurora', {replace: true})
      .wait(1000)
      .click('#dataListItem_190_custom_number_route') 
      .wait(1000)
  
      .click(Selector('#customertab_orders'))
      .click(Selector('#customertab_invoices'))
  
      .click(Selector('#customertab_equipments'))
      .click('#equipments_newBtn')
  
      .typeText('#equipments_address', 'a')
      .click('#equipments_address_option_2')
  
      
      .typeText('#equipments_number',  generateRandom('number', 5),{replace: true } )
      .typeText('#equipments_machine', generateRandom('', 6),{replace: true })
      .wait(1000)
      
      .click('#equipments_type_id')
      .click('#type_id_5')
      
      .click('#equipments_fabricate_id')
      .click('#fabricate_id_3')
  
      .typeText('#equipments_model_id', generateRandom('number',2),{replace: true })
      .click('#equipments_model_id_quickAddBtn')
  
      .click('#equipments_confirmForm_isDefault') 
      .click('#equipments_confirmForm_yesBtn')
  
      .typeText('#equipments_model_details','EQUP-001')
      .typeText('#equipments_location','CHENNAI')
      .typeText('#equipments_serial_number','SN-7600')
      .typeText('#equipments_barcode','0089')
  
      .click('#equipments_checklist_id')
      .click('#checklist_id_13')
  
      .typeText('#equipments_hourmeter', '01')
      .typeText('#equipments_serviceinterval', '2')
  
      .click('#equipments_responsible_id')
      .click('#responsible_id_18')
  
      .typeText('#equipments_customerreferencenumber', '0023')
  
      .click('#equipments_availableforrental')
  
      .click('#equipmentproducts_addProductItemBtn')
  
      .click('#equipmentproducts_0_rentaltype')
      .click('#equipmentproducts_0__rentaltype_option_recurring_payment')
  
      .typeText('#equipmentproducts_0_productid', 'a')
      .click('#equipmentproducts_0_productid_option_7')
  
      .typeText('#equipmentproducts_0_qty','2')
  
      .click('#equipmentproducts_0_priceperiod')
      .click('#equipmentproducts_0_priceperiod_day')
  
      .click('#equipments_action_handler')
  
  });

test('create customer -> order --> invoice', async t => {
    // await createHourOverviewItem(t, { orderId: 1706 })

    const customerId = await createCustomer(t)
    const orderId = await createOrder(t, { customerId })
    console.log(customerId, orderId)
    await createProductOverviewItem(t, { orderId })
    await createInvoice(t, { orderId })
    await createHourOverviewItem(t, { orderId })

    await t.takeScreenshot({
        path: `artifacts/screenshots/${t.testRun.test.index}/${t.browser.alias}/${t.testRun.test.fileIndex}.png`,
        fullPage: true,
    });
});


test('upload images' , async t => {
    await t.navigateTo(`${appURL}/orders/1703/detail`)
    await t.wait(1000)
    await t.click(xpathSelector('//*[@id="tab"]/div/div[3]/i'))
    await t.click('#orderstab_images')
    await t.click('#orders_images_uploadBtn')
    await t.setFilesToUpload('input[type="file"]', ['./Uploads/receipt.png'])
    console.log('images uplaoded successfully')
})

