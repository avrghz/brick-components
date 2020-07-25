import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { VARIANTS } from '../../shared/types'

describe('<bk-slider/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-slider/>`)
        component = await page.find('bk-slider')
    })

    const getDragButton = async () => await page.find('bk-slider >>> .bk-slider__button')
    const getTooltip = async () => await page.find('bk-slider >>> bk-popover')
    const getSlider = async () => await page.find('bk-slider >>> .bk-slider')

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('Prop: disabled', () => {
        it('should render as disabled, when set to true', async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
            expect(await getSlider()).toHaveClass(`bk-slider--disabled`)
        })

        it('should render as not disabled, when set to false', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(await getSlider()).not.toHaveClass(`bk-slider--disabled`)
        })
    })

    describe('Prop: variant', () => {
        VARIANTS.forEach((variant) => {
            it(`it should render as ${variant}`, async () => {
                component.setProperty('variant', variant)
                await page.waitForChanges()
                expect(await getSlider()).toHaveClass(`bk-slider--${variant}`)
            })
        })
    })

    describe('Prop: showTooltip', () => {
        it('should not show tooltip, when set to false', async () => {
            component.setProperty('showTooltip', false)
            await page.waitForChanges()
            const dragButton = await getDragButton()
            dragButton.focus()
            await page.waitForChanges()
            expect(await getTooltip()).toBeNull()
        })

        it('should not show tooltip, when set to true', async () => {
            component.setProperty('showTooltip', true)
            await page.waitForChanges()
            const dragButton = await getDragButton()
            dragButton.focus()
            await page.waitForChanges()
            expect(await getTooltip()).not.toBeNull()
        })
    })

    describe('Prop: value', () => {
        it('should render with given value', async () => {
            component.setProperty('value', 50)
            await page.waitForChanges()
            await page.waitForChanges()
            expect(component).toMatchSnapshot()
        })

        it('should be able to click on bar to set the value', async () => {
            await (await getSlider()).click()
            await page.waitForChanges()
        })
    })

    describe('Prop: step', () => {
        it('should move by given `step`', async () => {
            const bkChange = await component.spyOnEvent('bkChange')

            component.setProperty('step', 10)
            await page.waitForChanges()
            const dragButton = await getDragButton()
            const tooltip = await getTooltip()

            await dragButton.press('ArrowUp')
            await page.waitForChanges()
            expect(tooltip.innerText).toBe('10')

            await dragButton.press('ArrowRight')
            await page.waitForChanges()
            expect(tooltip.innerText).toBe('20')

            await dragButton.press('ArrowDown')
            await page.waitForChanges()
            expect(tooltip.innerText).toBe('10')

            await dragButton.press('ArrowLeft')
            await page.waitForChanges()
            expect(tooltip.innerText).toBe('0')

            expect(bkChange).toHaveNthReceivedEventDetail(0, 10)
            expect(bkChange).toHaveNthReceivedEventDetail(1, 20)
            expect(bkChange).toHaveNthReceivedEventDetail(2, 10)
            expect(bkChange).toHaveNthReceivedEventDetail(3, 0)
        })
    })
})
