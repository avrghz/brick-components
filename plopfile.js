module.exports = function (plop) {
    plop.setHelper('upperCase', (txt) => txt.replace(/(^\w|-\w)/g, (a) => a.replace(/-/, '').toUpperCase()))
    plop.setPartial('folderName', '{{upperCase tag}}')
    plop.setGenerator('Component', {
        description: 'Generate a component',
        prompts: [
            {
                type: 'input',
                name: 'prefix',
                message: 'prefix text',
            },
            {
                type: 'input',
                name: 'tag',
                message: 'Component tag (without prefix)',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/index.tsx',
                templateFile: 'templates/component.tsx',
            },
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/index.scss',
                templateFile: 'templates/component.scss',
            },
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/{{> folderName}}.stories.tsx',
                templateFile: 'templates/component.stories.tsx',
            },
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/types.ts',
                templateFile: 'templates/types.ts',
            },
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/test.e2e.ts',
                templateFile: 'templates/e2eTest.ts',
            },
            {
                type: 'add',
                path: 'src/components/{{> folderName}}/readme.md',
                templateFile: 'templates/readme.md',
            },
        ],
    })
}
