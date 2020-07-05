import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

// ! add test case for bkClose

describe('<bk-modal/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-modal open="true"></bk-modal>`)
        component = await page.find('bk-modal')
    })

    describe('Prop(open)', () => {
        it('should render modal when set to true', async () => {
            expect(component).toMatchSnapshot()
        })

        // fixme : open=false not working with test
        it('should not render modal when set to false', async () => {
            page = await newE2EPage()
            await page.setContent(`<bk-modal open="false"></bk-modal>`)
            component = await page.find('bk-modal')
            expect(component).toMatchSnapshot()
        })
    })

    describe('Prop(width)', () => {
        it(`should render with given width`, async () => {
            component.setProperty('width', 75)
            await page.waitForChanges()
            expect(component).toMatchSnapshot()
        })
    })

    describe('Prop(dismissible)', () => {
        describe('when set to false', () => {
            it(`should render not render close button`, async () => {
                component.setProperty('dismissible', false)
                await page.waitForChanges()
                expect(component).toMatchSnapshot()
            })
        })
    })
})
