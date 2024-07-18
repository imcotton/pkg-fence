import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline';
import { argv, stdin, exit } from 'node:process';

import type { Fn } from '../common.ts';
import { collect, type Flags } from '../collect.ts';
import { help_text } from './help.ts';
import { sniff } from './sniff.ts';





export function parse (args: Iterable<string>): Flags {

    const { values } = parseArgs({

        args: Array.from(args),

        options: {

            format: {
                type: 'string',
            },

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

            'relief':           { type: 'boolean' },
            'relief-native':    { type: 'boolean' },
            'relief-micro':     { type: 'boolean' },
            'relief-preferred': { type: 'boolean' },

        },

    });

    const { format, ...rest } = values;

    if (    format === 'npm'
        ||  format === 'deno-info'
    ) {

        return { ...rest, format };

    } else if (format != null) {

        throw new Error(`unknown format - ${ format }`);

    }

    return rest;

}





export async function main ({

        args = argv.slice(2),
        input = stdin,
        lines: optional_lines,
        print = console.log,
        quit = exit,

}: {

        args?: Iterable<string>,
        input?: NodeJS.ReadableStream,
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

    const { flags, lines } = await sniff(
        parse(args),
        optional_lines ?? createInterface({ input }),
    );

    let code = 0;

    for await (const pkg of collect({ flags, lines })) {

        if (code === 0) {
            code = 1;
        }

        print(pkg);

    }

    quit(code);

}

