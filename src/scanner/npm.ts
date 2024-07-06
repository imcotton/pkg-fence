const node_modules = 'node_modules/';

const node_modules_len = node_modules.length;

const prefix = `    "${ node_modules }`;





export async function * transform (

        source: AsyncIterable<string>,

): AsyncIterable<string> {

    for await (const line of source) {

        if (line.startsWith(prefix)) {

            const index = line.lastIndexOf(node_modules);

            const pkg = line.slice(index + node_modules_len, -4);

            yield pkg;

        }

    }

}

