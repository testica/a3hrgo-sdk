module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    "rules": {
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "object-curly-spacing": [2, 'always']
      }
}