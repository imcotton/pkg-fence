import { lookup, type Predicate } from '../common.ts';





// https://github.com/es-tooling/module-replacements/blob/2.2.0/manifests/native.json

export const native_list: ReadonlyArray<string> = Array.of( // -native

    'date',
    'for-each',
    'iterate-iterator',
    'iterate-value',
    'array-includes',
    'array.prototype.at',
    'array.prototype.concat',
    'array.prototype.copywithin',
    'array.prototype.entries',
    'array.prototype.every',
    'array.prototype.filter',
    'array.prototype.find',
    'array.prototype.findindex',
    'array.prototype.flat',
    'array.prototype.flatmap',
    'array.prototype.foreach',
    'array.from',
    'array.prototype.indexof',
    'array.prototype.join',
    'array.prototype.keys',
    'array.prototype.lastindexof',
    'array.prototype.map',
    'array.of',
    'array.prototype.push',
    'array.prototype.reduce',
    'array.prototype.reduceright',
    'array.prototype.slice',
    'array.prototype.some',
    'array.prototype.splice',
    'array.prototype.unshift',
    'array.prototype.values',
    'array-buffer-byte-length',
    'arraybuffer.prototype.slice',
    'data-view-buffer',
    'concat-map',
    'data-view-byte-length',
    'data-view-byte-offset',
    'define-accessor-property',
    'define-data-property',
    'es-aggregate-error',
    'error-cause',
    'es-create-array-iterator',
    'es-define-property',
    'es-errors',
    'es-shim-unscopables',
    'es-string-html-methods',
    'functions-have-names',
    'function.prototype.name',
    'global',
    'get-symbol-description',
    'globalthis',
    'gopd',
    'has-proto',
    'has-symbols',
    'has-tostringtag',
    'math.acosh',
    'math.atanh',
    'math.cbrt',
    'math.clz32',
    'math.f16round',
    'math.fround',
    'math.imul',
    'math.log10',
    'math.log1p',
    'math.sign',
    'math.sinh',
    'number.isfinite',
    'number.isinteger',
    'number.isnan',
    'number.issafeinteger',
    'number.parsefloat',
    'number.parseint',
    'number.prototype.exponential',
    'object-is',
    'object.assign',
    'object-assign',
    'object.defineproperties',
    'object.entries',
    'object.fromentries',
    'object.getownpropertydescriptors',
    'object.getprototypeof',
    'object.hasown',
    'object-keys',
    'object.keys',
    'object.values',
    'parseint',
    'promise.allsettled',
    'promise.any',
    'promise.prototype.finally',
    'reflect.getprototypeof',
    'reflect.ownkeys',
    'string.prototype.at',
    'string.prototype.lastindexof',
    'string.prototype.matchall',
    'string.prototype.padend',
    'string.prototype.padleft',
    'string.prototype.padright',
    'string.prototype.padstart',
    'string.prototype.replaceall',
    'string.prototype.split',
    'string.prototype.substr',
    'string.prototype.trim',
    'string.prototype.trimend',
    'string.prototype.trimleft',
    'string.prototype.trimright',
    'string.prototype.trimStart',
    'string.raw',
    'symbol.prototype.description',
    'typed-array-buffer',
    'typed-array-byte-length',
    'typed-array-byte-offset',
    'typed-array-length',
    'typedarray.prototype.slice',
    'has',
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
    'define-properties',
    'left-pad',
    'pad-left',
    'filter-array',
    'array-every',
    'index-of',
    'last-index-of',

); // -native

export const native_check: Predicate<string> = lookup(native_list);





// https://github.com/es-tooling/module-replacements/blob/2.2.0/manifests/micro-utilities.json

export const micro_list: ReadonlyArray<string> = Array.of( // -micro

    'call-bind',
    'es-get-iterator',
    'es-set-tostringtag',
    'is-array-buffer',
    'is-boolean-object',
    'is-date-object',
    'is-negative-zero',
    'is-number',
    'is-number-object',
    'is-plain-object',
    'is-primitve',
    'is-regexp',
    'is-string',
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





// https://github.com/es-tooling/module-replacements/blob/2.2.0/manifests/preferred.json

export const preferred_list: ReadonlyArray<string> = Array.of( // -preferred

    'bluebird',
    'cpx',
    'deep-equal',
    'eslint-plugin-es',
    'eslint-plugin-react',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'is-builtin-module',
    'builtin-modules',
    'jquery',
    'lodash',
    'lodash.add',
    'lodash.after',
    'lodash.ary',
    'lodash.assign',
    'lodash.assignin',
    'lodash.assigninwith',
    'lodash.assignwith',
    'lodash.at',
    'lodash.attempt',
    'lodash.before',
    'lodash.bind',
    'lodash.bindall',
    'lodash.bindkey',
    'lodash.callback',
    'lodash.camelcase',
    'lodash.capitalize',
    'lodash.castarray',
    'lodash.ceil',
    'lodash.chunk',
    'lodash.clamp',
    'lodash.clone',
    'lodash.clonedeep',
    'lodash.clonedeepwith',
    'lodash.clonewith',
    'lodash.compact',
    'lodash.compose',
    'lodash.concat',
    'lodash.cond',
    'lodash.conforms',
    'lodash.conformsto',
    'lodash.constant',
    'lodash.contains',
    'lodash.countby',
    'lodash.create',
    'lodash.createcallback',
    'lodash.curry',
    'lodash.curryright',
    'lodash.debounce',
    'lodash.deburr',
    'lodash.defaults',
    'lodash.defaultto',
    'lodash.defaultsdeep',
    'lodash.defer',
    'lodash.delay',
    'lodash.difference',
    'lodash.differenceby',
    'lodash.differencewith',
    'lodash.divide',
    'lodash.drop',
    'lodash.dropright',
    'lodash.droprightwhile',
    'lodash.dropwhile',
    'lodash.endswith',
    'lodash.eq',
    'lodash.escape',
    'lodash.escaperegexp',
    'lodash.every',
    'lodash.fill',
    'lodash.filter',
    'lodash.find',
    'lodash.findindex',
    'lodash.findkey',
    'lodash.findlast',
    'lodash.findlastindex',
    'lodash.findlastkey',
    'lodash.findwhere',
    'lodash.first',
    'lodash.flatmap',
    'lodash.flatmapdeep',
    'lodash.flatmapdepth',
    'lodash.flatten',
    'lodash.flattendepth',
    'lodash.flattendeep',
    'lodash.flip',
    'lodash.floor',
    'lodash.flow',
    'lodash.flowright',
    'lodash.foreach',
    'lodash.forin',
    'lodash.foreachright',
    'lodash.forinright',
    'lodash.forown',
    'lodash.forownright',
    'lodash.frompairs',
    'lodash.functions',
    'lodash.functionsin',
    'lodash.get',
    'lodash.groupby',
    'lodash.gt',
    'lodash.gte',
    'lodash.has',
    'lodash.hasin',
    'lodash.head',
    'lodash.identity',
    'lodash.includes',
    'lodash.indexby',
    'lodash.indexof',
    'lodash.initial',
    'lodash.inrange',
    'lodash.intersection',
    'lodash.intersectionby',
    'lodash.intersectionwith',
    'lodash.invert',
    'lodash.invertby',
    'lodash.invoke',
    'lodash.invokemap',
    'lodash.isarguments',
    'lodash.isarray',
    'lodash.isarraybuffer',
    'lodash.isarraylike',
    'lodash.isarraylikeobject',
    'lodash.isboolean',
    'lodash.isbuffer',
    'lodash.isdate',
    'lodash.iselement',
    'lodash.isempty',
    'lodash.isequal',
    'lodash.isequalwith',
    'lodash.iserror',
    'lodash.isfinite',
    'lodash.isfunction',
    'lodash.isinteger',
    'lodash.islength',
    'lodash.ismap',
    'lodash.ismatch',
    'lodash.ismatchwith',
    'lodash.isnan',
    'lodash.isnative',
    'lodash.isnil',
    'lodash.isnull',
    'lodash.isnumber',
    'lodash.isobject',
    'lodash.isobjectlike',
    'lodash.isplainobject',
    'lodash.isregexp',
    'lodash.issafeinteger',
    'lodash.isset',
    'lodash.isstring',
    'lodash.issymbol',
    'lodash.istypedarray',
    'lodash.isundefined',
    'lodash.isweakmap',
    'lodash.isweakset',
    'lodash.iteratee',
    'lodash.join',
    'lodash.kebabcase',
    'lodash.keyby',
    'lodash.keys',
    'lodash.keysin',
    'lodash.last',
    'lodash.lastindexof',
    'lodash.lowercase',
    'lodash.lowerfirst',
    'lodash.lt',
    'lodash.lte',
    'lodash.map',
    'lodash.mapkeys',
    'lodash.mapvalues',
    'lodash.matches',
    'lodash.matchesproperty',
    'lodash.max',
    'lodash.maxby',
    'lodash.mean',
    'lodash.meanby',
    'lodash.memoize',
    'lodash.merge',
    'lodash.mergewith',
    'lodash.method',
    'lodash.methodof',
    'lodash.min',
    'lodash.minby',
    'lodash.mixin',
    'lodash.modargs',
    'lodash.multiply',
    'lodash.negate',
    'lodash.noop',
    'lodash.now',
    'lodash.nth',
    'lodash.ntharg',
    'lodash.omit',
    'lodash.omitby',
    'lodash.once',
    'lodash.orderby',
    'lodash.over',
    'lodash.overargs',
    'lodash.overevery',
    'lodash.oversome',
    'lodash.pad',
    'lodash.padend',
    'lodash.padleft',
    'lodash.padright',
    'lodash.padstart',
    'lodash.pairs',
    'lodash.parseint',
    'lodash.partial',
    'lodash.partialright',
    'lodash.partition',
    'lodash.pick',
    'lodash.pickby',
    'lodash.pluck',
    'lodash.property',
    'lodash.propertyof',
    'lodash.pull',
    'lodash.pullall',
    'lodash.pullallwith',
    'lodash.pullby',
    'lodash.pullat',
    'lodash.random',
    'lodash.range',
    'lodash.rangeright',
    'lodash.rearg',
    'lodash.reduce',
    'lodash.reduceright',
    'lodash.reescape',
    'lodash.reevaluate',
    'lodash.reinterpolate',
    'lodash.reject',
    'lodash.remove',
    'lodash.repeat',
    'lodash.replace',
    'lodash.rest',
    'lodash.restparam',
    'lodash.result',
    'lodash.reverse',
    'lodash.round',
    'lodash.sample',
    'lodash.samplesize',
    'lodash.set',
    'lodash.setwith',
    'lodash.shuffle',
    'lodash.size',
    'lodash.slice',
    'lodash.snakecase',
    'lodash.some',
    'lodash.sortby',
    'lodash.sortbyall',
    'lodash.sortbyorder',
    'lodash.sortedindex',
    'lodash.sortedindexby',
    'lodash.sortedindexof',
    'lodash.sortedlastindex',
    'lodash.sortedlastindexby',
    'lodash.sortedlastindexof',
    'lodash.sorteduniq',
    'lodash.sorteduniqby',
    'lodash.split',
    'lodash.spread',
    'lodash.startcase',
    'lodash.startswith',
    'lodash.stubarray',
    'lodash.stubfalse',
    'lodash.stubobject',
    'lodash.stubstring',
    'lodash.stubtrue',
    'lodash.subtract',
    'lodash.sum',
    'lodash.sumby',
    'lodash.support',
    'lodash.tail',
    'lodash.take',
    'lodash.takeright',
    'lodash.takerightwhile',
    'lodash.takewhile',
    'lodash.template',
    'lodash.templatesettings',
    'lodash.throttle',
    'lodash.times',
    'lodash.toarray',
    'lodash.tofinite',
    'lodash.tointeger',
    'lodash.tolength',
    'lodash.tolower',
    'lodash.tonumber',
    'lodash.topairs',
    'lodash.topairsin',
    'lodash.topath',
    'lodash.toplainobject',
    'lodash.tosafeinteger',
    'lodash.tostring',
    'lodash.toupper',
    'lodash.transform',
    'lodash.trim',
    'lodash.trimend',
    'lodash.trimleft',
    'lodash.trimright',
    'lodash.trimstart',
    'lodash.trunc',
    'lodash.truncate',
    'lodash.unary',
    'lodash.unescape',
    'lodash.union',
    'lodash.unionby',
    'lodash.unionwith',
    'lodash.uniqby',
    'lodash.unique',
    'lodash.uniqueid',
    'lodash.uniqwith',
    'lodash.unset',
    'lodash.unzip',
    'lodash.unzipwith',
    'lodash.update',
    'lodash.updatewith',
    'lodash.uppercase',
    'lodash.upperfirst',
    'lodash.values',
    'lodash.valuesin',
    'lodash.where',
    'lodash.without',
    'lodash.words',
    'lodash.wrap',
    'lodash.xor',
    'lodash.xorby',
    'lodash.xorwith',
    'lodash.zip',
    'lodash.zipwith',
    'lodash.zipobject',
    'lodash.zipobjectdeep',
    'lodash-amd',
    'lodash-compat',
    'lodash-es',
    'lodash-fp',
    'lodash-node',
    'npm-run-all',
    'qs',
    'tempy',
    'rimraf',
    'make-dir',
    'mkdirp',
    'moment',
    'q',
    'sort-object',
    'underscore',
    'uri-js',
    'readable-stream',

); // -preferred

export const preferred_check: Predicate<string> = lookup(preferred_list);

