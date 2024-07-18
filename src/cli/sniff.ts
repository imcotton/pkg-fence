import type { Flags } from '../collect.ts';
import { cons, uncons } from '../common.ts';





export async function sniff (

        flags: Flags,
        lines: AsyncIterable<string>,

): Promise<{

        flags: typeof flags,
        lines: typeof lines,

}> {

    const { format, ...rest } = flags;

    if (format != null) {

        return { flags, lines };

    }

    const [ head, tail ] = await uncons(lines);

    const format_from = (confirmed: NonNullable<Flags['format']>) => ({
        lines: tail,
        flags: { ...rest, format: confirmed },
    });

    if (head.includes('unique') && head.includes('dependencies:')) {

        return format_from('deno-info');

    }

    if (head === '{') {

        return format_from('npm');

    }

    return {
        lines: cons(head, tail),
        flags: rest,
    };

}

