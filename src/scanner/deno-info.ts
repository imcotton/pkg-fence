import { filter, not, ends_with, and, includes_with } from '../common.ts';





const prefix = ' npm:/';
const prefix_len = prefix.length;

const not_ends_with_star_AND_includes_with_prefix = and(
      not(ends_with(' *')),  includes_with(prefix)
);

const valid = filter(not_ends_with_star_AND_includes_with_prefix);





export async function * transform (

        source: AsyncIterable<string>,

): AsyncIterable<string> {

    for await (const line of valid(source)) {

        const index = prefix_len + line.indexOf(prefix);

        const pkg = line.slice(index, line.lastIndexOf('@'));

        yield pkg;

    }

}

