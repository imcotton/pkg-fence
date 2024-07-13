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

