import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { VARIANTS } from '../../shared/types'

describe('<bk-switch/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getCheckbox = async () => await page.find('bk-switch input[type=checkbox]')
    const getSwitch = async () => await page.find('bk-switch .bk-switch')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-switch/>`)
        component = await page.find('bk-switch')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
        expect(component).toMatchSnapshot()
    })

    it('should render as disabled', async () => {
        component.setProperty('disabled', true)
        await page.waitForChanges()
        const checkbox = await getCheckbox()
        expect(await checkbox.getProperty('checked')).not.toBeTruthy()
    })

    it('should fire bkChange on every state change', async () => {
        const bkChange = await component.spyOnEvent('bkChange')
        component.click()
        await page.waitForChanges()

        expect(bkChange).toHaveReceivedEventDetail({
            isOn: true,
        })

        component.click()
        await page.waitForChanges()

        expect(bkChange).toHaveReceivedEventDetail({
            isOn: false,
        })
    })

    it('should render as checked', async () => {
        component.setProperty('isOn', true)
        await page.waitForChanges()
        const checkbox = await getCheckbox()
        expect(await checkbox.getProperty('checked')).toBeTruthy()
    })

    describe('Prop: variant', () => {
        VARIANTS.forEach((v) => {
            it(`should render as ${v}`, async () => {
                component.setProperty('variant', v)
                await page.waitForChanges()
                expect(await getSwitch()).toHaveClass(`bk-switch--${v}`)
            })
        })
    })
})
