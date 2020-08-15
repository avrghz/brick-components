import { html } from 'lit-html'

type Component = ReturnType<typeof html>

const data = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]

export default {
    title: 'Atoms/Table',
    component: 'table',
}

const colGroup = html`
    <colgroup>
        <col style="width:150px"></col>
        <col style="width:200px"></col>
        <col style="width:150px"></col>
        <col style="width:150px"></col>
        <col style="width:400px"></col>
        <col style="width:150px"></col>
    </colgroup>
`

const title = (heading: string) => html`<div class="bk-row mb-4">
    <h2 class="bk-col-24">${heading}</h2>
</div>`

const wrapper = (content: Component) => html`
    <div class="bk-row mb-8">
        <div class="bk-col-24 bk-col-md-20 bk-col-lg-18">
            ${content}
        </div>
    </div>
`

const tableWrap = (content: [Component, Component], css: string[] = []) => html`
    <div class="bk-table bk-table--hover bk-table--responsive ${css.join(' ')}">
        <table cellspacing="0" cellpadding="0">
            ${content}
        </table>
    </div>
`

const thead = html`
    <thead>
        <tr>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">Date</div>
            </th>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">Name</div>
            </th>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">City</div>
            </th>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">State</div>
            </th>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">Address</div>
            </th>
            <th scope="col" colspan="1" rowspan="1">
                <div class="cell">Zip</div>
            </th>
        </tr>
    </thead>
`

const tBody = html`
    <tbody>
        ${data.map(
            (item) => html`<tr class="bk-table__row">
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.date}</div>
                </td>
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.name}</div>
                </td>
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.state}</div>
                </td>
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.city}</div>
                </td>
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.address}</div>
                </td>
                <td colspan="1" rowspan="1">
                    <div class="cell">${item.zip}</div>
                </td>
            </tr>`
        )}
    </tbody>
`

export const Basic = () => wrapper(tableWrap([thead, tBody]))

export const Stripped = () => wrapper(tableWrap([thead, tBody], ['bk-table--striped']))

export const Bordered = () => wrapper(tableWrap([thead, tBody], ['bk-table--border']))

export const FixedHeader = () =>
    html`${[
        title('Fixed header'),
        wrapper(html`
            <div class="bk-table bk-table--fit bk-table--hover bk-table--responsive bk-table--fixed-header">
                <div style="min-width:800px">
                    <table cellspacing="0" cellpadding="0">
                        ${colGroup} ${thead}
                    </table>
                    <div style="max-height: 139px" class="bk-scroll-y">
                        <table cellspacing="0" cellpadding="0">
                            ${colGroup} ${tBody}
                        </table>
                    </div>
                </div>
            </div>
        `),
    ]}`

export const Size = () => html`
    ${[
        title('Medium'),
        wrapper(tableWrap([thead, tBody], ['bk-table--medium'])),
        title('Small'),
        wrapper(tableWrap([thead, tBody], ['bk-table--small'])),
        title('Mini'),
        wrapper(tableWrap([thead, tBody], ['bk-table--mini'])),
    ]}
`

const getStatus = (index: number) => {
    switch (index) {
        case 0:
            return 'is-danger'
        case 1:
            return 'is-warning'
        case 2:
            return 'is-info'
        case 3:
            return 'is-success'
    }

    return ''
}

export const Status = () =>
    wrapper(
        tableWrap([
            thead,
            html` <tbody>
                ${data.map(
                    (item, i) => html`<tr class="bk-table__row ${getStatus(i)}">
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.date}</div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.name}</div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.state}</div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.city}</div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.address}</div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="cell">${item.zip}</div>
                        </td>
                    </tr>`
                )}
            </tbody>`,
        ])
    )
