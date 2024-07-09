import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline';
import { argv, stdin, exit } from 'node:process';

import type { Fn } from '../common.ts';
import { collect, type Flags } from '../collect.ts';
import { help_text } from './help.ts';





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
        lines: optional_lines,
        print = console.log,
        quit = exit,

}: {

        args?: Iterable<string>,
        lines?: AsyncIterable<string>,
        // deno-lint-ignore no-explicit-any
        print?: Fn<any, void>,
        quit?: Fn<number, void>,

} = {}): Promise<void> {

    { // -h, --help

        const [ cmd ] = Array.from(args);

        if (cmd == null || cmd === '-h' || cmd === '--help') {
            print(help_text);
            return quit(0);
        }

    }

    const flags = parse(args);
    const lines = optional_lines ?? createInterface({ input: stdin });

    let code = 0;

    for await (const pkg of collect({ flags, lines })) {

        if (code === 0) {
            code = 1;
        }

        print(pkg);

    }

    quit(code);

}

