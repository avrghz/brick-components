import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { BUTTON_VARIANTS } from '../../shared/types'

describe('<bk-pop-confirm/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getMessage = async () =>
        (await page.find('bk-pop-confirm .bk-pop-confirm focus-trap .bk-pop-confirm__message')).innerText

    const getButton = async (index: number) =>
        await page.find(`bk-pop-confirm .bk-pop-confirm__footer > button:nth-child(${index})`)

    const getPopover = async () => await page.find('bk-pop-confirm bk-popover')

    const getConfirmButton = async () => await getButton(2)

    const getCancelButton = async () => await getButton(1)

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-pop-confirm message="This is test">
            <button slot="control">Click me</button>
        </bk-pop-confirm>`)
        component = await page.find('bk-pop-confirm')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
        expect(await getPopover()).not.toBeNull()
    })

    describe('Prop: message', () => {
        it('should render with given message', async () => {
            const message = 'Hello word'
            component.setProperty('message', message)
            await page.waitForChanges()
            expect(await getMessage()).toEqual(message)
        })
    })

    describe('Confirm button', () => {
        it('should be able to change the text', async () => {
            const text = 'Button Confirm'
            component.setProperty('confirmButtonText', text)
            await page.waitForChanges()
            expect((await getConfirmButton()).innerText).toEqual(text)
        })

        BUTTON_VARIANTS.forEach((v) => {
            it(`should render as ${v}`, async () => {
                component.setProperty('confirmButtonVariant', v)
                await page.waitForChanges()
                if (v === 'default') {
                    expect(await getConfirmButton()).not.toHaveClass(`bk-button--${v}`)
                } else {
                    expect(await getConfirmButton()).toHaveClass(`bk-button--${v}`)
                }
            })
        })
    })

    describe('Cancel button', () => {
        it('should be able to change the text', async () => {
            const text = 'Button Cancel'
            component.setProperty('cancelButtonText', text)
            await page.waitForChanges()
            expect((await getCancelButton()).innerText).toEqual(text)
        })

        BUTTON_VARIANTS.forEach((v) => {
            it(`should render as ${v}`, async () => {
                component.setProperty('cancelButtonVariant', v)
                await page.waitForChanges()
                if (v === 'default') {
                    expect(await getCancelButton()).not.toHaveClass(`bk-button--${v}`)
                } else {
                    expect(await getCancelButton()).toHaveClass(`bk-button--${v}`)
                }
            })
        })
    })

    describe('Prop: disabled', () => {
        beforeEach(async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
        })

        it('should be rendered as disabled', async () => {
            expect(await (await getPopover()).getProperty('disabled')).toBeTruthy()
        })

        it('should not be rendered as disabled', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(await (await getPopover()).getProperty('disabled')).toBeFalsy()
        })
    })

    // ! Fixme
    // describe('Events', () => {
    //     it('should fire bkConfirmed on confirm button click', async () => {
    //         const bkConfirmed = await component.spyOnEvent('bkConfirmed')
    //         const button = await getConfirmButton()
    //         await button.click()
    //         expect(avConfirmed).toHaveReceivedEventDetail(null)
    //     })

    //     it('should fire bkConfirmed on confirm button click', async () => {
    //         const bkCancelled = await page.spyOnEvent('bkCancelled')
    //         const button = await getCancelButton()
    //         await button.click()
    //         expect(bkCancelled).toHaveReceivedEventDetail(null)
    //     })
    // })
})
