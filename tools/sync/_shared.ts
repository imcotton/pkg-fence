export function alter ({ open, data, close }: {

        open: string,
        data: unknown,
        close: string,

}) {

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





function split ({ open, close, total }: {

        open: string,
        close: string,
        total: string,

}) {

    const top = begin(open);
    const bottom = end(close);

    return [ top(total), bottom(total) ] as const;

}





const index: (_: string, __: string) => number
= (x, xs) => xs.indexOf(x) + x.length;





const begin: (_: string) => (_: string) => string
= x => xs => xs.slice(0, index(x, xs));





const end: (_: string) => (_: string) => string
= x => xs => xs.slice(index(x, xs) - x.length);

