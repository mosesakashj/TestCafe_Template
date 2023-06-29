import { appURL , generateRandom} from '../AppURL'

const createCustomer = (async (t) => {
    await t.navigateTo(`${appURL}/customers`)

    await t.click('#app-navigaition-menu-section')
    await t.wait(1000)
    await t.click('#DIGITOOL_select_language')
    await t.click('#DIGITOOL_language_en')
    await t.click('#customers_addNew')
    await t.click('#customers_iscustomer')
  
    await t.typeText('#customers_name', generateRandom('char', 10))
    await t.typeText('#customers_organizationnumber', generateRandom('number', 10))
    

    await t.typeText('#customers_agreement_number', 'PD234567')
    await t.typeText('#customers_industry', 'Honeywell')
    await t.typeText('#customers_industry', 'Honeywellorg',{ replace: true })

    await t.typeText('#customers_email','rosypd831@gmail.com')
    await t.typeText('#customers_website','https://testcafe.io/documentation/')

    await t.click('#customers_company_id')
    await t.click('#company_id_2')

    // await t.click('#customers_paymentmethod')
    // await t.click('#option_1')

    await t.click('#customers_paymentterm')
    await t.click('#option_7')
 
    //  await t.click('#customers_currencyid')
    //  await t.click('#option_3')

    // await t.click('#customers_saletypeid')
    //await t.click('#option_3')

    await t.click('#customers_priority')
    await t.click('#customers_priority_9')

    await t.typeText ('#customers_address', generateRandom('char', 10))
    await t.typeText('#customers_postcode', generateRandom('number', 10))

    await t.typeText('#customers_description', 'I AN THE MANAGEMENT TEAM FROM THE ORGANISATION')
    await t.typeText('#customers_city','COLOMBIA')

    await t.typeText('#customers_country','Jersey')

    await t.click('#customers_responsibleid')
    await t .click('#customers_responsibleid_37')

    await t .click('#customers_select_lang')
    await t.click('#customers_select_lang_en')

    await t.click('#customers_select_invoice_period')
    await t.click('#option_mon_last_sun')

    await t.click('#customers_issupplier')
    //await t .click('#customers_isprivatecustomer')
    
    await t.setNativeDialogHandler(() => true)
    await t.click('#customers_action_handler')

    await t.wait(10000)
    const getWindowLocation = await t.eval(() => window.location.href) 
    const customerId = getWindowLocation.split('/')[4]
    console.log(getWindowLocation, customerId)
    await t.wait(10000)

    return customerId
})

module.exports = {
    createCustomer
}
