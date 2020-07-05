import { newE2EPage, E2EPage, E2EElement, EventSpy } from '@stencil/core/testing'

describe('<bk-dropdown/>', () => {
    let page: E2EPage
    let component: E2EElement
    let bkOpened: EventSpy
    let bkClosed: EventSpy
    let bkMenuKeydown: EventSpy

    const getMenu = async () => await page.find('bk-dropdown >>> .bk-dropdown-menu')
    const getControlButton = async () => await page.find('bk-dropdown [slot="control"]')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-dropdown>
            <button slot="control">Control</button>
            <div slot="content">Content</div>
        </bk-dropdown>`)
        component = await page.find('bk-dropdown')
    })

    it('should render', async () => {
        component.setProperty('open', true)
        await page.waitForChanges()
        expect(component).not.toBeNull()
        expect(await page.find('bk-dropdown >>> slot[name=control]')).not.toBeNull()
        expect(await page.find('bk-dropdown >>> slot[name=content]')).not.toBeNull()
    })

    describe('Prop: open', () => {
        beforeEach(async () => {
            bkOpened = await component.spyOnEvent('bkOpened')
            bkClosed = await component.spyOnEvent('bkClosed')
            component.setProperty('open', true)
            await page.waitForChanges()
        })

        it('should open when set to true', async () => {
            expect(await getMenu()).not.toBeNull()
            expect(bkOpened).toHaveReceivedEventDetail(null)
        })

        it('should close when  set false', async () => {
            component.setProperty('open', false)
            await page.waitForChanges()
            expect(await getMenu()).toBeNull()
            expect(bkClosed).toHaveReceivedEventDetail(null)
        })
    })

    describe('Prop: disabled', () => {
        it('should render as disabled, when set to true', async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
            expect(component).toHaveClass('bk-dropdown--disabled')
        })

        it('should not render as disabled, when set to true', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(component).not.toHaveClass('bk-dropdown--disabled')
        })

        it('should close menu when disabled', async () => {
            component.setProperty('open', true)
            await page.waitForChanges()
            expect(await getMenu()).not.toBeNull()
            component.setProperty('disabled', true)
            await page.waitForChanges()
            expect(await getMenu()).toBeNull()
        })
    })

    describe('Prop: clickOutsideToClose', () => {
        beforeEach(async () => {
            component.setProperty('open', true)
            component.setProperty('clickOutsideToClose', false)
            await page.waitForChanges()
        })

        it('should not close menu when clicked outside, when set to false', async () => {
            await (await page.find('body')).click()
            await page.waitForChanges()
            expect(await getMenu()).not.toBeNull()
        })

        it('should close menu when clicked outside, when set to true', async () => {
            component.setProperty('clickOutsideToClose', true)
            await page.waitForChanges()
            await (await page.find('body')).click()
            await page.waitForChanges()
            expect(await getMenu()).toBeNull()
        })
    })

    describe('keyboard navigation', () => {
        beforeEach(async () => {
            bkMenuKeydown = await component.spyOnEvent('bkMenuKeydown')
        })

        it('should open menu on down arrow press', async () => {
            await (await getControlButton()).focus()
            await page.keyboard.press('ArrowDown')
            await page.waitForChanges()
            expect(await getMenu()).not.toBeNull()
            expect(bkMenuKeydown).toHaveReceivedEventDetail('ArrowDown')
        })

        it('should open menu on up arrow press', async () => {
            await (await getControlButton()).focus()
            await page.keyboard.press('ArrowUp')
            await page.waitForChanges()
            expect(await getMenu()).not.toBeNull()
            expect(bkMenuKeydown).toHaveReceivedEventDetail('ArrowUp')
        })

        it('should close menu on escape press', async () => {
            component.setProperty('open', true)
            await page.waitForChanges()
            const controlButton = await getControlButton()
            await controlButton.focus()
            await page.keyboard.press('Escape')
            await page.waitForChanges()
            expect(await getMenu()).toBeNull()
            expect(bkMenuKeydown).toHaveReceivedEventDetail('Escape')
        })
    })

    // ! fixme
    // describe('Listen: avCloseDropdownMenu', () => {
    //     it('should close menu when avCloseDropdownMenu is listened', async () => {
    //         component.setProperty('open', true)
    //         await page.waitForChanges()
    //         await page.evaluateOnNewDocument(async () => {
    //             document.dispatchEvent(new Event('avCloseDropdownMenu'))
    //         })
    //         expect(await getMenu()).toBeNull()
    //     })
    // })
})
