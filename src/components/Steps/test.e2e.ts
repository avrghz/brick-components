import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-steps/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-steps/>`)
        component = await page.find('bk-steps')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })
})