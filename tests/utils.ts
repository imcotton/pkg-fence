import { assertStrictEquals } from '@std/assert';





export function assert__true (

        value: unknown,
        msg?: string,

): asserts value is true {

    assertStrictEquals(value, true, msg);

}





export function assert_false (

        value: unknown,
        msg?: string,

): asserts value is false {

    assertStrictEquals(value, false, msg);

}

