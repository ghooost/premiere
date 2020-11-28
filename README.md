# TypeScript in a Next.js project.

## Basic setup
See how to start to use TS in a Next.js project [here](https://nextjs.org/docs/basic-features/typescript)

## ESLint setup
Install eslint globally:
```
npm install -g eslint
```
Then init it for your project:
```
eslint --init
```
Now add some tweaks to your .eslintrc.json file:
```json
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            "error"
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "import/extensions": [
            "error",
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".tsx",
                    ".ts"
                ]
            }
        }
    }
```
That's it. Now add a couple more commands to your package.json:
```
  "scripts": {
    ...
    "lint": "eslint --ext .tsx components/ pages/",
    "fix": "eslint --ext .tsx --fix components/ pages/"
  },
```
So, npm run lint will lint your code and npm run fix - will try to fix errors
automatically.
Please note: components/ pages/ - is a list of folders to lint. I'd prefer to keep all my sources in src/ folder, but this is a structure that create-next-app provides. Do not forget to add your folders there if you have ones.