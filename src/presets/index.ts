import * as lodash from './lodash.ts';
export {    lodash };

import * as nolyfill from './nolyfill.ts';
export {    nolyfill };

import type { Predicate } from '../common.ts';





export function * gen_presets (param: Partial<Readonly<Record<

        | 'lodash'
        | 'nolyfill'

, boolean | undefined>>>): Iterable<Predicate<string>> {

    if (param.lodash === true) {
        yield lodash.check;
    }

    if (param.nolyfill === true) {
        yield nolyfill.check;
    }

}

