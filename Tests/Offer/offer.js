import { appURL } from '../../AppURL'
import { microsoftLogin, microsoftLoginGuestUser, user_01 } from '../../roles'
import { Selector, t } from 'testcafe'


fixture `offer module`
.beforeEach(async t => {
	
    await t.setNativeDialogHandler(() => true)
    await t.useRole(user_01)
    await t.maximizeWindow()
})
test('add newOffer' , async t => {
 

    await t.navigateTo(`${appURL}/offers`)
    await t.wait(1000)

    
    await t.click('#DIGITOOL_select_language')
    await t.click('#DIGITOOL_language_en')

    await t.click('#customers_addNew')
    await t.typeText('#offers_name', 'New Offer',{replace: true })

    await t.typeText('#offers_customer_id', 'D',{replace: true })
    await t.click('#customer_id_116')

    await t.typeText('#offers_contact_id', '785784356',{replace: true })

    await t.click('#offers_our_reference')
    await t.click('#our_reference_39')

    await t.typeText('#offers_your_reference', 'Rosy',{replace: true })
    await t.wait(1000)

    
    await t.doubleClick(Selector('#offers_startdate'))
    await t.wait(1000)
    let desiredDate = Selector('#offers_startdate_picker div').withText('28').nth(3)
    while(!desiredDate) {
        await t.click(Selector('#offers_startdate'))
        await t.wait(1000)
        desiredDate = Selector('#offers_startdate_picker div').withText('28').nth(3)
    }
    await t.click(desiredDate)
 

    await t.click(Selector('#offers_enddate'))
    await t.wait(1000)
    let endDate = await Selector('#offers_enddate_picker div').withText('30').nth(3)
    while(!endDate) {
        await t.click(Selector('#offers_enddate'))
        await t.wait(1000)
        endDate = Selector('#offers_enddate_picker div').withText('30').nth(3)
    }
    await t.click(endDate)

    await t.click('#offers_status')
    await t.click('#status_2')

    .click('#offers_payment_term')
    .click('#paymentTerm_option_15') 

    await t.click('#offers_project_id')
    await t.click('#project_id_8')

    await t.click('#offers_projectlead_id')
    await t.click('#projectlead_id_37')

    await t.click('#offers_type')
    await t.click('#type_7')

    await t.typeText('#offers_description', 'its a sale offer for the heatingpump',{replace: true })
    await t.typeText('#offers_comments', 'Here is the PDF comments on the offer on heating pump',{replace: true })

    .click('#offers_building_id')
    .click('#offers_building_option_411') 

    .click('#offers_equipment_id')
    .click('#offers_equipment_option_119') 

    await t.click('#offers_action_handler')

    await t.click('#offers_type')
    await t.click('#type_3')

    await t.click('#offers_action_handler')

    await t.click('#offertab_offeroverview')

})