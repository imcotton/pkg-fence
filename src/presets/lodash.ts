import type { Predicate } from '../common.ts';





export const check: Predicate<string>
= pkg => pkg.startsWith('lodash.') || pkg === 'lodash';

