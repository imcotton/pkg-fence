import * as lodash from './lodash.ts';
export {    lodash };

import * as nolyfill from './nolyfill.ts';
export {    nolyfill };

import * as relief from './relief.ts';
export {    relief };

import type { Predicate } from '../common.ts';





export function * gen_presets (param: Partial<Readonly<Record<

        | 'lodash'
        | 'nolyfill'

        | 'relief'
        | 'relief-native'
        | 'relief-micro'
        | 'relief-preferred'

, boolean | undefined>>>): Iterable<Predicate<string>> {

    if (param.lodash === true) {
        yield lodash.check;
    }

    if (param.nolyfill === true) {
        yield nolyfill.check;
    }

    if (param.relief === true) {

        yield * [
            relief.native_check,
            relief.micro_check,
            relief.preferred_check,
        ];

    } else {

        if (param['relief-native'] === true) {
            yield  relief.native_check;
        }

        if (param['relief-micro'] === true) {
            yield  relief.micro_check;
        }

        if (param['relief-preferred'] === true) {
            yield  relief.preferred_check;
        }

    }

}

