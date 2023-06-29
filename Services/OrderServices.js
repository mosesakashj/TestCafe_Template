import { appURL , generateRandom } from '../AppURL'
import { Selector } from 'testcafe'

const createOrder = (async (t, { customerId }) => {
    let url = `${appURL}/orders/add`
    if (customerId) {
        url += `?customer_id=${customerId}`
    }
    await t.navigateTo(url)
    
    await t.typeText('#orders_name', 'Automation Order')
    await t.typeText('#orders_name', generateRandom('char', 10))
    await t.typeText('#orders_contact_id', 'rosypd')
    await t.click('#orders_contact_id_quickAddBtn')
    await t.typeText('#contact_firstname', 'rosyprocessdrive',{ paste: true } )
    await t.typeText('#contact_lastname', 'SF',{ paste: true } )
    await t.typeText('#contact_title', 'Saleoffers',{ paste: true } )
    await t.typeText('#contact_email', 'rosy@processdrive.com',{ paste: true } )
    // await t.typeText('#contact_mobilephone', '876767563254',{ paste: true } )
    await t.typeText('#contact_note', 'My new note',{ paste: true } )

    await t.wait(1000)
    await t.click('#contact_action_handler')

    await t.typeText('#orders_your_reference', 'ruban')

    await t.click('#orders_type_id')
    await t.click('#type_id_12')

    await t.click('#orders_startdate')
    await t.wait(1000)
    let startDate = Selector('#orders_startdate_picker div').withText('28').nth(3)
    while(!startDate) {
        await t.click(Selector('#orders_startdate'))
        await t.wait(1000)
        startDate = Selector('#orders_startdate_picker div').withText('28').nth(3)
    }
    await t.click(startDate)

    await t.click('#orders_enddate')
    let endDate = Selector('#orders_enddate_picker div').withText('28').nth(3)
    while(!endDate) {
        await t.click(Selector('#orders_enddate'))
        await t.wait(1000)
        endDate = Selector('#orders_enddate_picker div').withText('28').nth(3)
    }
    await t.click(endDate)

    await t.click('#orders_startat')
    let startAt = Selector('#orders_startat_picker span').withText('15').nth(1)
    while(!startAt) {
        await t.click(Selector('#orders_startat'))
        await t.wait(1000)
        startAt = Selector('#orders_startat_picker span').withText('00').nth(1)
    }
    await t.click(startAt)

    await t. click('#orders_endat')
    let endAt = Selector('#orders_endat_picker span').withText('20').nth(1)
    while(!endAt) {
        await t.click(Selector('#orders_endat'))
        await t.wait(1000)
        endAt = Selector('#orders_endat_picker span').withText('00').nth(1)
    }
    await t.click(endAt)

    await t.typeText('#orders_invoiceto', 'ava')
    await t.click('#invoiceto_135')

    await t.typeText('#orders_projectaddressid', 'ZAYONA')
    await t.click('#orders_project_id')
    await t.click('#project_id_38')

    await t.typeText('#orders_deliveryaddress','londees')
    await t.click('#orders_deliveryaddress_quickAddBtn')
    await t.click('#buildings_type')
    await t.click('#type_5')
    await t.typeText('#buildings_address1', 'jarkant')
    await t.typeText('#buildings_postcode', '6748375')
    await t.typeText('#buildings_city','luckno')
    await t.typeText('#buildings_country', 'India')
    await t.click('#buildings_isdefault')
    await t.click('#buildings_action_handler')


    await t.click('#orders_checklistdefaultid')
    // await t.click('#checklistdefaultid_2')

    await t.click('#orders_responsible')
    await t.click('#orders_select_responsible_27')

   
    await t.click('#orders_action_handler')

    await t.wait(10000)

    const getWindowLocation = await t.eval(() => window.location.href) 
    const orderId = getWindowLocation.split('/')[4]
    return orderId
})

const createProductOverviewItem = (async (t, { orderId }) => {
    let url = `${appURL}/orders/${orderId}/products`
    await t.navigateTo(url)

    await t.click(  Selector('#orders_overview_add_actions'))
    await t.click( Selector('#orders_overview_add_products_actions'))

    await t.typeText('#orders_overview_addProductItem_0_supplier', 'a')
    await t.wait(3000)
    await t.click('#addProductItem_0_supplier_option_10')

    await t.typeText('#orders_overview_addProductItem_0_product', 'a')
    await t.wait(3000)
    await t.click('#addProductItem_0_product_option_8')

    await t.typeText('#orders_overview_addProductItem_0_qty','2')
    await t.typeText('#orders_overview_addProductItem_0_cost', '50')
    await t.typeText('#orders_overview_addProductItem_0_price', '20')
    await t.typeText('#orders_overview_addProductItem_0_earning_percentage', '2')
    await t.typeText('#orders_overview_addProductItem_0_discount', '5')
    await t.typeText('#orders_overview_addProductItem_0_qty','2')
    await t.typeText('#orders_overview_addProductItem_0_comments', 'NEW INVOICE ON HDMI')

    // await t.click('#inovices_orderItem_0_dateused')
    // await t.click(Selector('#inspire div').withText('30').nth(12))
    await t.click('#orders_overview_addProductItem_saveBtn') 
    
})

const createHourOverviewItem = (async (t, { orderId }) => {
    let url = `${appURL}/orders/${orderId}/products`
    await t.navigateTo(url)

    await t.click(Selector('#orders_overview_add_actions'))
    await t.click(Selector('#orders_overview_add_hours_actions'))

    await t.wait(1000)

    await t.click('#user_id')
    await t.click('#user_id_27')
    

    await t.click(Selector('#work_id'))
    await t.click('#work_id_3')

    await t.wait(1000)
  
    await t.click(Selector('#date'))
    await t.wait(1000)
    let date = Selector('#date_picker div').withText('28').nth(3)
    while(!date) {
        await t.click(Selector('#date'))
        await t.wait(1000)
        date = Selector('#date_picker div').withText('28').nth(3)
    }
    await t.click(date)

    await t.click('#starttime')
    let startAtHour = Selector('#starttime_picker span').withText('15').nth(1)
    while(!startAtHour) {
        await t.click(Selector('#starttime'))
        await t.wait(1000)
        startAtHour = Selector('#starttime_picker span').withText('15').nth(1)
    }
    await t.click(startAtHour)

    await t.wait(1000)
    let startAtMin = Selector('#starttime_picker span').withText('40').nth(1)
    await t.click(startAtMin)

    await t.click('#endtime')
    let endAtHour = Selector('#endtime_picker span').withText('20').nth(1)
    while(!endAtHour) {
        await t.click(Selector('#endtime'))
        await t.wait(1000)
        endAtHour = Selector('#endtime_picker span').withText('00').nth(1)
    }
    await t.click(endAtHour)

    
    await t.wait(1000)
    let endAtMin = Selector('#endtime_picker span').withText('40').nth(1)
    await t.click(endAtMin)

    await t.typeText('#comments', 'order hours have been added by ruban')

    await t.typeText('#internalcomments',' hours have verified')

    await t.typeText('#comments', 'My hour has been logged here')

    await t.click('#action_handler')
})

const createInvoice = (async (t, { orderId }) => {
    let url = `${appURL}/orders/${orderId}/products`
    await t.navigateTo(url)

    await t.click(Selector('#orders_overview_inovice_actions'))
    await t.click(Selector('#orders_overview_inovice_actions_standardInvoice'))

    await t.click(Selector('#invoices_your_reference'))
    await t.click(Selector('#invoices_invoiceBtn'))

    await t.click(Selector('#invoices_saveDraftOption_2'))
    await t.wait(10000)
    // await t.click(Selector('#invoices_previewBtn'))
    // await t.click(Selector('#invoices_downloadPdfBtn'))
    // await t.click(Selector('#invoices_backToBtn'))
})

module.exports = {
    createOrder,
    createProductOverviewItem,
    createHourOverviewItem,
    createInvoice
}