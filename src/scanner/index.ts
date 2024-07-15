import { transform as npm } from './npm.ts';
export {              npm };

import { type Fn, id } from '../common.ts';





export function make_scanner (

        format?: 'npm',

): Fn<AsyncIterable<string>, AsyncIterable<string>> {

    if (format == null) {
        return id;
    }

    if (format === 'npm') {
        return npm;
    }

    throw new Error(`unknown format - ${ format }`);

}

