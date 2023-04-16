const { getEslintConfig } = require('./config/linters/get-eslint-config');

module.exports = getEslintConfig({
  rules: {
    'import/extensions': 'off',
    'vue/max-attributes-per-line': 1
  }
});
