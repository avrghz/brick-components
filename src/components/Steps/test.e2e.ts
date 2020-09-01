import { newE2EPage, E2EPage, E2EElement, EventSpy } from '@stencil/core/testing'
import stepsWithoutIcon from './__fixtures__/stepsWithoutIcon.json'
// import stepsWithIcon from './__fixtures__/stepsWithIcon.json'
import { StepComponent } from './types'

describe('<bk-steps/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getSteps = async () => await page.findAll('bk-steps .bk-step')

    const getStepIndex = async () => await page.findAll('bk-steps .bk-step .bk-step__icon')

    const getStepIndexInner = async () => await page.findAll('bk-steps .bk-step .bk-step__icon-inner')

    // const getStepIcons = async () => await page.findAll('bk-steps .bk-step iron-icon')

    const getTitles = async () => await page.findAll('bk-steps .bk-step .bk-step__title')

    const getDescriptions = async () => await page.findAll('bk-steps .bk-step .bk-step__description')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-steps/>`)
        component = await page.find('bk-steps')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
    })

    describe('@Prop steps', () => {
        beforeEach(async () => {
            component.setProperty('steps', stepsWithoutIcon)
            await page.waitForChanges()
        })

        it('should render given number of steps', async () => {
            expect((await getSteps()).length).toBe(stepsWithoutIcon.length)
        })

        it('should render with step index', async () => {
            const stepIndexes = await getStepIndex()
            stepsWithoutIcon.forEach((__: StepComponent, i: number) => {
                expect(stepIndexes[i].innerText).toBe(`${i + 1}`)
                expect(stepIndexes[i]).toHaveClass('is-text')
            })
        })

        it('should render with given title', async () => {
            ;(await getTitles()).forEach((title, i) => {
                expect(title.innerText).toBe(stepsWithoutIcon[i].title)
            })
        })

        it('should render with given description', async () => {
            ;(await getDescriptions()).forEach((description, i) => {
                expect(description.innerText).toBe(stepsWithoutIcon[i].description)
            })
        })

        it('should render with given status', async () => {
            expect((await getSteps())[0]).toHaveClass(`is-${stepsWithoutIcon[0].status}`)
        })

        // it('should render with icons', async () => {
        //     component.setProperty('steps', stepsWithIcon)
        //     await page.waitForChanges()
        //     expect((await getStepIcons()).length).toBe(stepsWithIcon.length)
        //     ;(await getStepIndex()).forEach((el) => {
        //         expect(el).toHaveClass('is-icon')
        //     })
        // })
    })

    describe('@Prop isCentered', () => {
        beforeEach(async () => {
            component.setProperty('steps', stepsWithoutIcon)
            component.setProperty('isCentered', true)
            await page.waitForChanges()
        })

        it('should render as centered, when isCentered=true', async () => {
            ;(await getSteps()).forEach((step) => {
                expect(step).toHaveClass('is-center')
            })
        })

        it('should not render as centered, when isCentered=false', async () => {
            component.setProperty('isCentered', false)
            await page.waitForChanges()
            ;(await getSteps()).forEach((step) => {
                expect(step).not.toHaveClass('is-center')
            })
        })
    })

    describe('@Prop direction', () => {
        let direction = 'horizontal'

        beforeEach(async () => {
            component.setProperty('steps', stepsWithoutIcon)
            component.setProperty('direction', direction)
            await page.waitForChanges()
        })

        it('should render horizontally, when direction=horizontal', async () => {
            ;(await getSteps()).forEach((step) => {
                expect(step).toHaveClass(`is-${direction}`)
            })
        })

        it('should render vertically, when direction=vertical', async () => {
            direction = 'vertical'
            component.setProperty('direction', direction)
            await page.waitForChanges()
            ;(await getSteps()).forEach((step) => {
                expect(step).toHaveClass(`is-${direction}`)
            })
        })
    })

    describe('@Event bkClick', () => {
        let bkClick: EventSpy

        beforeEach(async () => {
            bkClick = await component.spyOnEvent('bkClick')
        })

        it('should fire, when clicked on a step', async () => {
            component.setProperty('steps', stepsWithoutIcon)
            await page.waitForChanges()
            const stepIndexInner = await getStepIndexInner()
            await stepIndexInner[0].click()
            expect(bkClick).toHaveReceivedEventDetail(0)
        })

        // it('should not fire, when clicked on a step with wait status', async () => {
        //     const updatedSteps = [...stepsWithoutIcon]
        //     updatedSteps[0] = { ...updatedSteps[0], status: 'wait' }
        //     component.setProperty('steps', updatedSteps)
        //     await page.waitForChanges()
        //     const stepIndexInner = await getStepIndexInner()
        //     await stepIndexInner[0].click()
        //     expect(bkClick).not.toHaveBeenCalled()
        // })
    })
})
