import { Component, h, Element, Host, State } from '@stencil/core'
import { MediaType } from './types'

@Component({
    tag: 'bk-lazy-media',
    styleUrl: './index.scss',
})
export class LazyMedia {
    private lazyElement?: HTMLElement
    private observer?: IntersectionObserver

    @Element() el!: HTMLElement

    @State() isLoaded = false
    @State() isLoading = false

    async componentWillLoad() {
        this.lazyElement = this.el.firstElementChild as HTMLElement
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            this.waitToBeInViewPort()
        } else {
            await this.loadMedia(true)
        }
    }

    disconnectedCallback() {
        if (!!this.observer) {
            this.observer.unobserve(this.el)
        }
    }

    is = (type: MediaType) => {
        if (type === 'bgImage') {
            return this.lazyElement?.hasAttribute('data-bg-image')
        }

        return !!this.lazyElement ? this.lazyElement.tagName.toLocaleLowerCase() === type : false
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

    loadMedia = async (immediate = false) => {
        this.isLoading = true

        try {
            if (this.is('img')) {
                await this.setSrc(this.lazyElement as HTMLImageElement, immediate)
            } else if (this.is('picture')) {
                await this.setSrc(this.lazyElement?.querySelector('img') as HTMLImageElement, immediate)
                await this.setSrcset(this.lazyElement?.querySelectorAll('source'))
            } else if (this.is('bgImage')) {
                await this.setBackground(this.lazyElement, immediate)
            } else if (this.is('video')) {
                await this.setVideoSrc(this.lazyElement?.querySelectorAll('source'))
                ;(this.lazyElement as HTMLVideoElement).load()
            }
        } catch (e) {
        } finally {
            this.isLoaded = true
            this.isLoading = false
        }
    }

    waitToBeInViewPort = () => {
        this.observer = new IntersectionObserver(
            async ([entry], observer) => {
                if (entry.isIntersecting && !this.isLoaded) {
                    observer.unobserve(entry.target)
                    await this.loadMedia()
                }
            },
            {
                threshold: 0,
            }
        )

        this.observer.observe(this.el)
    }

    render() {
        return (
            <Host
                class={{
                    'is-loaded': !!this.isLoaded && !this.isLoading,
                    'is-loading': !!this.isLoading && !this.isLoaded,
                }}
            >
                <slot></slot>
            </Host>
        )
    }
}
