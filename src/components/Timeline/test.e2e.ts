import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-timeline/>', () => {
    let page: E2EPage
    let component: E2EElement

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-timeline>
            <bk-timeline-item time="01-01-2020 19:20" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:20</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:35" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:35</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:50" variant="danger">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:50</p>
            </bk-timeline-item>
        </bk-timeline>`)
        component = await page.find('bk-timeline')
    })

    it('should render', async () => {
        expect(component).toMatchSnapshot()
    })
})
