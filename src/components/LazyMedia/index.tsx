import { Component, h, Prop, Element, Host, State } from '@stencil/core'

@Component({
    tag: 'bk-lazy-media',
    styleUrl: './index.scss',
})
export class LazyMedia {
    private lazyElement?: HTMLElement
    private observer?: IntersectionObserver

    @Element() el!: HTMLElement

    @State() isLoaded = false

    /** Background color to be shown while waiting for the image to load */
    @Prop() bgColor?: string

    async componentWillLoad() {
        this.lazyElement = this.el.firstElementChild as HTMLElement
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            this.waitForElementToBeVisible()
        } else {
            await this.loadMedia(true)
        }
    }

    disconnectedCallback() {
        if (!!this.observer) {
            this.observer.unobserve(this.el)
        }
    }

    is = (tag: 'img' | 'picture') => (!!this.lazyElement ? this.lazyElement.tagName.toLocaleLowerCase() === tag : false)

    resolveImageSource = (src: string) =>
        new Promise<string>((resolve, reject) => {
            const buffer = new Image()
            buffer.onload = () => {
                resolve(src)
            }
            buffer.onerror = () => reject()
            buffer.src = src
        })

    loadMedia = async (immediate = false) => {
        if (this.is('img')) {
            try {
                const element = this.lazyElement as HTMLImageElement
                const src = element.getAttribute('data-src') || ''
                element.src = immediate ? src : await this.resolveImageSource(src)
            } catch (e) {}
        }

        this.isLoaded = true
    }

    waitForElementToBeVisible = () => {
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

    setPreloadStyle = () =>
        !this.isLoaded && !!this.bgColor
            ? {
                  style: {
                      backgroundColor: this.bgColor,
                  },
              }
            : {}

    render() {
        return (
            <Host
                class={{
                    'is-loaded': !!this.isLoaded,
                    'is-bgColor': !this.isLoaded && !!this.bgColor,
                }}
                {...this.setPreloadStyle()}
            >
                <slot></slot>
            </Host>
        )
    }
}
