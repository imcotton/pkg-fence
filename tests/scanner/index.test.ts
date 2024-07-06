import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import {

    make_scanner,

} from '../../src/scanner/index.ts';





describe('scanner', function () {

    it('throw on non-supported scanner', function () {

        asserts.assertThrows(() => make_scanner('w-a-t' as never));

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

});

