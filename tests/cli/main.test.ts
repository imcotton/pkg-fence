import { describe, it } from '@std/testing/bdd';
import * as mock from '@std/testing/mock';

import { make_lines } from '../utils.ts';

import {

    main,

} from '../../src/cli/main.ts';





describe('main', function () {

    it('collect lodash and nolyfill with extra ignore', async function () {

        const lines = make_lines(`
  "version": "1.2.3",
  "lockfileVersion": 2,
    "node_modules/@babel/core/node_modules/convert-source-map": {
    "node_modules/lodash.memoize": {
    "node_modules/side-channel": {
    "node_modules/acorn-jsx": {
    "node_modules/function-bind": {
    "node_modules/lodash.merge": {
    "node_modules/buffer": {
      "version": "6.0.3",
    }
        `);

        const args = [
            '--lodash',
            '--nolyfill',
            '--ignore=lodash.merge,side-channel',
            '--extra', 'buffer',
        ];

        const print = mock.spy(() => {});

        const quit = mock.spy(() => {});

        await main({ args, lines, print, quit });

        Array.of(

            'lodash.memoize',
            'function-bind',
            'buffer',

        ).forEach(function (pkg, i) {

            mock.assertSpyCallArg(print, i, 0, pkg);

        });

        mock.assertSpyCallArg(quit, 0, 0, 1);
        mock.assertSpyCalls(quit, 1);

    });

});

