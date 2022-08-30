const { configureAxe } = require('jest-axe')

const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    'image-alt': { enabled: false },
    "aria-required-children": { "enabled": false },
    "color-contrast": { "enabled": false },
    "list": { "enabled" : false}
  },
  impactLevels: ['critical','serious','moderate','minor']
})

module.exports = axe
