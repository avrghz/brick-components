import { Component, h, Element } from '@stencil/core'
import { MediaType } from './types'

@Component({
    tag: 'bk-lazy-media',
    styleUrl: './index.scss',
})
export class LazyMedia {
    private elements?: NodeListOf<HTMLElement>
    private observer?: IntersectionObserver

    @Element() el!: HTMLElement

    componentWillLoad() {
        this.elements = this.el.querySelectorAll('img, video, picture, [data-bg-image]')
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            this.observer = this.createObserver()
        }
    }

    async componentDidLoad() {
        if (this.elements) {
            this.elements.forEach(async (el) => {
                if (!!this.observer) {
                    this.observer.observe(el)
                } else {
                    await this.loadMedia(el, true)
                }
            })
        }
    }

    disconnectedCallback() {
        if (this.elements) {
            this.elements.forEach(async (el) => {
                if (!!this.observer) {
                    this.observer.unobserve(el)
                }
            })
        }
    }

    is = (type: MediaType, element: HTMLElement) => {
        if (type === 'bgImage') {
            return element.hasAttribute('data-bg-image')
        }

        return element.tagName.toLocaleLowerCase() === type
    }

    resolveImageSource = (src: string) =>
        new Promise<string>((resolve, reject) => {
            const buffer = new Image()
            buffer.onload = () => resolve(src)
            buffer.onerror = () => reject()
            buffer.src = src
        })

    setSrc = async (image: HTMLImageElement | undefined, immediate: boolean) => {
        if (image) {
            const src = image.getAttribute('data-src') || ''
            image.src = immediate ? src : await this.resolveImageSource(src)
        }
    }

    setSrcset = async (sources?: NodeListOf<HTMLSourceElement>) => {
        if (sources) {
            sources.forEach((s) => (s.srcset = s.getAttribute('data-srcset') || ''))
        }
    }

    setVideoSrc = async (sources?: NodeListOf<HTMLSourceElement>) => {
        if (sources) {
            sources.forEach((s) => (s.src = s.getAttribute('data-src') || ''))
        }
    }

    setBackground = async (element: HTMLElement | undefined, immediate: boolean) => {
        if (element) {
            const src = (element.getAttribute('data-bg-image') || '').split(',')
            if (!immediate) {
                await this.resolveImageSource(src[0])
            }
            // tslint:disable-next-line
            element.style.backgroundImage = `url('${src.join("'),url('")}')`
        }
    }

    loadMedia = async (element: HTMLElement, immediate = false) => {
        try {
            if (this.is('img', element)) {
                await this.setSrc(element as HTMLImageElement, immediate)
            } else if (this.is('picture', element)) {
                await this.setSrc(element.querySelector('img') as HTMLImageElement, immediate)
                await this.setSrcset(element.querySelectorAll('source'))
            } else if (this.is('bgImage', element)) {
                await this.setBackground(element, immediate)
            } else if (this.is('video', element)) {
                await this.setVideoSrc(element.querySelectorAll('source'))
                // tslint:disable-next-line
                ;(element as HTMLVideoElement).load()
            }
        } catch (e) {}

        element.setAttribute('data-loaded', 'true')
    }

    createObserver = () => {
        return new IntersectionObserver(
            async (entries, observer) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting && !entry.target.hasAttribute('data-loaded')) {
                        observer.unobserve(entry.target)
                        await this.loadMedia(entry.target as HTMLElement)
                    }
                })
            },
            {
                threshold: 0,
            }
        )
    }

    render() {
        return <slot></slot>
    }
}
