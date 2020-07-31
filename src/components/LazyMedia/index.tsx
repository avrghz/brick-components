import { Component, h, Prop, Element, Host, State } from '@stencil/core'

@Component({
    tag: 'bk-lazy-media',
    styleUrl: './index.scss',
})
export class LazyMedia {
    private lazyElement?: HTMLElement

    @Element() el!: HTMLElement

    @State() isLoaded = false

    /** The source of the image */
    @Prop() src!: string

    /** Background color to be shown while waiting for the image to load */
    @Prop() bgColor?: string

    componentWillLoad() {
        this.lazyElement = this.el.firstElementChild as HTMLElement
        this.setPreLoadState()
        this.waitForElementToBeVisible()
    }

    setPreLoadState = () => {
        if (this.bgColor) {
            this.el.style.backgroundColor = this.bgColor
        }
    }

    removePreLoadState = () => {
        this.el.style.removeProperty('background-color')
    }

    loadImage = (src: string) =>
        new Promise<string>((resolve, reject) => {
            const buffer = new Image()
            buffer.onload = () => {
                resolve(src)
            }
            buffer.onerror = () => reject()
            buffer.src = src
        })

    intersectionObserverCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting && !this.isLoaded) {
                observer.unobserve(entry.target)
                if (this.lazyElement) {
                    try {
                        ;(this.lazyElement as HTMLImageElement).src = await this.loadImage(this.src)
                        this.isLoaded = true
                        this.removePreLoadState()
                    } catch (e) {}
                }
            }
        })
    }

    waitForElementToBeVisible = () => {
        const observer = new IntersectionObserver(this.intersectionObserverCallback, {
            threshold: 0,
        })

        observer.observe(this.el)
    }

    render() {
        return (
            <Host
                class={{
                    'is-loaded': !!this.isLoaded,
                }}
            >
                <slot></slot>
            </Host>
        )
    }
}
