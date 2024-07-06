import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline';
import { argv, stdin, exit } from 'node:process';

import { collect, type Flags } from '../collect.ts';





export function parse (args: Iterable<string>): Flags {

    const { values } = parseArgs({

        args: Array.from(args),

        options: {

            extra: {
                type: 'string',
                multiple: true,
            },

            ignore: {
                type: 'string',
                multiple: true,
            },

            // presets

            lodash: {
                type: 'boolean',
            },

            nolyfill: {
                type: 'boolean',
            },

        },

    });

    return values;

}





export async function main (): Promise<void> {

    const flags = parse(argv.slice(2));
    const lines = createInterface({ input: stdin });

    let code = 0;

    for await (const pkg of collect({ flags, lines })) {

        if (code === 0) {
            code = 1;
        }

        console.log(pkg);

    }

    exit(code);

}

