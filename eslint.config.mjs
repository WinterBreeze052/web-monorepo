import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: true,
  vue: true,
  react: true,

  // 在Flat配置中不再支持' .eslintignore '，请使用' ignore '代替
  ignores: [
    // '**/a.ts',
  ],

  // 自定义风格规则 https://eslint.style/rules
  // stylistic: {
  //   indent: 2, // 4, or 'tab'
  //   quotes: 'single', //  or 'double'
  // },

  // 取消 Anthony 喜好的一些固执己见的规则。
  lessOpinionated: true,
  // 覆盖规则
  rules: {
    'style/no-multiple-empty-lines': ['warn', { max: 2 }], // 最大空行
    'no-console': 'warn',
    'unocss/blocklist': 'warn', // 禁止特定的类选择器
    'unocss/enforce-class-compile': 'off', // 强制类编译
    'unocss/order-attributify': 'off', // 对属性选择器强制执行特定顺序
    'unocss/order': 'warn', // 对类选择器强制执行特定的顺序
    'unused-imports/no-unused-vars': 'warn',
    'symbol-description': 'warn',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn', // 禁止未使用的导入
    'object-shorthand': ['off'],
    'import/order': 'off',
    // '@typescript-eslint/no-unused-vars': 'off', // 关于未使用变量的规则（如“已声明但从未读取”）
    'perfectionist/sort-imports': 'off',
    'sort-keys': 'off', // 关闭键排序规则
  },
})
  .overrideRules({
    // 强制类型和接口中的属性名和类型注释之间保持一致的间距
    // 'style/key-spacing': ['warn', { align: 'colon', mode: 'strict' }],
    // 强制执行模板中每行的多个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 5 },
        multiline: { max: 1 },
      },
    ],
  })
  .override('antfu/typescript/rules', {
    rules: {
      'ts/no-explicit-any': 'error', // 禁止使用any
      'jsdoc/sort-tags': ['warn'],
      'ts/ban-ts-comment': 'off', // 禁止使用 @ts-ignore
      // "ts/no-unused-expressions": "off",
    },
  })
