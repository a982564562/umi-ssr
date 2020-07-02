const fabric = require("@umijs/fabric");

module.exports = {
	// extends: [require.resolve("@umijs/fabric/dist/eslint")],
	...fabric.default,
	globals: {
		page: true,
		REACT_APP_ENV: true,
		BMap: true
	},
	rules: {
		...fabric.default.rules,
		quotes: 0,
		"no-tabs": 0,
		"no-console": 0, //禁用 console
		"no-restricted-globals": 0,
		"no-unused-vars": 1, //禁止出现未使用过的变量
		"one-var": 0, //强制变量声明放在一起
		"@typescript-eslint/no-unused-vars": 1,
		"react/self-closing-comp": 0
		// "no-debugger": 0, //禁用 debugger
		// "no-unused-vars": 1, //禁止出现未使用过的变量
		// "no-param-reassign": 0, //禁止对 function 的参数进行重新赋值
		// "func-names": 0, //要求或禁止使用命名的 function 表达式
		// "space-before-function-paren": 0, //强制在 function的左括号之前使用一致的空格
		// "no-underscore-dangle": 0, //禁止标识符中有悬空下划线
		// "consistent-return": 0, //要求 return 语句要么总是指定返回的值，要么不指定
		// radix: 0, //强制在 parseInt() 使用基数参数
		// semi: 0, //要求或禁止使用分号代替 ASI
		// "no-shadow": 0, //禁止变量声明与外层作用域的变量同名
		// quotes: 0, //引号风格
		// "spaced-comment": 0, //强制在注释中 // 或 /* 使用一致的空格
		// "no-empty-pattern": 0, //禁止使用空解构模式
		// "no-unused-expressions": [
		// 	1,
		// 	{
		// 		allowShortCircuit: true,
		// 		allowTernary: true,
		// 		allowTaggedTemplates: true
		// 	}
		// ], //禁止出现未使用过的表达式
		// "global-require": 0, //要求 require() 出现在顶层模块作用域中
		// indent: 0, //强制使用一致的缩进
		// "no-tabs": 0, //禁用 tab
		// "prefer-const": 0, //要求使用 const 声明那些声明后不再被修改的变量
		// "comma-dangle": [2, "never"], //要求或禁止末尾逗号
		// "no-sequences": 0, //禁用逗号操作符
		// "no-case-declarations": 0, //不允许在 case 子句中使用词法声明
		// "no-prototype-builtins": 0, //禁止直接调用 Object.prototypes 的内置属性
		// "no-extra-boolean-cast": 0, //禁止不必要的布尔转换
		// "import/prefer-default-export": 0,
		// "jsx-a11y/accessible-emoji": 0,
		// "jsx-a11y/label-has-for": 0,
		// "jsx-a11y/href-no-hash": 0,
		// "jsx-a11y/alt-text": 0,
		// "jsx-a11y/label-has-associated-control": 0,
		// "jsx-a11y/control-has-associated-label": 0,
		// "jsx-a11y/heading-has-content": 0,
		// "jsx-a11y/anchor-has-content": 0,
		// "react/display-name": 0,
		// "react/react-in-jsx-scope": 0,
		// "react/prefer-stateless-function": 0,
		// "react/forbid-prop-types": 0,
		// "react/no-unescaped-entities": 0,
		// "react/jsx-filename-extension": [
		// 	1,
		// 	{
		// 		extensions: [".ts", ".tsx", ".js", ".jsx"]
		// 	}
		// ],
		// "react/jsx-props-no-spreading": 0,
		// "react/prop-types": 0,
		
	}
};
