pkg-fence
=========

[![jsr](https://jsr.io/badges/@imcotton/pkg-fence)](https://jsr.io/@imcotton/pkg-fence)
[![npm](https://badgen.net/npm/v/pkg-fence)](https://www.npmjs.com/package/pkg-fence)
[![codecov](https://codecov.io/gh/imcotton/pkg-fence/graph/badge.svg)](https://codecov.io/gh/imcotton/pkg-fence)

> A command line tool that glance over package dependencies.





Usage
-----

Input source is reading from `stdin`.

    cat package-lock.json | npx pkg-fence <...>





### Auto-detect Input Format

- **npm**\
   from `package-lock.json` or `npm-shrinkwrap.json`

- **deno-info**\
   from `deno info npm:<pkg>`

- _(otherwise)_\
   one name per line





### Exit Code

- `0` for empty results
- `1` for anything matched





### Built-in Presets

- `--lodash`: pkg naming starts by `lodash.` or equals to `lodash`
- `--nolyfill`: list of names from https://github.com/SukkaW/nolyfill (**1.0.34**)
- `--relief`: list of names from https://github.com/es-tooling/module-replacements (**2.2.0**)
  - `--relief-native`
  - `--relief-micro`
  - `--relief-preferred`





### --extra

to specify addition names:

    --extra foo,bar
    --extra foo    --extra bar





### --ignore

to ignore some names:

    --ignore foo,bar
    --ignore foo    --ignore bar





### --invert <sup>(-v)</sup>

invert the search result





Available
---------

### NPM

> executable only

```
npx          pkg-fence
bun    x     pkg-fence
pnpm dlx     pkg-fence
yarn dlx     pkg-fence
deno run npm:pkg-fence
```

### JSR

> executable, multi ESM exports, Typing

```
deno run jsr:@imcotton/pkg-fence
```





Caveat
------

Does not differentiate between dev or non-dev dependencies.

- use `npm ls ...` or `npm why ...` to make further inspection

Results are unordered, possible in duplications.

- use `sort`, `uniq`, or `grep` etc...





License
-------

**AGPLv3**

