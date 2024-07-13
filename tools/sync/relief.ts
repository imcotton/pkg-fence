#!/usr/bin/env -S deno run --allow-read=./src/presets/relief.ts --allow-write=./src/presets/relief.ts

import    native from '@est-mod-rep/manifests/native.json'          with { type: 'json' };
import     micro from '@est-mod-rep/manifests/micro-utilities.json' with { type: 'json' };
import preferred from '@est-mod-rep/manifests/preferred.json'       with { type: 'json' };

import { alter } from './_shared.ts';





async function main ({

        path = './src/presets/relief.ts',

} = {}) {

    const renew = await Deno.readTextFile(path)

        .then(alter({
            open: 'Array.of( // -native',
            data:           view(native),
            close:       '); // -native',
        }))

        .then(alter({
            open: 'Array.of( // -micro',
            data:           view(micro),
            close:       '); // -micro',
        }))

        .then(alter({
            open: 'Array.of( // -preferred',
            data:           view(preferred),
            close:       '); // -preferred',
        }))

    ;

    await Deno.writeTextFile(path, renew, { create: false });

}





function view (mod:

        | typeof native
        | typeof micro
        | typeof preferred

) {

    return mod.moduleReplacements.map(m => m.moduleName);

}





if (import.meta.main) {

    await main();

}

