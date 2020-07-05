import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { VARIANTS } from '../../shared/types'
import { BAR_TYPE } from './types'

describe('<bk-progress-bar/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getProgressBar = async () => await page.find('bk-progress-bar >>> .bk-progress')

    const getProgressText = async () => await page.find('bk-progress-bar >>> .bk-progress__text')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-progress-bar progress="75"/>`)
        component = await page.find('bk-progress-bar')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('Prop: progress', () => {
        it(`it should render with given progress percentage`, async () => {
            component.setProperty('progress', 10)
            await page.waitForChanges()
            expect(await getProgressBar()).toMatchSnapshot('prop_progress')
        })
    })

    describe('Prop: showPercentageText', () => {
        BAR_TYPE.forEach((type) => {
            it(`should not show percentage text, when set to false for ${type} bar`, async () => {
                component.setProperty('variant', type)
                component.setProperty('showPercentageText', false)
                await page.waitForChanges()
                expect(await getProgressText()).toBeNull()
            })

            it(`should show percentage text, when set to true for ${type} bar`, async () => {
                component.setProperty('variant', type)
                component.setProperty('showPercentageText', true)
                await page.waitForChanges()
                expect(await getProgressText()).not.toBeNull()
            })
        })
    })

    describe('Prop: textInside', () => {
        it('should render with percentage inside the bar, when set to true', async () => {
            component.setProperty('textInside', true)
            await page.waitForChanges()
            const innerText = await (await (await getProgressBar()).find('.bk-progress-bar')).find('.bk-progress__text')
            expect(innerText).not.toBeNull()
        })

        it('should render with percentage outside the bar, when set to false', async () => {
            component.setProperty('textInside', false)
            await page.waitForChanges()
            const innerText = await (await (await getProgressBar()).find('.bk-progress-bar')).find('.bk-progress__text')
            const outerText = await getProgressText()
            expect(outerText).not.toBeNull()
            expect(innerText).toBeNull()
        })
    })

    describe('Prop: variant', () => {
        VARIANTS.forEach((variant) => {
            it(`it should render as ${variant}`, async () => {
                component.setProperty('variant', variant)
                await page.waitForChanges()
                expect(await getProgressBar()).toHaveClass(variant)
            })
        })
    })

    describe('Prop: barType', () => {
        BAR_TYPE.forEach((type) => {
            it(`it should render as ${type}`, async () => {
                component.setProperty('barType', type)
                await page.waitForChanges()
                expect(await getProgressBar()).toMatchSnapshot('prop_bar_type')
            })
        })
    })
})
