# Steps to build a npm lib
    1. $ npm init
    2. install typescript
        $ react typescript @types/react --save-dev
    3. Add tsconfig.json file
        $ npx tsc --init
    4. Re-update tsconfig.json
        {
            "compilerOptions": {
                // Default
                "target": "es5", 
                "esModuleInterop": true, 
                "forceConsistentCasingInFileNames": true,
                "strict": true, 
                "skipLibCheck": true,

                // Added
                "jsx": "react", 
                "module": "ESNext",  
                "declaration": true,
                "declarationDir": "types",
                "sourceMap": true,
                "outDir": "dist",
                "moduleResolution": "node",
                "allowSyntheticDefaultImports": true,
                "emitDeclarationOnly": true,
            }
        }
    5. Add rollup
        $ yarn add rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
    6. Add rollup file at project root
        rollup.config.js
    7. Config package.json file
        {
            "name": "react-ip-location",
            "version": "0.0.1",
            "description": "A simple template for a custom React component library",
            "scripts": {
                "rollup": "rollup -c"
            },
            "author": "HuyFrontend",
            "license": "ISC",
            "devDependencies": {
                @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript @types/react

                "@rollup/plugin-commonjs": "^21.0.1",
                "@rollup/plugin-node-resolve": "^13.0.6",
                "@rollup/plugin-typescript": "^8.3.0",
                "@types/react": "^17.0.34",
                "react": "^17.0.2",
                "rollup": "^2.60.0",
                "rollup-plugin-dts": "^4.0.1",
                "typescript": "^4.4.4"
            },
            "main": "dist/cjs/index.js",
            "module": "dist/esm/index.js",
            "files": [
                "dist"
            ],
            "types": "dist/index.d.ts"
        }
    8. Try
        $ yarn rollup
    9. Create a Gihub repo
    
# Links
    https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe