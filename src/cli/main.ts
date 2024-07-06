import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline';
import { argv, stdin, exit } from 'node:process';

import type { Fn } from '../common.ts';
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





export async function main ({

        args = argv.slice(2),
        input = stdin,
        print = console.log,
        quit = exit,

}: {

        args?: Iterable<string>,
        input?: NodeJS.ReadableStream,
        print?: Fn<unknown, void>,
        quit?: Fn<number, void>,

} = {}): Promise<void> {

    const flags = parse(args);
    const lines = createInterface(input);

    let code = 0;

    for await (const pkg of collect({ flags, lines })) {

        if (code === 0) {
            code = 1;
        }

        print(pkg);

    }

    quit(code);

}

