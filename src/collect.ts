import { make_scanner } from './scanner/index.ts';
import { make_predicate } from './presets/index.ts';
import { filter, lookup, split_by_comma } from './common.ts';





export type Flags = Readonly<{

    extra?: ReadonlyArray<string> | undefined,

    ignore?: ReadonlyArray<string> | undefined,

    lodash?: boolean | undefined,

    nolyfill?: boolean | undefined,

}>;





export function collect ({ flags, lines }: {

        flags: Flags,
        lines: AsyncIterable<string>,

}): AsyncIterable<string> {

    const { extra = [], ignore = [], ...rest } = flags;

    const pred = make_predicate({
        extra: lookup(extra.flatMap(split_by_comma)),
        ignore: lookup(ignore.flatMap(split_by_comma)),
        ...rest,
    });

    //    result = filter pred $ make_scanner 'npm' $ lines
    const result =                              (
        filter(pred)                            (
        make_scanner('npm')                     (
        lines
    )));

    return result;

}

