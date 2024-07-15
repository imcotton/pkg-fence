import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import {

    collect,

} from '../src/collect.ts';





describe('collect', function () {

    it('collect under optional format (id)', async function () {

        const lines = ReadableStream.from([
            'convert-source-map',
            'lodash.memoize',
            'function-bind',
            'buffer',
        ]);

        const res = await Array.fromAsync(collect({ lines, flags: {

            lodash: true,

            nolyfill: true,

            ignore: [ 'lodash.merge', 'side-channel' ],

            extra: [ 'buffer' ],

        } }));

        asserts.assertEquals(res, [
            'lodash.memoize',
            'function-bind',
            'buffer',
        ]);

    });

    it('collect lodash and nolyfill with extra ignore', async function () {

        const lines = ReadableStream.from(`
  "version": "0.13.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "node_modules/@babel/core/node_modules/convert-source-map": {
      "version": "1.9.0",
      "dev": true
    },
    "node_modules/lodash.memoize": {
      "version": "4.1.2",
      "dev": true
    },
    "node_modules/side-channel": {
      "version": "1.0.4"
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "dev": true
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2"
    },
    "node_modules/buffer": {
      "version": "6.0.3",
    },
        `.split('\n'));

        const res = await Array.fromAsync(collect({ lines, flags: {

            format: 'npm',

            lodash: true,

            nolyfill: true,

            ignore: [ 'lodash.merge', 'side-channel' ],

            extra: [ 'buffer' ],

        } }));

        asserts.assertEquals(res, [
            'lodash.memoize',
            'function-bind',
            'buffer',
        ]);

    });

});

