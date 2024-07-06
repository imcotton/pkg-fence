import { transform as npm } from './npm.ts';
export {              npm };





export function make_scanner (

        format: 'npm',

): typeof npm {

    if (format === 'npm') {
        return npm;
    }

    throw new Error(`unknown format - ${ format }`);

}

