import { appURL , generateRandom } from '../AppURL'
import { Selector } from 'testcafe'

const createExpense = (async (t) => {
  await t.navigateTo(`${appURL}/expenses`)
  await t.wait(1000)

  await t.click('#DIGITOOL_select_language')
  await t.click('#DIGITOOL_language_en')

  await t.click('#expenses_addNew')

  await t.click('#expenses_date')
  await t.click(Selector('#expenses_date_picker div').withText('29').nth(3))

  await t.click('#expenses_project')
  await t.click('#expenses_project_option_3')

  // await t.click('#assetsFieldHandle')
  // await t.click(Selector('main div').withText('Upload receipt').nth(9))

  await t.setFilesToUpload('input[type="file"]', ['../Uploads/receipt.png'])

  await t.typeText('#expenses_order', 'a')
  await t.click('#expenses_order_option_5')

  await t.click('#expenses_paymenttype')
  await t.click('#expenses_paymenttype_option_2')

  await t.click('#expenses_addItemBtn')
  await t.typeText('#expenses_expenseItem_0_description', 'RECIPT01')

  await t.typeText('#expenses_expenseItem_0_qty', '2')

  //await t.click('#expenses_expenseItem_0_salesaccountid')

  await t.click('#expenses_expenseItem_0_vatid')
  await t.click('#expenses_vatid_option_5')

  await t.typeText('#expenses_expenseItem_0_price', generateRandom('number', 2))

  //Add expenses
  await t.wait(2000)
  await t.click('#expenses_addItemBtn')
  await t.typeText('#expenses_expenseItem_1_description', 'RECIPT02')

  await t.typeText('#expenses_expenseItem_1_qty', '2')
  
 // await t.click('#expenses_expenseItem_1_salesaccountid')

  // await t.click('#expenses_expenseItem_1_vatid')
  // await t.click('#expenses_vatid_option_7')

  await t.typeText('#expenses_expenseItem_1_price', '20')

  await t.click('#expenses_saveBtn')
})

module.exports = {
  createExpense
}