import { Component, h, State, Prop } from '@stencil/core'

@Component({
    tag: 'bk-lazy-img',
    shadow: true,
    styleUrl: './index.scss',
})
export class LazyImg {
    private thumbnailRef?: HTMLImageElement
    @State() ready = false

    @Prop() src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/1280px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg'

    @Prop() thumbnail =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/320px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg'

    componentWillLoad() {
        this.loadImage()
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.thumbnailRef) {
                this.thumbnailRef.style.opacity = '0'
                this.thumbnailRef.style.transform = 'scale(1)'
            }
        }, 500)
    }

    loadImage = () => {
        const buffer = new Image()
        buffer.onload = () => (this.ready = true)
        // buffer.onerror = () => {}
        buffer.src = this.src
    }

    render() {
        return (
            <figure class="bk-lazy-img">
                <div>
                    {this.ready && <img class="bk-lazy-img__image is-original" src={this.src} />}
                    <img
                        class="bk-lazy-img__image is-thumbnail"
                        src={this.thumbnail}
                        ref={(el) => (this.thumbnailRef = el)}
                    ></img>
                </div>
            </figure>
        )
    }
}
