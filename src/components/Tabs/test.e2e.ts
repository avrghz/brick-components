import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { VARIANT, POSITION } from './types'

describe('<bk-tabs/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getTab = async (id: string) => await component.find(`bk-tab-header[tab="${id}"]`)

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`
        <bk-tabs>
            <div slot="header">
                <bk-tab-header tab="tab_1" active="true">Tab 1</bk-tab-header>
                <bk-tab-header tab="tab_2">Tab 2</bk-tab-header>
            </div>
            <bk-tab-panel tab="tab_1">Content 1</bk-tab-panel>
            <bk-tab-panel tab="tab_2">Content 2</bk-tab-panel>
        </bk-tabs>`)
        component = await page.find('bk-tabs')
    })

    it('should render', async () => {
        expect(component).toMatchSnapshot(`snapshot_overall`)
    })

    it('should change tab on click', async () => {
        const tabs = ['tab_2', 'tab_1']

        await (await getTab(tabs[0])).click()
        expect(component).toMatchSnapshot(`snapshot_${tabs[0]}_click`)

        await (await getTab(tabs[1])).click()
        expect(component).toMatchSnapshot(`snapshot_${tabs[1]}_click`)
    })

    describe('@Prop variant', () => {
        it(`if not provided, should render as simple variant`, async () => {
            expect(component).toHaveClass(`bk-tabs--simple`)
        })

        VARIANT.forEach((v) => {
            it(`should render as ${v} variant`, async () => {
                component.setProperty('variant', v)
                await page.waitForChanges()
                expect(component).toHaveClass(`bk-tabs--${v}`)
            })
        })
    })

    describe('@Prop position', () => {
        it(`if not provided, should render as top positioned`, async () => {
            expect(component).toHaveClass(`bk-tabs--top`)
        })

        POSITION.forEach((p) => {
            it(`should render as ${p} positioned`, async () => {
                component.setProperty('position', p)
                await page.waitForChanges()
                expect(component).toHaveClass(`bk-tabs--${p}`)
            })
        })
    })

    describe('@Event bkSelect', () => {
        it('should fire bkSelect event, on tab selection', async () => {
            const id = 'tab_2'
            const bkSelect = await component.spyOnEvent('bkSelect')
            await (await getTab(id)).click()
            expect(bkSelect).toHaveReceivedEventDetail(id)
        })
    })
})
