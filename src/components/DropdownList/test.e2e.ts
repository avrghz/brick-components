import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'
import data from './__fixtures__/options.json'

describe('<bk-dropdown-list/>', () => {
    let page: E2EPage
    let component: E2EElement

    const getDropdown = async () => await component.find('bk-dropdown')
    const getContent = async () => await component.find('.bk-dropdown-list__content')
    const getSearchBar = async () => await component.find('.bk-dropdown-list__search input[type=text]')
    const getListItems = async () => await component.findAll('.bk-dropdown-list__item a')

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<bk-dropdown-list/>`)
        component = await page.find('bk-dropdown-list')
    })

    it('should render', async () => {
        expect(component).not.toBeNull()
        expect(await getDropdown()).not.toBeNull()
    })

    describe('Prop: noOptionText', () => {
        it('should show no option text, when options prop is not provided', async () => {
            const text = 'No Option'
            component.setProperty('noOptionText', text)
            await page.waitForChanges()
            expect((await getContent()).innerText).toBe(text)
        })
    })

    describe('Prop: disabled', () => {
        beforeEach(async () => {
            component.setProperty('disabled', true)
            await page.waitForChanges()
        })

        it('should disable component, when disabled = true', async () => {
            expect(await (await getDropdown()).getProperty('disabled')).toBeTruthy()
        })

        it('should enable component, when disabled = false', async () => {
            component.setProperty('disabled', false)
            await page.waitForChanges()
            expect(await (await getDropdown()).getProperty('disabled')).toBeFalsy()
        })
    })

    describe('Prop: searchable', () => {
        beforeEach(async () => {
            component.setProperty('searchable', true)
            await page.waitForChanges()
        })

        it('should show search bar, when searchable = true', async () => {
            expect(await getSearchBar()).not.toBeNull()
        })

        it('should not show search bar, when searchable = false', async () => {
            component.setProperty('searchable', false)
            await page.waitForChanges()
            expect(await getSearchBar()).toBeNull()
        })
    })

    describe('Prop: options', () => {
        const disabledIndex = 0
        beforeEach(async () => {
            const updatedOptions = [...data]
            updatedOptions[disabledIndex].disabled = true
            component.setProperty('options', JSON.stringify(updatedOptions))
            await page.waitForChanges()
        })

        it('Should render given options', async () => {
            expect((await getListItems()).length).toBe(data.length)
        })

        it('Should render disabled option', async () => {
            const listItems = await getListItems()
            expect(listItems[disabledIndex].classList.contains('is-disabled')).toBeTruthy()
        })
    })

    describe('Prop: selectedOption', () => {
        const selectedIndex = 2
        const disabledIndex = 0

        beforeEach(async () => {
            const updatedOptions = [...data]
            updatedOptions[disabledIndex].disabled = true
            component.setProperty('options', JSON.stringify(data))
            await page.waitForChanges()
        })

        it('Should set selected option', async () => {
            component.setProperty('selectedOption', data[selectedIndex].value)
            await page.waitForChanges()
            const listItems = await getListItems()
            expect(listItems[selectedIndex].classList.contains('is-active')).toBeTruthy()
        })

        it('Should not set a disabled option as selected option', async () => {
            component.setProperty('selectedOption', data[disabledIndex].value)
            await page.waitForChanges()
            const listItems = await getListItems()
            expect(listItems[disabledIndex].classList.contains('is-active')).toBeFalsy()
        })
    })
})
