import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import { assert_false, assert__true } from './utils.ts';

import {

    any,
    lookup,
    split_by,
    split_by_comma,
    filter,
    always_true,
    always_false,
    starts_with,
    ends_with,
    includes_with,
    eqeqeq,
    uncons,

} from '../src/common.ts';





const eq = asserts.assertEquals;





describe('common', function () {

    describe('uncons', function () {

        it('unprepend source', async function () {

            const head = 1;
            const tail = [ 2, 3 ];

            const source = ReadableStream.from([
                head,
                ...tail,
            ]);

            const [ x, xs ] = await uncons(source);
            const arr = await Array.fromAsync(xs);

            asserts.assert(x === head);
            asserts.assertEquals(arr, tail);

        });

        it('throws on empty source', async function () {

            await asserts.assertRejects(async function () {
                await uncons(ReadableStream.from([]));
            });

        });

    });

    describe('includes_with', function () {

        it('curried includes_with', function () {

            const comma_includes_in = includes_with(',');

            asserts.assert(comma_includes_in('hello, world'));
            asserts.assertFalse(comma_includes_in('foobar'));

        });

    });

    describe('eqeqeq', function () {

        it('curried strict equals', function () {

            const eq_123 = eqeqeq('123');

            asserts.assert(eq_123('123'));
            asserts.assertFalse(eq_123('456'));
            asserts.assertFalse(eq_123(123 as never));

        });

    });

    describe('ends_with', function () {

        it('curried endsWith', function () {

            const ends_with_bar = ends_with('bar');

            asserts.assert(ends_with_bar('foobar'));
            asserts.assertFalse(ends_with_bar('hello'));

        });

    });

    describe('starts_with', function () {

        it('curried startsWith', function () {

            const starts_with_foo = starts_with('foo');

            asserts.assert(starts_with_foo('foobar'));
            asserts.assertFalse(starts_with_foo('hello'));

        });

    });

    describe('filter', function () {

        it('filtered by predication', async function () {

            const foo = 'foo';
            const bar = 'bar';

            const words = filter<string>(str => /^[a-z]/.test(str));
            const source = ReadableStream.from([ foo, '123', bar, '456' ]);

            const res = await Array.fromAsync(words(source));

            eq(res, [ foo, bar ]);

        });

    });

    describe('split_by', function () {

        it('split by dash and NOT trimmed', function () {

            const split_by_dash = split_by('-', false);

            eq(split_by_dash('foo-bar'), [ 'foo', 'bar' ]);
            eq(split_by_dash('foo -bar'), [ 'foo ', 'bar' ]);
            eq(split_by_dash('foo- bar'), [ 'foo', ' bar' ]);
            eq(split_by_dash('foo - bar'), [ 'foo ', ' bar']);
            eq(split_by_dash(' foo - bar '), [ ' foo ', ' bar ']);

        });

    });

    describe('split_by_comma', function () {

        it('split by comma and trimmed', function () {

            const arr = [ 'foo', 'bar' ];

            eq(split_by_comma('foo,bar'), arr);
            eq(split_by_comma('foo ,bar'), arr);
            eq(split_by_comma('foo, bar'), arr);
            eq(split_by_comma('foo , bar'), arr);
            eq(split_by_comma(' foo , bar '), arr);

        });

    });

    describe('any', function () {

        it('always  true on empty', function () {

            const check = any([], always_true);

            assert__true(check('hello'));
            assert__true(check('world'));

        });

        it('always false on empty', function () {

            const check = any([], always_false);

            assert_false(check('hello'));
            assert_false(check('world'));

        });

        it('checks abcde & 12345', function () {

            const abcde = 'abcde';
            const nums  = '12345';

            const check = any([ lookup(abcde) ], lookup(nums));

            for (const item of abcde.concat(nums)) {
                assert__true(check(item), item);
            }

            assert_false(check('9'), '9');
            assert_false(check('z'), 'z');

        });

    });

    describe('lookup', function () {

        const empty = lookup(Array.of());

        const abcde = Array.from('abcde');
        const table = lookup(abcde);

        it('has NOTHING on empty', function () {
            assert_false(empty('NOTHING'));
        });

        for (const x of abcde) {

            it(`has ${ x }`, function () {
                assert__true(table(x));
            });

        }

        it('has NO z', function () {
            assert_false(table('z'));
        });

    });

});

