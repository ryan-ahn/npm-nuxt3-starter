module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['newline'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // off
    'no-alert': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'no-spaced-func': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-destructuring': 'off',
    'func-call-spacing': 'off',
    'linebreak-style': 0,
    'vue/no-v-html': 'off',
    'vue/script-indent': 'off',
    'vue/html-button-has-type': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    // 타입스크립트 함수 공백 사용 불가
    '@typescript-eslint/func-call-spacing': ['error'],
    // 타입스크립트 interface 멀티라인시 콤마 적용
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // 타입스크립트 콜론 뒤 스페이스 룰
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
      },
    ],
    // 컴포넌트 이름 2개 단어 미적용 룰
    'vue/multi-word-component-names': 'off',
    // kebab-case off
    'vue/attribute-hyphenation': 'off',
    // vue 템플릿 태그 안에 태그 어트리부트 순서 설정
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          [
            'UNIQUE',
            'SLOT',
          ],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    // vue 템플릿 태그 안에 탭 길이 설정
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // vue html 태그 어트리부트 갯수에 따라 줄바꿈
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // vue html 태그 어트리부트 존재시 줄바꿈
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: false,
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    // vue html 태그 멀티라인시 종료 브라켓 줄바꿈
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    // vue html 태그 브라켓 공백 미 허용
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],
    // vue html 태그 스페이스 제거
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    // vue 컴포넌트 자동 닫기 태그
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // v-bind:foo 비허용 => :foo 허용
    'vue/v-bind-style': [
      'error',
      'shorthand',
    ],
    // v-on:click 비허용 => @click 허용
    'vue/v-on-style': [
      'error',
      'shorthand',
    ],
    // 템플릿,스크립트,스타일 태그 순서
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'template',
          'script',
          'style',
        ],
      },
    ],
    // Vue 스크립트 셋업만 허용
    'vue/component-api-style': [
      'error',
      ['script-setup'],
    ],
    // Template, Script, Style 태그 1칸 띄어쓰기 적용
    'vue/padding-line-between-blocks': ['error'],
    // 템플릿 태그 어트리부트 강제로 멀티라인
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    // setup 구조분해할당 옵션
    'vue/no-setup-props-destructure': ['off'],
    // import 2개 이상시 줄바꿈 처리
    'newline/import-module': [
      'error',
      {
        minItems: 2,
      },
    ],
    // 객체 구조분해할당 프로퍼티 2개 이상시 줄바꿈 처리
    'newline/object-property': [
      'error',
      {
        minItems: 2,
      },
    ],
    // import 순서
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'desc',
        },
      },
    ],
    // 배열이 2개 이상일시 시작 브라켓 줄바꿈
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
      },
    ],
    // 배열이 2개 이상일시 요소 줄바꿈
    'array-element-newline': [
      'error',
      {
        minItems: 2,
      },
    ],
    // 구조분해할당, 가져오기, 내보내기 프로퍼티 2개 이상일시 멀티라인 적용
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    // 배열,객체,가져오기,내보내기 멀티라인일시 마지막에 콤마
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    // 객체 멀티라인 강제 적용
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    // 탭 길이 설정
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
      },
    ],
  },
  overrides: [
    {
      files: ['src/containers/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['src/**/*.vue'],
      rules: {
        // 함수,변수 카멜 케이스 룰 적용
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: [
              'variable',
              'function',
            ],
            format: ['camelCase'],
          },
        ],
      },
    },
  ],
};
