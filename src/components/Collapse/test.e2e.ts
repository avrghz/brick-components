import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-collapse/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getHeader = async () => await page.find('bk-collapse >>> .bk-collapse-item__header')

    const getPanel = async () => await page.find('bk-collapse >>> .bk-collapse-item__wrap')

    const waitForAnimation = async () => await page.waitFor(1000)

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-collapse/>`)
        component = await page.find('bk-collapse')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('@Prop open', () => {
        beforeEach(async () => {
            component.setProperty('open', true)
            await page.waitForChanges()
        })

        it('should open the panel, when open=true', async () => {
            expect(await getPanel()).not.toBeNull()
        })

        it('should close the panel, when open=false', async () => {
            component.setProperty('open', false)
            await page.waitForChanges()
            await waitForAnimation()
            expect(await getPanel()).toBeNull()
        })

        it('should toggle the panel, when clicked on header', async () => {
            const header = await getHeader()

            header.click()
            await page.waitForChanges()
            await waitForAnimation()
            expect(await getPanel()).toBeNull()

            header.click()
            await page.waitForChanges()
            expect(await getPanel()).not.toBeNull()
        })
    })

    describe('@Prop disabled', () => {
        beforeEach(async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
        })

        it('should disable when disabled = true', () => {
            expect(component).toHaveClass('is-disabled')
        })

        it('should enable when disabled = false', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(component).not.toHaveClass('is-disabled')
        })
    })

    describe('@Event', () => {
        it('should fire right events', async () => {
            const bkOpened = await component.spyOnEvent('bkOpened')
            const bkClosed = await component.spyOnEvent('bkClosed')

            component.setProperty('open', true)
            await page.waitForChanges()
            await waitForAnimation()
            expect(bkOpened).toHaveReceivedEventDetail(null)

            component.setProperty('open', false)
            await page.waitForChanges()
            await waitForAnimation()
            expect(bkClosed).toHaveReceivedEventDetail(null)
        })
    })
})
