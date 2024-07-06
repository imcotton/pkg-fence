import { describe, it } from '@std/testing/bdd';

import { assert_false, assert__true } from './utils.ts';

import {

    any,
    lookup,
    always_true,
    always_false,

} from '../src/common.ts';





describe('common', function () {

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

