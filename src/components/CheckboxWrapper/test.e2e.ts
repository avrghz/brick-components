import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-checkbox-wrapper/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getLabel = async () => await page.find('bk-checkbox-wrapper .bk-checkbox')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-checkbox-wrapper label="Option">
            <input type="checkbox" aria-hidden="false" value="option" name="options" />
        </bk-checkbox-wrapper>`)
        component = await page.find('bk-checkbox-wrapper')
    })

    it('should render', async () => {
        expect(component).toMatchSnapshot('snapshot__basic')
    })

    describe('@Prop indeterminate', () => {
        beforeEach(async () => {
            component.setProperty('indeterminate', true)
            await page.waitForChanges()
        })

        it('should render in indeterminate state', async () => {
            expect(await getLabel()).toHaveClass('is-indeterminate')
        })

        it('should disable indeterminate state on click', async () => {
            await component.click()
            await page.waitForChanges()
            expect(await getLabel()).not.toHaveClass('is-indeterminate')
        })
    })
})
