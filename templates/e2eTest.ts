import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<{{prefix}}-{{tag}}/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<{{prefix}}-{{tag}}/>`)
        component = await page.find('{{prefix}}-{{tag}}')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })
})
