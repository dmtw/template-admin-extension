const changeCase = require('change-case')
const pathCase = changeCase.pathCase

module.exports = {
  templateOptions: {
    context: {
      changeCase
    }
  },
  prompts: {
    moduleName: {
      message: 'What is the name of the new module (examples: Content/System/Storage...)?',
      default: 'Starter'
    },
    description: {
      message: 'How would you describe the new project?',
      default({moduleName}) {
        return `Colmena Admin ${changeCase.lower(moduleName)}`
      },
    },
    scope: {
      message: 'What is the scope of your NPM Org?',
      default: ':gitUser:',
      store: true
    },
  },
  move: answers => {
    return {
      'src/starter.module.ts': `src/${pathCase(answers.moduleName)}.module.ts`,
      'src/starter.service.ts': `src/${pathCase(answers.moduleName)}.service.ts`,
      'src/starter-config.module.ts': `src/${pathCase(answers.moduleName)}-config.module.ts`,
      'src/starter-routing.module.ts': `src/${pathCase(answers.moduleName)}-routing.module.ts`,
    }

  },
  showTip: true,
}
