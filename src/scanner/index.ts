import { transform as npm } from './npm.ts';
export {              npm };

import type { Fn } from '../common.ts';





export function make_scanner (

        format: 'npm',

): Fn<AsyncIterable<string>, AsyncIterable<string>> {

    if (format === 'npm') {
        return npm;
    }

    throw new Error(`unknown format - ${ format }`);

}

