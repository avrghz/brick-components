import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { VARIANTS, SHADES } from '../../shared/types'

describe('<bk-alert/>', () => {
    let page: E2EPage
    let component: E2EElement
    const getAlertCloseButton = async () => await page.find('bk-alert .bk-alert__close-btn')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-alert>This is test</bk-alert>`)
        component = await page.find('bk-alert')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('Prop: variant', () => {
        VARIANTS.forEach((v) => {
            it(`should render as ${v}`, async () => {
                component.setProperty('variant', v)
                await page.waitForChanges()
                expect(component).toHaveClass(`bk-alert--${v}`)
            })
        })
    })

    describe('Prop: shade', () => {
        SHADES.forEach((s) => {
            it(`should render as ${s}`, async () => {
                component.setProperty('shade', s)
                await page.waitForChanges()
                expect(component).toHaveClass(`bk-alert--${s}`)
            })
        })
    })

    describe('Prop: dismissible', () => {
        it(`should show close button, by default`, async () => {
            expect(component).toHaveClass('is--dismissible')
            expect(await getAlertCloseButton()).not.toBeNull()
        })

        it(`should not show close button, when dismissible is set to false`, async () => {
            component.setProperty('dismissible', false)
            await page.waitForChanges()
            expect(component).not.toHaveClass('is--dismissible')
            expect(await getAlertCloseButton()).toBeNull()
        })
    })

    describe('Event: bkClosed', () => {
        it('should fire bkClosed event on close button click', async () => {
            const bkClosed = await component.spyOnEvent('bkClosed')
            const closeButton = await getAlertCloseButton()
            await closeButton.click()
            expect(bkClosed).toHaveReceivedEventDetail(null)
        })
    })
})
