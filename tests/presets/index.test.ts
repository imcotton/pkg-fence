import { describe, it } from '@std/testing/bdd';

import { assert_false, assert__true } from '../utils.ts';

import { lookup, make_predicate } from '../../src/common.ts';

import {

    gen_presets,

} from '../../src/presets/index.ts';





describe('presets', function () {

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

