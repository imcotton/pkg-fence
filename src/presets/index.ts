import * as lodash from './lodash.ts';
export {    lodash };

import * as nolyfill from './nolyfill.ts';
export {    nolyfill };

import type { Predicate } from '../common.ts';
import { and, not, any, lookup } from '../common.ts';





export function * gen_presents (param: Partial<Readonly<Record<

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





export function make_predicate ({ extra = [], ignore = [], ...rest }: {

        extra?: ReadonlyArray<string> | undefined,
        ignore?: ReadonlyArray<string> | undefined,

} & Parameters<typeof gen_presents>[0]): Predicate<string> {

    return and(
        not(lookup(ignore)),
        any(
            Array.from(gen_presents(rest)),
            lookup(extra),
        ),
    );

}

