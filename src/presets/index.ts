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





export function make_predicate ({ extra, ignore, ...rest }: {

        extra?: Predicate<string> | undefined,
        ignore?: Predicate<string> | undefined,

} & Parameters<typeof gen_presets>[0]): Predicate<string> {

    const not_ignored = not(ignore ?? always_false);
    const with_extra = extra ?? always_false;
    const presets = Array.from(gen_presets(rest));

    return and(
        not_ignored,
        any(presets, with_extra),
    );

}

