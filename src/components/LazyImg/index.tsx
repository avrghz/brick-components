import { Component, h, Prop, Element, Host, State } from '@stencil/core'

@Component({
    tag: 'bk-lazy-img',
    styleUrl: './index.scss',
})
export class LazyImg {
    private lazyElement?: HTMLElement

    @Element() el!: HTMLElement

    @State() isLoaded = false

    @Prop() src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/1280px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg'

    componentWillLoad() {
        this.lazyElement = this.el.firstElementChild as HTMLElement
        //  this.contentType = this.el.firstElementChild?.tagName === 'IMG' ? 'IMAGE' : 'BG-IMAGE'
        this.waitForElementToBeVisible()
    }

    noThumbnailHandler = () => {
        if (!this.lazyElement) {
            const div = document.createElement('div')
            div.className = ''
        }
    }

    intersectionObserverCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !this.isLoaded) {
                this.isLoaded = true
                observer.unobserve(entry.target)
                if (this.lazyElement) {
                    ;(this.lazyElement as HTMLImageElement).src = this.src
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
