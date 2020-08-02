import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-lazy-media/>', () => {
    let page: E2EPage
    let component: E2EElement

    const height = 3000

    const images = {
        xl: {
            thumbnail:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Common_brimstone_%28Gonepteryx_rhamni%29_female_underside.JPG/320px-Common_brimstone_%28Gonepteryx_rhamni%29_female_underside.JPG',
            original:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Potsdam-Brauhausberg-Havelblick_2014.jpg/320px-Potsdam-Brauhausberg-Havelblick_2014.jpg',
        },
        md: {
            thumbnail:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/V%C3%A1clavsk%C3%A9-n%C3%A1m%C4%9Bst%C3%AD-Praha-sv%C3%AD%C4%8Dky-za-V%C3%A1clava-Havla20111219d.jpg/320px-V%C3%A1clavsk%C3%A9-n%C3%A1m%C4%9Bst%C3%AD-Praha-sv%C3%AD%C4%8Dky-za-V%C3%A1clava-Havla20111219d.jpg',
            original:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/07630_Geri%C5%9F_Buca%C4%9F%C4%B1-Akseki-Antalya%2C_Turkey_-_panoramio_%286%29.jpg/320px-07630_Geri%C5%9F_Buca%C4%9F%C4%B1-Akseki-Antalya%2C_Turkey_-_panoramio_%286%29.jpg',
        },
    }

    const getImage = async () => await component.find('img')

    const getSource = async () => await component.find('source')

    const getBgContainer = async () => await component.find('[data-bg-image]')

    const getAttribute = (image: E2EElement, attr: string) => image.getAttribute(attr)

    const scrollToEnd = async () =>
        await page.evaluate((_) => {
            window.scrollBy(0, 3000)
        })

    describe('Lazy load image', () => {
        beforeEach(async () => {
            page = await newE2EPage()
            await page.setContent(`
            <div style="display:flex; height: ${height}px; align-items:flex-end">
                <bk-lazy-media>
                    <img src="${images.xl.thumbnail}" data-src="${images.xl.original}"/>
                </bk-lazy-media>
            </div>`)
            component = await page.find('bk-lazy-media')
        })

        afterAll(async () => {
            await page.close()
        })

        it('should render', async () => {
            expect(component).not.toBeNull()
        })

        it('should not load the image when it is not in view port', async () => {
            expect(await component.isIntersectingViewport()).toBe(false)
            expect(getAttribute(await getImage(), 'src')).toBe(images.xl.thumbnail)
            expect(component).not.toHaveClass('is-loaded')
        })

        it('should load the image when it is in view port', async () => {
            await scrollToEnd()
            expect(await component.isIntersectingViewport()).toBe(true)
            await page.waitForChanges()
            await page.waitFor(3000)
            expect(getAttribute(await getImage(), 'src')).toBe(images.xl.original)
            expect(component).toHaveClass('is-loaded')
        })
    })

    describe('Lazy load picture', () => {
        beforeEach(async () => {
            page = await newE2EPage()
            await page.setContent(`
            <div style="display:flex; height: ${height}px; align-items:flex-end">
                <bk-lazy-media>
                    <picture>
                        <source media="(min-width: 1200px)" srcset="${images.xl.thumbnail}" data-srcset="${images.xl.original}" />
                        <img src="${images.md.thumbnail}" data-src="${images.md.original}"/>
                    </picture>
                </bk-lazy-media>
            </div>`)
            component = await page.find('bk-lazy-media')
        })

        afterAll(async () => {
            await page.close()
        })

        it('should render', async () => {
            expect(component).not.toBeNull()
        })

        it('should not load the picture when it is not in view port', async () => {
            expect(await component.isIntersectingViewport()).toBe(false)
            expect(getAttribute(await getImage(), 'src')).toBe(images.md.thumbnail)
            expect(getAttribute(await getSource(), 'srcset')).toBe(images.xl.thumbnail)
            expect(component).not.toHaveClass('is-loaded')
        })

        it('should load the picture when it is in view port', async () => {
            await scrollToEnd()
            expect(await component.isIntersectingViewport()).toBe(true)
            await page.waitForChanges()
            await page.waitFor(3000)
            expect(getAttribute(await getImage(), 'src')).toBe(images.md.original)
            expect(getAttribute(await getSource(), 'srcset')).toBe(images.xl.original)
            expect(component).toHaveClass('is-loaded')
        })
    })

    describe('Lazy load background image', () => {
        beforeEach(async () => {
            page = await newE2EPage()
            await page.setContent(`
            <div style="display:flex; height: ${height}px; align-items:flex-end">
                <bk-lazy-media>
                    <div
                        data-bg-image="${images.md.original}"
                        style="min-height: 300px;
                        background-image: url(${images.md.thumbnail});
                        background-repeat: no-repeat;
                        background-size: cover;"
                    ></div>
                </bk-lazy-media>
            </div>`)
            component = await page.find('bk-lazy-media')
        })

        afterAll(async () => {
            await page.close()
        })

        it('should render', async () => {
            expect(component).not.toBeNull()
        })

        it('should not load the background image when it is not in view port', async () => {
            expect(await component.isIntersectingViewport()).toBe(false)
            const backgroundImage = (await (await getBgContainer()).getComputedStyle()).backgroundImage
            expect(backgroundImage).toContain(images.md.thumbnail)
            expect(component).not.toHaveClass('is-loaded')
        })

        it('should load the background image when it is in view port', async () => {
            await scrollToEnd()
            expect(await component.isIntersectingViewport()).toBe(true)
            await page.waitForChanges()
            await page.waitFor(3000)
            const backgroundImage = (await (await getBgContainer()).getComputedStyle()).backgroundImage
            expect(backgroundImage).toContain(images.md.original)
            expect(component).toHaveClass('is-loaded')
        })
    })
})
