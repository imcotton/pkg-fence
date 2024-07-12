#!/usr/bin/env -S deno run --allow-read=./src/presets/nolyfill.ts --allow-write=./src/presets/nolyfill.ts

import { allPackages } from '@nolyfill/packages/tools/cli/src/all-packages.ts';

import { alter } from './_shared.ts';





async function main ({

        path = './src/presets/nolyfill.ts',

} = {}) {

    const renew = await Deno.readTextFile(path).then(alter({
        open: 'Array.of(',
        data: allPackages,
        close: ');',
    }));

    await Deno.writeTextFile(path, renew, { create: false });

}





if (import.meta.main) {

    await main();

}

