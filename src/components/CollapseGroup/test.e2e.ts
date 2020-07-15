import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-collapse-group/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getPanelHeaders = async () =>
        await page.findAll('bk-collapse-group bk-collapse >>> .bk-collapse-item__header')

    const getPanels = async () => await page.findAll('bk-collapse-group bk-collapse')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-collapse-group>
            <bk-collapse>
                <span slot="header">1</span>
                <span slot="content">1</span>
            </bk-collapse>
            <bk-collapse>
                <span slot="header">2</span>
                <span slot="content">2</span>
            </bk-collapse>
            <bk-collapse>
                <span slot="header">3</span>
                <span slot="content">3</span>
            </bk-collapse>
        </bk-collapse-group>`)
        component = await page.find('bk-collapse-group')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('@Prop isAccordion', () => {
        beforeEach(async () => {
            component.setProperty('isAccordion', true)
            await page.waitForChanges()
        })

        it('should open 1 panel at a time, when isAccordion=true', async () => {
            const panelHeaders = await getPanelHeaders()
            for (let i = 0; i < panelHeaders.length; i++) {
                await panelHeaders[i].click()
                await page.waitForChanges()
                await page.waitFor(500)
                ;(await getPanels()).forEach((panel, ip) => {
                    if (ip === i) {
                        expect(panel.getAttribute('open')).toBe('')
                    } else {
                        expect(panel.getAttribute('open')).toBe('false')
                    }
                })
            }
        })

        it('should be able to open multiple panel, when isAccordion=false', async () => {
            component.setProperty('isAccordion', false)
            await page.waitForChanges()

            const panelHeaders = await getPanelHeaders()
            await panelHeaders[0].click()
            await panelHeaders[2].click()
            await page.waitForChanges()
            await page.waitFor(500)

            const panels = await getPanels()
            expect(panels[0].getAttribute('open')).toBe('')
            expect(panels[2].getAttribute('open')).toBe('')
        })
    })
})
