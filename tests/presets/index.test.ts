import { describe, it } from '@std/testing/bdd';
import * as asserts from '@std/assert';

import { assert_false, assert__true } from '../utils.ts';

import { lookup, make_predicate } from '../../src/common.ts';

import {

    gen_presets,
    lodash,
    nolyfill,
    relief,

} from '../../src/presets/index.ts';





describe('presets', function () {

    describe('gen_presets', function () {

        it(`gens all`, function () {

            const presets = Array.from(gen_presets({ all: true }));

            asserts.assertEquals(presets, [
                lodash.check,
                nolyfill.check,
                relief.native_check,
                relief.micro_check,
                relief.preferred_check,
            ]);

        });

        it(`gens all reliefs`, function () {

            const all = Array.of(
                relief.native_check,
                relief.micro_check,
                relief.preferred_check,
            );

            const presets = Array.from(gen_presets({ relief: true }));

            asserts.assertEquals(presets, all);

        });

        const sample = [

            [    'native', relief.native_check ],
            [     'micro', relief.micro_check ],
            [ 'preferred', relief.preferred_check ],

        ] as const;

        for (const [ name, check ] of sample) {

            it(`gens relief-${ name } only`, function () {

                const presets = gen_presets({ [ `relief-${ name }` ]: true });

                asserts.assertEquals(Array.from(presets), Array.of(check));

            });

        }

    });

    describe('make_predicate', function () {

        const abab = 'abab';
        const isarray = 'isarray';
        const __w__a__t__ = '__w__a__t__';

        it(`has NO ${ abab } on empty predicates`, function () {

            const check = make_predicate({});

            assert_false(check(abab));

        });

        const nolyfill = true;

        it(`has ${ isarray } on nolyfill`, function () {

            const presets = gen_presets({ nolyfill });

            const check = make_predicate({ presets });

            assert__true(check(abab), abab);
            assert__true(check(isarray), isarray);

        });

        it(`has NO ${ isarray } on nolyfill with ignore`, function () {

            const presets = gen_presets({ nolyfill });

            const ignore = lookup([ isarray ]);

            const check = make_predicate({ presets, ignore });

            assert_false(check(__w__a__t__), __w__a__t__);
            assert_false(check(isarray), isarray);
            assert__true(check(abab), abab);

        });

        const lodash = true;
        const lodash_merge = 'lodash.merge';

        it(`has ${ lodash_merge } on lodash`, function () {

            const presets = gen_presets({ lodash });

            const check = make_predicate({ presets });

            assert__true(check('lodash'), 'lodash');
            assert__true(check(lodash_merge), lodash_merge);

        });

        it(`has NO ${ lodash_merge } on nolyfill`, function () {

            const presets = gen_presets({ nolyfill });

            const check = make_predicate({ presets });

            assert_false(check(lodash_merge), lodash_merge);

        });

    });

});

