import { html } from 'lit-html'

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
    title: 'Atoms',
    component: 'table',
}

const header = (heading: string) => html`<div class="bk-row mb-4">
    <h2 class="bk-col-24">${heading}</h2>
</div>`

const colGroup = html`
    <colgroup>
        <col style="width:125px"></col>
        <col style="width:200px"></col>
        <col style="width:150px"></col>
        <col style="width:150px"></col>
        <col style="width:400px"></col>
        <col style="width:100px"></col>
    </colgroup>
`

const tableHeader = html`
    <div class="bk-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" class="bk-table__header">
            ${colGroup}
            <thead>
                <tr>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">Date</div>
                    </th>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">Name</div>
                    </th>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">City</div>
                    </th>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">State</div>
                    </th>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">Address</div>
                    </th>
                    <th scope="col" colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">Zip</div>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
`

const tableBody = (content: ReturnType<typeof html>[], style = '') => html`<div
    class="bk-table__body-wrapper is-scrolling-none"
    style=${style}
>
    <table cellspacing="0" cellpadding="0" class="bk-table__body">
        ${colGroup}
        <tbody>
            ${content}
        </tbody>
    </table>
</div>`

const tableRecords = () => {
    return data.map(
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
    )
}

const xScroll = (content: ReturnType<typeof html>) => html`
    <div style="overflow-x:auto;">
        ${content}
    </div>
`

export const Table = () => {
    return html`
        ${header('Basic')}
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                ${xScroll(html` <div
                    class="bk-table bk-table--fit bk-table--enable-row-hover bk-table--enable-row-transition"
                    style="min-width:825px"
                >
                    ${tableHeader} ${tableBody(tableRecords())}
                </div>`)}
            </div>
        </div>

        ${header('Striped')}
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                ${xScroll(html` <div
                    class="bk-table bk-table--fit bk-table--striped bk-table--enable-row-hover bk-table--enable-row-transition"
                    style="min-width:825px"
                >
                    ${tableHeader} ${tableBody(tableRecords())}
                </div>`)}
            </div>
        </div>

        ${header('Bordered')}
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                ${xScroll(html` <div
                    class="bk-table bk-table--fit bk-table--border bk-table--enable-row-hover bk-table--enable-row-transition"
                    style="min-width:825px"
                >
                    ${tableHeader} ${tableBody(tableRecords())}
                </div>`)}
            </div>
        </div>

        ${header('Fixed header')}
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                ${xScroll(html`<div
                    class="bk-table bk-table--fit bk-table--scrollable-y bk-table--enable-row-hover bk-table--enable-row-transition"
                    style="min-width:825px"
                >
                    ${tableHeader} ${tableBody(tableRecords(), 'max-height: 139px')}
                </div>`)}
            </div>
        </div>
    `
}

// ! todo : add fixed column
// ! todo: add highlighted row : warning/danger/info/success
// ! fix dark mode
