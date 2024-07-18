import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import { make_lines } from '../utils.ts';

import {

    sniff,

} from '../../src/cli/sniff.ts';

import type { Flags } from '../../src/collect.ts';





describe('sniff', function () {

    it('leaves untouched with existing format', async function () {

        const flags = { format: 'npm' } satisfies Flags;
        const lines = ReadableStream.from([]);

        const res = await sniff(flags, lines);

        asserts.assertStrictEquals(res.flags, flags);
        asserts.assertStrictEquals(res.lines, lines);

    });

    it('sniff out from deno info', async function () {

        const format = 'deno-info';

        const lines = make_lines(`
dependencies: 15 unique
size: 619.7KB
        `);

        const res = await sniff({}, lines);

        asserts.assertStrictEquals(res.flags.format, format);

    });

    it('sniff out from package-lock.json', async function () {

        const format = 'npm';

        const lines = make_lines(`
{
  "version": "1.2.3",
  "lockfileVersion": 2,
        `);

        const res = await sniff({}, lines);

        asserts.assertStrictEquals(res.flags.format, format);

    });

    it('leaves unknown data untouched', async function () {

        const [ foo, bar ] = make_lines(`
            'lodash.memoize',
            'acorn-jsx',
            'side-channel',
        `).tee();

        const res = await sniff({}, foo);

        asserts.assert(res.flags.format == null);

        const [ a, b ] = await Promise.all([
            Array.fromAsync(res.lines),
            Array.fromAsync(bar),
        ])

        asserts.assertEquals(a, b);

    });

});

