#!/usr/bin/env -S deno run --allow-read=./src/presets/relief.ts --allow-write=./src/presets/relief.ts

import    native from 'module-replacements/manifests/native.json'          with { type: 'json' };
import     micro from 'module-replacements/manifests/micro-utilities.json' with { type: 'json' };
import preferred from 'module-replacements/manifests/preferred.json'       with { type: 'json' };

import pkg from '../../deno.json' with { type: 'json' };

import { alter, update_blobs, extract_tag } from './_shared.ts';





async function main ({

        path = './src/presets/relief.ts',
        version = extract_tag(pkg.imports['module-replacements/']),

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

