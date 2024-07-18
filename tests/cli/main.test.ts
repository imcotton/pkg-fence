import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';
import * as mock from '@std/testing/mock';

import { Readable } from 'node:stream';

import { make_lines } from '../utils.ts';

import {

    parse,
    main,

} from '../../src/cli/main.ts';





describe('parse', function () {

    it('supports --format deno-info', function () {

        asserts.assert(
            'deno-info' === parse([ '--format', 'deno-info' ]).format
        );

    });

    it('default format to undefined', function () {

        asserts.assert(
            null == parse([ '--ignore', 'foobar' ]).format
        );

    });

    it('has format to npm by --format=npm', function () {

        asserts.assert(
            'npm' === parse([ '--format=npm' ]).format
        );

        asserts.assert(
            'npm' === parse([ '--format', 'npm' ]).format
        );

    });

    it('throws on unknown format', function () {

        asserts.assertThrows(() => parse([ '--format', 'wat' ]));
        asserts.assertThrows(() => parse([ '--format', 'foobar' ]));

    });

});





describe('main', function () {

    for (const cmd of [ null, '-h', '--help' ]) {

        it(`print help message on ${ cmd }`, async function () {

            const args = cmd == null ? [] : [ cmd ];

            const print = mock.spy(function (help: string) {
                asserts.assertMatch(help, /Reading the NPM lockfile/);
            });

            const quit = mock.spy(() => {});

            await main({ args, print, quit });

            mock.assertSpyCalls(print, 1);

            mock.assertSpyCallArg(quit, 0, 0, 0);
            mock.assertSpyCalls(quit, 1);

        });

    }

    it('works under --no-npm mode, a.k.a the id scanner', async function () {

        const args = [ '--extra', 'acorn-jsx', '--no-npm' ];

        const lines = ReadableStream.from([
            'lodash.memoize',
            'acorn-jsx',
            'side-channel',
        ]);

        const print = mock.spy(() => {});

        const quit = mock.spy(() => {});

        await main({ args, lines, print, quit });

        mock.assertSpyCallArg(print, 0, 0, 'acorn-jsx');
        mock.assertSpyCalls(print, 1);

        mock.assertSpyCallArg(quit, 0, 0, 1);
        mock.assertSpyCalls(quit, 1);

    });

    it('ok in optional lines with input of ReadableStream', async function () {

        const args = [ '--extra', 'acorn-jsx' ];

        const input = Readable.from(`
  "version": "1.2.3",
  "lockfileVersion": 2,
    "node_modules/lodash.memoize": {
    "node_modules/acorn-jsx": {
    "node_modules/side-channel": {
        `);

        const print = mock.spy(() => {});

        const quit = mock.spy(() => {});

        await main({ args, input, print, quit });

        mock.assertSpyCallArg(print, 0, 0, 'acorn-jsx');
        mock.assertSpyCalls(print, 1);

        mock.assertSpyCallArg(quit, 0, 0, 1);
        mock.assertSpyCalls(quit, 1);

    });

    it('exit by 0 with no matches', async function () {

        const args = [ '--extra', 'wat' ];

        const lines = make_lines(`
            foo
            bar
        `);

        const print = mock.spy(() => {});

        const quit = mock.spy(() => {});

        await main({ args, lines, print, quit });

        mock.assertSpyCalls(print, 0);

        mock.assertSpyCallArg(quit, 0, 0, 0);
        mock.assertSpyCalls(quit, 1);

    });

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

