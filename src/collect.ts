import { make_scanner } from './scanner/index.ts';
import { gen_presets } from './presets/index.ts';

import {
    id, not, filter, lookup, split_by_comma, make_predicate,
} from './common.ts';





export interface Flags {

    format?: 'npm' | 'deno-info';

    extra?: ReadonlyArray<string>;

    ignore?: ReadonlyArray<string>;

    invert?: boolean;

    all?: boolean;

    lodash?: boolean;

    nolyfill?: boolean;

    'relief'?: boolean;
    'relief-native'?: boolean;
    'relief-micro'?: boolean;
    'relief-preferred'?: boolean;

}





export function collect ({ flags, lines }: {

        flags: Flags,
        lines: AsyncIterable<string>,

}): AsyncIterable<string> {

    const { format, extra = [], ignore = [], invert, ...rest } = flags;

    const refine = invert ? not : id;

    const pred = refine(make_predicate({
        extra: lookup(extra.flatMap(split_by_comma)),
        ignore: lookup(ignore.flatMap(split_by_comma)),
        presets: gen_presets(rest),
    }));

    //    result = filter pred $ make_scanner format $ lines
    const result =                              (
        filter(pred)                            (
        make_scanner(format)                    (
        lines
    )));

    return result;

}

