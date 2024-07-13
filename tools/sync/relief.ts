#!/usr/bin/env -S deno run --allow-read=./src/presets/relief.ts --allow-write=./src/presets/relief.ts

import    native from '@est-mod-rep/manifests/native.json'          with { type: 'json' };
import     micro from '@est-mod-rep/manifests/micro-utilities.json' with { type: 'json' };
import preferred from '@est-mod-rep/manifests/preferred.json'       with { type: 'json' };

import { alter, update_blobs } from './_shared.ts';





async function main ({

        path = './src/presets/relief.ts',
        version = '2.1.0',

} = {}) {

    const renew = await Deno.readTextFile(path)

        .then(update_blobs(version))

        .then(alter(
            'Array.of( // -native',
                      view(native),
                   '); // -native',
        ))

        .then(alter(
            'Array.of( // -micro',
                      view(micro),
                   '); // -micro',
        ))

        .then(alter(
            'Array.of( // -preferred',
                      view(preferred),
                   '); // -preferred',
        ))

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

