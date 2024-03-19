// @ts-check
import antfu from "@antfu/eslint-config"
import {FlatCompat} from "@eslint/eslintrc"

const compat = new FlatCompat()

export default antfu(
  {
    unocss: false,
    formatters: false,
    stylistic: {
      quotes: "double",
      semi: false,
    },
    rules: {
      "style/arrow-parens": ["error", "always"],
      "curly": ["error", "all"],
      "antfu/top-level-function": ["off"],
      "style/object-curly-spacing": ["error", "always"],
      "no-console": "warn",
      "no-undef": "error"
    },
  },
  ...compat.config({
    extends: ["prettier"]
  }),
)
