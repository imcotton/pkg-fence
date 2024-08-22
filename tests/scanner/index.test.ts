import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import { make_lines } from '../utils.ts';

import {

    make_scanner,

} from '../../src/scanner/index.ts';





describe('scanner', function () {

    it('throw on non-supported scanner', function () {

        asserts.assertThrows(() => make_scanner('w-a-t' as never));

    });

    it('makes id scanner by default', function () {

        const scanner = make_scanner();

        const mine = ReadableStream.from(Array.from(`foobar`));
        const copy = scanner(mine);

        asserts.assertStrictEquals(copy, mine);

    });

    describe('npm', function () {

        const scanner = make_scanner('npm');

        const data = ReadableStream.from(`
  "version": "0.13.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "node_modules/@babel/core/node_modules/convert-source-map": {
      "version": "1.9.0",
      "dev": true
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/buffer": {
      "version": "6.0.3",
    },
        `.split('\n'));

        it('scans from shrinkwrap data', async function () {

            const res = await Array.fromAsync(scanner(data));

            asserts.assertEquals(res, [
                'convert-source-map',
                'acorn-jsx',
                'buffer',
            ]);

        });

    });

    describe('deno-info', function () {

        const scanner = make_scanner('deno-info');

        const data = make_lines(`
dependencies: 15 unique
size: 619.7KB

npm:/yargs@17.7.2 (285.57KB)
├─┬ npm:/cliui@8.0.1 (31.56KB)
│ ├─┬ npm:/string-width@4.2.3 (5.04KB)
│ │ ├── npm:/emoji-regex@8.0.0 (47.12KB)
│ │ ├── npm:/is-fullwidth-code-point@3.0.0 (4.88KB)
│ │ └─┬ npm:/strip-ansi@6.0.1 (3.93KB)
│ │   └── npm:/ansi-regex@5.0.1 (5.48KB)
│ ├── npm:/strip-ansi@6.0.1 (3.93KB) *
│ └─┬ npm:/wrap-ansi@7.0.0 (10.4KB)
│   ├─┬ npm:/ansi-styles@4.3.0 (16.58KB)
│   │ └─┬ npm:/color-convert@2.0.1 (26.55KB)
│   │   └── npm:/color-name@1.1.4 (6.54KB)
│   ├── npm:/string-width@4.2.3 (5.04KB) *
│   └── npm:/strip-ansi@6.0.1 (3.93KB) *
├── npm:/escalade@3.1.2 (11.32KB)
├── npm:/get-caller-file@2.0.5 (4.61KB)
├── npm:/require-directory@2.1.1 (11.79KB)
├── npm:/string-width@4.2.3 (5.04KB) *
├── npm:/string-width@4.2.3 (5.04KB) [*
├── npm:/y18n@5.0.8 (22.89KB)
└── npm:/yargs-parser@21.1.1 (125.46KB)
        `);

        it('scans from:     deno info npm:yargs', async function () {

            const res = await Array.fromAsync(scanner(data));

            asserts.assertEquals(res, [
                'cliui',
                'string-width',
                'emoji-regex',
                'is-fullwidth-code-point',
                'strip-ansi',
                'ansi-regex',
                'wrap-ansi',
                'ansi-styles',
                'color-convert',
                'color-name',
                'escalade',
                'get-caller-file',
                'require-directory',
                'y18n',
                'yargs-parser',
            ]);

        });

    });

});

