import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { SHADOW } from './types'

describe('<bk-card/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-card>
            <div slot="header">Card Heading</div>
            <div slot="body">Hello world</div>
        </bk-card>`)
        component = await page.find('bk-card')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
        expect(await page.find('bk-card [slot=header]')).not.toBeNull()
        expect(await page.find('bk-card [slot=body]')).not.toBeNull()
    })

    describe('Prop: shadow', () => {
        SHADOW.forEach((s) => {
            it(`should show shadow - ${s}`, async () => {
                component.setProperty('shadow', s)
                await page.waitForChanges()
                expect(await page.find('bk-card')).toHaveClass(`is-${s}-shadow`)
            })
        })
    })
})
