import type { Predicate } from '../common.ts';
import { or, eqeqeq, starts_with } from '../common.ts';





export const check: Predicate<string>
= or(starts_with('lodash.'), eqeqeq('lodash'));

