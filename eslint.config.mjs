import { defineConfig } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )
const compat = new FlatCompat( {
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
} )

export default defineConfig( [ {
  extends: compat.extends( 'standard' ),

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    },

    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  rules: {
    'array-bracket-spacing': [ 2, 'always' ],
    'computed-property-spacing': [ 2, 'always' ],
    'object-curly-spacing': [ 2, 'always' ],
    'space-in-parens': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always' ]
  }
} ] )
