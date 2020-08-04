import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import COLORS from './__fixtures__/colors'
import { SIZE } from './types'

describe('<bk-rating/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-rating/>`)
        component = await page.find('bk-rating')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('@Prop() rating', () => {
        it('should render with no selected stars, when rating = 0', async () => {
            component.setProperty('rating', 0)
            await page.waitForChanges()
            expect(component).toMatchSnapshot()
        })

        it('should render with given rating', async () => {
            component.setProperty('rating', 3.5)
            await page.waitForChanges()
            expect(component).toMatchSnapshot()
        })
    })

    describe('@Prop() Size', () => {
        SIZE.forEach((size) => {
            it(`should render as ${size}`, async () => {
                component.setProperty('size', size)
                await page.waitForChanges()
                expect(component).toMatchSnapshot()
            })
        })
    })

    describe('@Prop() colors', () => {
        Object.keys(COLORS).forEach((key) => {
            it('should render with given colors', async () => {
                component.setProperty('rating', key)
                component.setProperty('colors', COLORS)
                await page.waitForChanges()
                expect(component).toMatchSnapshot()
            })
        })
    })

    describe('@Prop() asSmiley', () => {
        // tslint:disable-next-line
        ;[...Array(6).keys()].forEach((rating) => {
            it(`should render with smiley, for ${rating} rating`, async () => {
                component.setProperty('rating', rating)
                component.setProperty('asSmiley', true)
                await page.waitForChanges()
                expect(component).toMatchSnapshot()
            })
        })
    })

    describe('@Event() bkChange', () => {
        it('should fire the change event', async () => {
            const bkChange = await component.spyOnEvent('bkChange')

            component.setProperty('rating', 4)
            await page.waitForChanges()
            component.setProperty('rating', 3)
            await page.waitForChanges()

            expect(bkChange).toHaveReceivedEventDetail(3)
        })
    })
})
