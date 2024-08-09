import { parseArgs } from 'node:util';

import type { Flags } from '../collect.ts';





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

            invert: {
                type: 'boolean',
                short: 'v',
            },

            all: {
                type: 'boolean',
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

