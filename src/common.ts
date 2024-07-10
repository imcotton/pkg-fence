export type Fn <A, B> = (a: A) => B;





export type Predicate <T> = Fn<T, boolean>;





export const always_true = () => true;





export const always_false = () => false;





export function lookup <T> (sample: Iterable<T>): Predicate<T> {

    const table = new Set(sample);

    return item => table.has(item);

}





export const split_by_comma: Fn<string, ReadonlyArray<string>>
= split_by(',');

export function split_by (

        by: string,
        trim = true,

): Fn<string, ReadonlyArray<string>> {

    return function (str) {

        return str.split(by).map(s => trim ? s.trim() : s);

    };

}





export function and <T> (

        fst: Predicate<T>,
        snd: Predicate<T>,

): Predicate<T> {

    return a => fst(a) && snd(a);

}





export function or <T> (

        fst: Predicate<T>,
        snd: Predicate<T>,

): Predicate<T> {

    return a => fst(a) || snd(a);

}





export function not <T> (

        pred: Predicate<T>,

): Predicate<T> {

    return a => !pred(a);

}





export function any <T> (

        xs: readonly Predicate<T>[],
        x: Predicate<T>,

): Predicate<T> {

    return xs.reduce(or, x);

}





export function filter <T> (

        check: Predicate<T>,

): Fn<AsyncIterable<T>, AsyncIterable<T>> {

    return async function * (source) {

        for await (const item of source) {

            if (check(item) === true) {

                yield item;

            }

        }

    };

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

