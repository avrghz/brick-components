import { Component, h, State, Prop, Element } from '@stencil/core'

@Component({
    tag: 'bk-lazy-img',
    shadow: true,
    styleUrl: './index.scss',
})
export class LazyImg {
    private thumbnailRef?: HTMLImageElement

    @Element() el!: HTMLElement

    @State() ready = false

    @Prop() src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/1280px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg'

    @Prop() thumbnail =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/320px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg'

    componentWillLoad() {
        this.waitForElementToBeVisible()
    }

    componentDidUpdate() {
        if (this.ready) {
            if (this.thumbnailRef) {
                this.thumbnailRef.style.opacity = '0'
                this.thumbnailRef.style.transform = 'scale(1)'
            }
        }
    }

    intersectionObserverCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !this.ready) {
                observer.unobserve(entry.target)
                this.ready = true
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
            <figure class="bk-lazy-img">
                <img
                    class={{
                        'bk-lazy-img__image': true,
                        'is-thumbnail': !this.ready,
                    }}
                    src={this.ready ? this.src : this.thumbnail}
                />
            </figure>
        )
    }
}
