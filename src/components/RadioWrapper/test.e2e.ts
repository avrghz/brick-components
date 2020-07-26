import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-radio-wrapper/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-radio-wrapper label="Option">
             <input type="radio" aria-hidden="false" value="1" name="options" />
        </bk-radio-wrapper>`)
        component = await page.find('bk-radio-wrapper')
    })

    it('should render', async () => {
        expect(component).toMatchSnapshot('snapshot__basic')
    })
})
