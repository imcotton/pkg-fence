import type { Fn } from '../../src/common.ts';





export function alter (

        open: string,
        data: object,
        close: string,

) {

    return function (total: string): string {

        const [ top, bottom ] = split({ open, close, total });

        const middle = JSON.stringify(data, null, 4)
            .slice(2, -2)
            .concat(',')
            .replaceAll(`"`, `'`)
        ;

        return Array.of(top, middle, bottom).join('\n\n');

    };

}





export const replace_all: Fn<RegExp, Fn<string, Fn<string, string>>>
= older => newer => origin => origin.replaceAll(older, newer);

export const update_blobs = replace_all(/(?<=\/blob\/)[^/]+/g);

export const extract_tag = replace_all (/.*@([^/]+).*/g) ('$1');





function split ({ open, close, total }: {

        open: string,
        close: string,
        total: string,

}) {

    const top = begin(open);
    const bottom = end(close);

    return [ top(total), bottom(total) ] as const;

}





const begin: (_: string) => (_: string) => string
= x => xs => xs.slice(0, xs.indexOf(x) + x.length);





const end: (_: string) => (_: string) => string
= x => xs => xs.slice(xs.indexOf(x));

