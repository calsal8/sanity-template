const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'comma-dangle': [1, 'only-multiline'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
