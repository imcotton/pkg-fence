import { transform as npm } from './npm.ts';
export {              npm };

import { transform as deno_info } from './deno-info.ts';
export {              deno_info };

import { type Fn, id } from '../common.ts';





export function make_scanner (format?:

        | 'npm'
        | 'deno-info'

): Fn<AsyncIterable<string>, AsyncIterable<string>> {

    if (format == null) {
        return id;
    }

    if (format === 'npm') {
        return npm;
    }

    if (format === 'deno-info') {
        return deno_info;
    }

    throw new Error(`unknown format - ${ format }`);

}

