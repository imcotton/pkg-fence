import { lookup, type Predicate } from '../common.ts';





// https://github.com/es-tooling/module-replacements/blob/2.1.0/manifests/native.json

export const native_list: ReadonlyArray<string> = Array.of( // -native

    'object.entries',
    'date',
    'for-each',
    'array.of',
    'number.isnan',
    'array.prototype.findindex',
    'array.from',
    'object-is',
    'hasown',
    'has-own-prop',
    'array-map',
    'is-nan',
    'node.extend',
    'extend-shallow',
    'xtend',
    'defaults',
    'function-bind',
    'regexp.prototype.flags',
    'array.prototype.find',
    'object-keys',
    'define-properties',
    'left-pad',
    'pad-left',
    'filter-array',
    'array-every',
    'index-of',
    'last-index-of',

); // -native

export const native_check: Predicate<string> = lookup(native_list);





// https://github.com/es-tooling/module-replacements/blob/2.1.0/manifests/micro-utilities.json

export const micro_list: ReadonlyArray<string> = Array.of( // -micro

    'is-number',
    'is-plain-object',
    'is-primitve',
    'is-regexp',
    'is-travis',
    'is-npm',
    'clone-regexp',
    'split-lines',
    'is-windows',
    'is-whitespace',
    'is-string',
    'is-odd',
    'is-even',

); // -micro

export const micro_check: Predicate<string> = lookup(micro_list);





// https://github.com/es-tooling/module-replacements/blob/2.1.0/manifests/preferred.json

export const preferred_list: ReadonlyArray<string> = Array.of( // -preferred

    'npm-run-all',
    'cpx',
    'deep-equal',
    'is-builtin-module',
    'builtin-modules',
    'eslint-plugin-es',
    'eslint-plugin-react',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'qs',

); // -preferred

export const preferred_check: Predicate<string> = lookup(preferred_list);

