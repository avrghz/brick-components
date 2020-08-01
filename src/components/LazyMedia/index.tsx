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

    setSrc = async (image: HTMLImageElement | undefined, immediate = false) => {
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

    loadMedia = async (immediate = false) => {
        try {
            if (this.is('img')) {
                await this.setSrc(this.lazyElement as HTMLImageElement, immediate)
            } else if (this.is('picture')) {
                await this.setSrc(this.lazyElement?.querySelector('img') as HTMLImageElement, immediate)
                await this.setSrcset(this.lazyElement?.querySelectorAll('source'))
            }
        } catch (e) {
        } finally {
            this.isLoaded = true
        }
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
