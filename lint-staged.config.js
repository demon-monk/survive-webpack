module.exports = {
  linters: {
    '*.js': ['eslint'],
    '**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql|vue)': [
      'prettier --write',
      'git add',
    ],
  },
}
