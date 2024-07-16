import { filter, not, includes_with, and } from '../common.ts';





const prefix = ' npm:/';
const prefix_len = prefix.length;

const not_includes_with_star_AND_includes_with_prefix = and(
      not(includes_with('*')),   includes_with(prefix)
);

const valid = filter(not_includes_with_star_AND_includes_with_prefix);





export async function * transform (

        source: AsyncIterable<string>,

): AsyncIterable<string> {

    for await (const line of valid(source)) {

        const index = prefix_len + line.indexOf(prefix);

        const pkg = line.slice(index, line.lastIndexOf('@'));

        yield pkg;

    }

}

