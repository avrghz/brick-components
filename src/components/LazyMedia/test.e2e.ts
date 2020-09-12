import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('<bk-lazy-media/>', () => {
    let page: E2EPage
    let component: E2EElement

    const height = 3000
    const wait = 5000

    const images = {
        xl: {
            thumbnail: 'https://picsum.photos/seed/77/9/6?grayscale',
            original: 'https://picsum.photos/seed/77/900/600?grayscale',
        },
        md: {
            thumbnail: 'https://picsum.photos/seed/77/7/4?grayscale',
            original: 'https://picsum.photos/seed/$77/700/400?grayscale',
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
            // fixme
            // expect(component).not.toHaveAttribute('data-loaded')
        })

        // fixme
        // it('should load the image when it is in view port', async () => {
        //     await scrollToEnd()
        //     expect(await component.isIntersectingViewport()).toBe(true)
        //     await page.waitForChanges()
        //     await page.waitFor(wait)
        //     expect(getAttribute(await getImage(), 'src')).toBe(images.xl.original)
        //     // expect(component).toHaveAttribute('data-loaded')
        // })
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
            // fixme
            //   expect(component).not.toHaveAttribute('data-loaded')
        })

        // fixme
        // it('should load the picture when it is in view port', async () => {
        //     await scrollToEnd()
        //     expect(await component.isIntersectingViewport()).toBe(true)
        //     await page.waitForChanges()
        //     await page.waitFor(wait)
        //     expect(getAttribute(await getImage(), 'src')).toBe(images.md.original)
        //     expect(getAttribute(await getSource(), 'srcset')).toBe(images.xl.original)
        //     //   expect(component).toHaveAttribute('data-loaded')
        // })
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
            // fixme
            //   expect(component).not.toHaveAttribute('data-loaded')
        })

        // fixme
        // it('should load the background image when it is in view port', async () => {
        //     await scrollToEnd()
        //     expect(await component.isIntersectingViewport()).toBe(true)
        //     await page.waitForChanges()
        //     await page.waitFor(wait)
        //     const backgroundImage = (await (await getBgContainer()).getComputedStyle()).backgroundImage
        //     expect(backgroundImage).toContain(images.md.original)
        //     //   expect(component).toHaveAttribute('data-loaded')
        // })
    })

    describe('Lazy load video', () => {
        const source = 'xyz'
        beforeEach(async () => {
            jest.spyOn(console, 'error').mockImplementation(() => {})
            page = await newE2EPage()
            await page.setContent(`
            <div style="display:flex; height: ${height}px; align-items:flex-end">
                <bk-lazy-media>
                    <bk-lazy-media>
                        <video controls poster="${images.xl.original}" style="width:100%">
                            <source data-src="${source}" type="video/mp4" />
                        </video>
                    </bk-lazy-media>
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

        it('should not load the video when it is not in view port', async () => {
            expect(await component.isIntersectingViewport()).toBe(false)
            expect(getAttribute(await getSource(), 'src')).toBeNull()
            // fixme
            //   expect(component).not.toHaveAttribute('data-loaded')
        })

        // fixme
        // it('should load the video when it is in view port', async () => {
        //     await scrollToEnd()
        //     expect(await component.isIntersectingViewport()).toBe(true)
        //     await page.waitForChanges()
        //     expect(getAttribute(await getSource(), 'src')).toBe(source)
        //     //    expect(component).toHaveAttribute('data-loaded')
        // })
    })
})
