import * as lodash from './lodash.ts';
export {    lodash };

import * as nolyfill from './nolyfill.ts';
export {    nolyfill };

import * as relief from './relief.ts';
export {    relief };

import { type Predicate, or } from '../common.ts';





export type Param = Partial<Readonly<Record<Toggle, boolean | undefined>>>;

export type Toggle =

    | 'all'

    | 'lodash'
    | 'nolyfill'

    | 'relief'
    | 'relief-native'
    | 'relief-micro'
    | 'relief-preferred'

;





const on = (t: Toggle) => (p: Param) => p[t] === true;

const on_all = on('all');

const all_OR_lodash   = or(on_all, on('lodash'));
const all_OR_nolyfill = or(on_all, on('nolyfill'));
const all_OR_relief   = or(on_all, on('relief'));





export function * gen_presets (

        param: Param,

): Iterable<Predicate<string>> {

    if (all_OR_lodash(param)) {
        yield lodash.check;
    }

    if (all_OR_nolyfill(param)) {
        yield nolyfill.check;
    }

    if (all_OR_relief(param)) {

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

