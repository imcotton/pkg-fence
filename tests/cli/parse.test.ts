import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import {

    parse,

} from '../../src/cli/parse.ts';





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

