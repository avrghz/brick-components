import { Component, h, Prop, Element, Host, State } from '@stencil/core'

@Component({
    tag: 'bk-lazy-img',
    styleUrl: './index.scss',
})
export class LazyImg {
    private lazyElement?: HTMLElement

    @Element() el!: HTMLElement

    @State() isLoaded = false

    @Prop() src!: string

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
        new Promise<HTMLImageElement>((resolve, reject) => {
            const buffer = new Image()
            buffer.onload = () => {
                resolve(buffer)
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
                        await this.loadImage(this.src)
                        this.isLoaded = true
                        this.removePreLoadState()
                        ;(this.lazyElement as HTMLImageElement).src = this.src
                    } catch (e) {}
                }
            }
        })
    }

    waitForElementToBeVisible = () => {
        const observer = new IntersectionObserver(this.intersectionObserverCallback, {
            threshold: 0.25,
        })

        observer.observe(this.el)
    }

    render() {
        return (
            <Host
                class={{
                    'bk-lazy-img': true,
                    'is-loaded': !!this.isLoaded,
                }}
            >
                <slot></slot>
            </Host>
        )
    }
}
