pkg-fence
=========

[![jsr](https://jsr.io/badges/@imcotton/pkg-fence)](https://jsr.io/@imcotton/pkg-fence)
[![codecov](https://codecov.io/gh/imcotton/pkg-fence/graph/badge.svg)](https://codecov.io/gh/imcotton/pkg-fence)

> A command line tool that glance over package lockfile.





Usage
-----

### Input & Output

The lockfile is reading from `stdin` only. i.e.

    cat package-lock.json | npx pkg-fence <...>

> [!NOTE]
> Currently only support `package-lock.json` or `npm-shrinkwrap.json` 
> (could use `npm shrinkwrap` to generate it on-the-fly).

Exit code: `0` for empty results, `1` for anything matched.





### Built-in Presets

- `--lodash`: pkg naming starts by `lodash.` or equals to `lodash`
- `--nolyfill`: list of names from https://github.com/SukkaW/nolyfill





### Extra & Ignore

to specify addition names:

    --extra abc --extra def --extra=foo,bar

to ignore some names:

    --ignore abc --ignore def --ignore=foo,bar





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

