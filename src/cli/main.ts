import { createInterface } from 'node:readline';
import { argv, stdin, exit } from 'node:process';

import type { Fn } from '../common.ts';
import { collect } from '../collect.ts';
import { help_text } from './help.ts';
import { sniff } from './sniff.ts';
import { parse } from './parse.ts';





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

