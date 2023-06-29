import { appURL, generateRandom } from '../../AppURL';
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../../roles';
import { Selector, t } from 'testcafe';
import faker from 'faker';

fixture(`add new product`).beforeEach(async t => {
  await t.setNativeDialogHandler(() => true);
  await t.useRole(user_01);
  await t.maximizeWindow();
});

test('add product', async t => {
  await t.navigateTo(`${appURL}/w_h/stocks`);
  await t.wait(1000);

  await t.click('#DIGITOOL_select_language');
  await t.click('#DIGITOOL_language_en');

  await t.click('#warehousetab_products');
  await t.click('#products_addNew');


  await t.click('#products_getNewProductNumber');

  const productName = faker.commerce.productName();
  console.log('Generated Product Name:', productName);

  await t.typeText('#products_name', productName);

  await t.typeText('#products_shortname', generateRandom('char', 3));

  await t.click('#products_type');
  await t.click('#products_type_option_work');

  await t.click('#products_group_id');
  await t.click('#products_group_option_20');

  await t.click('#products_earngroup');

  await t.click('#products_category');
  await t.click('#products_category_option_1');

  await t.typeText('#products_barcode', generateRandom('number', 3));

  await t.click('#products_supplier_id');
  await t.wait(1000);
  await t.click('#products_supplier_option_190');

  await t.wait(1000);
  await t.click('#products_supplierCurrency');
  await t.wait(1000);
  await t.click('#products_supplierCurrency_option_3');

  await t.typeText('#products_supplierArticleNumber', generateRandom('number', 3));
  await t.typeText('#products_supplierArticleName', generateRandom('name', 3));

  await t.typeText('#products_supplierPrice', generateRandom('number', 1));
  await t.wait(1000);
  await t.typeText('#products_supplierDiscount', generateRandom('number', 1));

  await t.typeText('#products_currencyDiscount', generateRandom('number', 1));

  await t.typeText('#products_supplierOther', generateRandom('number', 1));
  await t.wait(1000);
  await t.typeText('#products_shipmentAddon', generateRandom('number', 1));

  await t.typeText('#products_supplierRealcost', generateRandom('number', 1));
  await t.wait(1000);
  await t.typeText('#products_supplierRealcostnok', generateRandom('number', 1));

  await t.typeText('#products_costprice', generateRandom('number', 1));
  await t.wait(1000);
  await t.typeText('#products_grosmargin', generateRandom('number', 1));

  await t.typeText('#products_salesprice', generateRandom('number', 1));
  await t.wait(1000);
  await t.click('#products_vatid');

  await t.typeText('#products_salespriceincvat', '5');
  await t.wait(1000);
  await t.click('#products_priceValidFrom');
  await t.click(Selector('#inspire div').withText('27').nth(5));

  await t.click('#products_saveBtn');
});
