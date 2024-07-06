import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import { assert_false, assert__true } from './utils.ts';

import {

    any,
    lookup,
    split_by,
    split_by_comma,
    always_true,
    always_false,

} from '../src/common.ts';





const eq = asserts.assertEquals;





describe('common', function () {

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

