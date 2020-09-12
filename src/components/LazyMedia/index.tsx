import { Component, h, Element } from '@stencil/core'
import { MediaType } from './types'

const ELEMENTS = ['img', 'video', 'picture', '[data-bg-image]'].reduce(
    (acc: string, item) =>
        `${acc === '$$$' ? `` : `${acc},`} ${item}:not([data-loaded=true]):not([data-observed=true])`,
    '$$$'
)

@Component({
    tag: 'bk-lazy-media',
    styleUrl: './index.scss',
})
export class LazyMedia {
    private observer?: IntersectionObserver
    private watcher?: MutationObserver

    @Element() el!: HTMLElement

    componentWillLoad() {
        if (typeof window !== 'undefined' && window.IntersectionObserver && window.MutationObserver) {
            this.watcher = this.setWatcher()
            this.watcher.observe(this.el, {
                childList: true,
                subtree: true,
            })
            this.observer = this.createObserver()
        }
    }

    disconnectedCallback() {
        this.observer?.disconnect()
        this.watcher?.disconnect()
    }

    getAllElements = (node: HTMLElement) => node.querySelectorAll(ELEMENTS) as NodeListOf<HTMLElement>

    manageObserver = (status: 'ADD' | 'REMOVE') => (node: Node) => {
        if (node instanceof HTMLElement) {
            this.getAllElements(node).forEach(async (el) => {
                if (status === 'ADD') {
                    if (!el.hasAttribute('data-observed') && !el.hasAttribute('data-loaded')) {
                        el.setAttribute('data-observed', 'true')
                        this.observer?.observe(el)
                    }
                } else {
                    this.observer?.unobserve(el)
                }
            })
        }
    }

    setWatcher = () =>
        new MutationObserver((entries) =>
            entries.forEach((entry) => {
                entry.addedNodes.forEach(this.manageObserver('ADD'))
                entry.removedNodes.forEach(this.manageObserver('REMOVE'))
            })
        )

    is = (type: MediaType, element: HTMLElement) =>
        type === 'bgImage' ? element.hasAttribute('data-bg-image') : element.tagName.toLocaleLowerCase() === type

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

    createObserver = () =>
        new IntersectionObserver(
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

    render() {
        return <slot></slot>
    }
}
