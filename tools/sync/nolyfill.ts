#!/usr/bin/env -S deno run --allow-read=./src/presets/nolyfill.ts --allow-write=./src/presets/nolyfill.ts

import { allPackages } from 'nolyfill/packages/tools/cli/src/all-packages.ts';

import pkg from '../../deno.json' with { type: 'json' };

import { alter, update_blobs, extract_tag } from './_shared.ts';





async function main ({

        path = './src/presets/nolyfill.ts',
        version = extract_tag(pkg.imports['nolyfill/']),

} = {}) {

    const renew = await Deno.readTextFile(path)

        .then(update_blobs(version))

        .then(alter(
            'Array.of(',
                allPackages,
            ');',
        ))

    ;

    await Deno.writeTextFile(path, renew, { create: false });

}





if (import.meta.main) {

    await main();

}

