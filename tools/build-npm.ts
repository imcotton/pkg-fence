#!/usr/bin/env -S deno run -A

import * as esbuild from 'https://deno.land/x/esbuild@v0.23.0/mod.js';

import * as fs from 'jsr:@std/fs@~0.229.3';

import pkg from '../deno.json' with { type: 'json' };





{ // package.json

    const txt = await Deno.readTextFile('./tmp-package.json');
    const content = txt.replace('0.0.0-VERSION', pkg.version);

    const output = './package.json';
    await Deno.writeTextFile(output, content, { create: true });

}





const outdir = './dist/cli';

await fs.ensureDir(outdir);





{ // the main file

    const files = await esbuild.build({

        outdir,
        entryPoints: [
            './src/cli/main.ts',
        ],
        write: false,
        bundle: true,
        format: 'esm',
        platform: 'node',
        target: [ 'node18', 'es2022' ],
        supported: {
            'node-colon-prefix-import': true,
        },

    });

    for (const { path, text } of files.outputFiles) {

        // https://esbuild.github.io/faq/#top-level-var
        // const would be fine here
        const content = text.replaceAll(/^var /gm, 'const ');

        await Deno.writeTextFile(path, content, { create: true });

    }

}





{ // the bin file

    const txt = await Deno.readTextFile('./src/cli/bin.ts');
    const content = txt.replace('main.ts', 'main.js');

    const output = `${ outdir }/bin.js`;
    await Deno.writeTextFile(output, content, { create: true });

}





await esbuild.stop();

