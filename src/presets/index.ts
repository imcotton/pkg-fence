import * as lodash from './lodash.ts';
export {    lodash };

import * as nolyfill from './nolyfill.ts';
export {    nolyfill };

import type { Predicate } from '../common.ts';
import { and, not, any, always_false } from '../common.ts';





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





export function make_predicate <T> ({ extra, ignore, presets }: {

        extra?: Predicate<T> | undefined,
        ignore?: Predicate<T> | undefined,
        presets?: Iterable<Predicate<T>> | undefined,

}): Predicate<T> {

    const not_ignored = not(ignore ?? always_false);
    const with_extra = extra ?? always_false;
    const arr = Array.from(presets ?? []);

    return and(
        not_ignored,
        any(arr, with_extra),
    );

}

