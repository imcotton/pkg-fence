import { describe, it } from '@std/testing/bdd';

import { assert_false, assert__true } from '../utils.ts';

import {

    make_predicate,

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

            const check = make_predicate({ nolyfill });

            assert__true(check(abab), abab);
            assert__true(check(isarray), isarray);

        });

        it(`has NO ${ isarray } on nolyfill with ignore`, function () {

            const check = make_predicate({ nolyfill, ignore: [ isarray ] });

            assert_false(check(__w__a__t__), __w__a__t__);
            assert_false(check(isarray), isarray);
            assert__true(check(abab), abab);

        });

    });

});

