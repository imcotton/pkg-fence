#!/usr/bin/env -S deno run --allow-read=./src/presets/relief.ts --allow-write=./src/presets/relief.ts

import    native from '@est-mod-rep/manifests/native.json'          with { type: 'json' };
import     micro from '@est-mod-rep/manifests/micro-utilities.json' with { type: 'json' };
import preferred from '@est-mod-rep/manifests/preferred.json'       with { type: 'json' };

import { alter, update_blobs } from './_shared.ts';





async function main ({

        path = './src/presets/relief.ts',
        version = '2.2.0',

} = {}) {

    const renew = await Deno.readTextFile(path)

        .then(update_blobs(version))

        .then(alter(
            'Array.of( // -native',
               moduleNames(native),
                   '); // -native',
        ))

        .then(alter(
            'Array.of( // -micro',
               moduleNames(micro),
                   '); // -micro',
        ))

        .then(alter(
            'Array.of( // -preferred',
               moduleNames(preferred),
                   '); // -preferred',
        ))

    ;

    await Deno.writeTextFile(path, renew, { create: false });

}





const moduleNames = lens('moduleReplacements', 'moduleName');

type Manifests =
    | typeof native
    | typeof micro
    | typeof preferred
;

function lens (

        fst: keyof Manifests,
        snd: keyof Manifests[typeof fst][number],

) {

    return function (mod: Manifests) {

        return mod[fst].map(m => m[snd]);

    };

}





if (import.meta.main) {

    await main();

}

