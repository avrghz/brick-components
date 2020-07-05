import { newE2EPage, E2EPage, E2EElement, EventSpy } from '@stencil/core/testing'

describe('<bk-popover/>', () => {
    let page: E2EPage
    let component: E2EElement
    let bkOpened: EventSpy
    let bkClosed: EventSpy

    const getPopover = async () => await page.find('bk-popover >>> .bk-popover')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`
        <bk-popover>
            <button slot="control">Popover</button>
            <div slot="content">Popover content</div>
        </bk-popover>`)
        component = await page.find('bk-popover')
    })

    describe('Prop: show', () => {
        beforeEach(async () => {
            bkOpened = await component.spyOnEvent('bkOpened')
            bkClosed = await component.spyOnEvent('bkClosed')
            component.setProperty('show', true)
            await page.waitForChanges()
        })

        it('should open when set to true', async () => {
            expect(await getPopover()).not.toBeNull()
            expect(bkOpened).toHaveReceivedEventDetail(null)
        })

        it('should close when  set false', async () => {
            component.setProperty('show', false)
            await page.waitForChanges()
            expect(await getPopover()).toBeNull()
            expect(bkClosed).toHaveReceivedEventDetail(null)
        })
    })

    describe('Prop: disabled', () => {
        it('should render as disabled, when set to true', async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
            expect(component).toHaveClass('bk-popover--disabled')
        })

        it('should not render as disabled, when set to true', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(component).not.toHaveClass('bk-popover--disabled')
        })
    })

    describe('Prop: triggerOn', () => {
        describe('click', () => {
            beforeEach(async () => {
                bkOpened = await component.spyOnEvent('bkOpened')
                bkClosed = await component.spyOnEvent('bkClosed')
                component.setProperty('triggerOn', 'click')
                await page.waitForChanges()
                await component.click()
                await page.waitForChanges()
            })

            it('should open on click', async () => {
                expect(await getPopover()).not.toBeNull()
                expect(bkOpened).toHaveReceivedEventDetail(null)
            })

            it('should close on clicking again', async () => {
                await component.click()
                await page.waitForChanges()
                expect(await getPopover()).toBeNull()
                expect(bkClosed).toHaveReceivedEventDetail(null)
            })
        })

        describe('focus', () => {
            beforeEach(async () => {
                bkOpened = await component.spyOnEvent('bkOpened')
                bkClosed = await component.spyOnEvent('bkClosed')
                component.setProperty('triggerOn', 'focus')
                await page.waitForChanges()
                await (await component.find('[slot=control]')).focus()
                await page.waitForChanges()
            })

            it('should open on focus', async () => {
                expect(await getPopover()).not.toBeNull()
                expect(bkOpened).toHaveReceivedEventDetail(null)
            })

            it('should close on focus out', async () => {
                await (await page.find('body')).click()
                await page.waitForChanges()
                expect(await getPopover()).toBeNull()
                expect(bkClosed).toHaveReceivedEventDetail(null)
            })
        })

        describe('hover', () => {
            beforeEach(async () => {
                bkOpened = await component.spyOnEvent('bkOpened')
                bkClosed = await component.spyOnEvent('bkClosed')
                component.setProperty('triggerOn', 'hover')
                await page.waitForChanges()
                await component.hover()
                await page.waitForChanges()
            })

            it('should open on hover', async () => {
                expect(await getPopover()).not.toBeNull()
                expect(bkOpened).toHaveReceivedEventDetail(null)
            })

            it('should close on mouse out', async () => {
                await (await page.find('body')).click()
                await page.waitForChanges()
                expect(await getPopover()).toBeNull()
                expect(bkClosed).toHaveReceivedEventDetail(null)
            })
        })
    })
})
