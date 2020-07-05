import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import { ToastMessage, Constant, POSITION } from './types'
import { Variants, VARIANTS } from '../../shared/types'

const CAP = 1000

const defaultToast = {
    title: 'Title goes here',
    message: 'Content goes here',
    variant: 'danger' as Variants,
}

const composeToast = (toast: Omit<ToastMessage, 'id'> = defaultToast) => toast

describe('<bk-toast/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getToast = async () => await page.find('bk-toast >>> .bk-toast')

    const getToastGroup = async () => await page.find('bk-toast >>> .bk-toast__group')

    const getToastCloseButton = async () => await page.find('bk-toast >>> .bk-toast__close-Btn')

    const getToastTitle = async () => await page.find('bk-toast >>> .bk-toast__title')

    const getToastContent = async () => await page.find('bk-toast >>> .bk-toast__content')

    const getToastIcon = async () => await page.find('bk-toast >>> .bk-toast__icon')

    const pushToast = async (toast?: Omit<ToastMessage, 'id'>) => {
        component.triggerEvent('$bkToast', {
            detail: toast || composeToast(toast),
        })
        await page.waitForChanges()
    }

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-toast/>`)
        component = await page.find('bk-toast')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    it('should show multiple toast', async () => {
        await pushToast()
        await pushToast()
        const toasts = await page.findAll('bk-toast >>> .bk-toast')
        expect(toasts.length).toBe(2)
    })

    describe('toast message', () => {
        beforeEach(async () => {
            component.setProperty('hideAfter', 0)
            await page.waitForChanges()
        })

        it('should show content', async () => {
            await pushToast()
            const content = await getToastContent()
            expect(content).not.toBeNull()
            expect(content.innerText).toBe(defaultToast.message)
        })

        it('should show title, when given', async () => {
            await pushToast()
            const title = await getToastTitle()
            expect(title).not.toBeNull()
            expect(title.innerText).toBe(defaultToast.title)
        })

        it('should not show title, when not given', async () => {
            await pushToast({
                message: 'This is the content',
            })
            expect(await getToastTitle()).toBeNull()
        })

        it('should show close button, by default', async () => {
            await pushToast()
            expect(await getToastCloseButton()).not.toBeNull()
        })

        it('should not show close button, when dismissible is set to false', async () => {
            await pushToast({
                ...defaultToast,
                dismissible: false,
            })
            expect(await getToastCloseButton()).toBeNull()
        })

        VARIANTS.forEach(async (v) => {
            it(`should render as ${v} variant`, async () => {
                await pushToast({
                    ...defaultToast,
                    variant: v as Variants,
                })

                const icon = await getToastIcon()

                if (v === 'default') {
                    expect(icon).toBeNull()
                } else {
                    expect(icon).not.toBeNull()
                    expect(icon).toHaveClass(`bk-toast--${v}`)
                }

                const group = await getToastGroup()
                expect(group).toHaveClass(`bk-toast--${v}`)
            })
        })

        // ! fixme
        it('should close the toast, when clicked on close button', async () => {
            // await pushToast()
            // await page.waitForChanges()
            // page.waitFor(Constant.TRANSITION_IN + CAP)
            // expect(await getToast()).not.toBeNull()
            // const button = await getToastCloseButton()
            // await button.click()
            // page.waitFor(Constant.TRANSITION_OUT + CAP)
            // expect(await getToast()).not.toBeNull()
        })
    })

    describe('prop: position', () => {
        POSITION.forEach((position) => {
            it(`should render at ${position}`, async () => {
                component.setProperty('position', position)
                await page.waitForChanges()
                expect(component).toHaveClass(`bk-toast--${position}`)
            })
        })
    })

    describe('prop: hideAfter', () => {
        it('when set to 0, should not auto close after default time', async () => {
            component.setProperty('hideAfter', 0)
            await page.waitForChanges()
            await pushToast()
            expect(await getToast()).not.toBeNull()
            await page.waitFor(Constant.HIDE_AFTER + Constant.TRANSITION_IN + Constant.TRANSITION_OUT + CAP)
            expect(await getToast()).not.toBeNull()
        })

        it('should auto close after given time', async () => {
            const timer = 500
            component.setProperty('hideAfter', timer)
            await page.waitForChanges()
            await pushToast()
            expect(await getToast()).not.toBeNull()
            await page.waitFor(timer + Constant.TRANSITION_IN + Constant.TRANSITION_OUT + CAP)
            expect(await getToast()).toBeNull()
        })
    })
})
