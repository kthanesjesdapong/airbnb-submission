// ./pothos.config.js

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
    // Getting to my inputs
    inputs: {
        outputFilePath: './src/api/__generated__/inputs/index.ts',
    },

    crud: {
        // inputsImporter: `export * as Inputs from '../inputs';`,
        // prismaCaller: '_context.prisma',
        //Imports you want to add to the resolver
        // resolversImports: `import {Prisma} from '.prisma/client';`,
        disabled: true
    },
    global: {
        replacer: (str, section) => {
            if (section === 'crud.model.resolver') {
                return str.replace(
                    "import * as Inputs from '../inputs'",
                    "import * as Inputs from '../../inputs';",
                );
            }
            return str;
        },
        builderImporter: "import {builder} from '../builder'"
    }
};