# Changelog

## [0.6.2] - 2024-07-26

### Changed

- NPM built via `tsc` instead of `esbuild` ([#39](https://github.com/imcotton/pkg-fence/pull/39))

    Which means no longer bundle for the NPM target,
    this also leaves more clear delta between each releases.

### Added

- More NPM exports that aligned with JSR ([#39](https://github.com/imcotton/pkg-fence/pull/39))

    ```json
    "exports": {
      "./presets": "./dist/presets/index.js",
      "./scanner": "./dist/scanner/index.js",
      "./collect": "./dist/collect.js",
      "./main": "./dist/cli/main.js"
    }
    ```





## [0.6.1] - 2024-07-25

### Added

- The `-v`, `--invert` toggle ([#37](https://github.com/imcotton/pkg-fence/pull/37))

    The same behavior as in `grep`.





## [0.6.0] - 2024-07-19

### Changed

- Updating presets `--relief` to [v2.2.0](https://github.com/es-tooling/module-replacements/releases/tag/2.2.0) of **module-replacements** ([#35](https://github.com/imcotton/pkg-fence/pull/35))

### Added

- CLI to auto-detect input format from `package-lock.json` or `npm-shrinkwrap.json`

    In API `collect({ format: 'npm' })`.

- CLI to auto-detect input format from `deno info npm:<...>`

    In API `collect({ format: 'deno-info' })`.

- CLI to auto-detect input format from one pkg name per line

    In API `collect({ })`.





## [0.5.1] - 2024-07-13

### Added

- NPM badge in README





## [0.5.0] - 2024-07-13

### Added

- New presets `--relief` ([#19](https://github.com/imcotton/pkg-fence/pull/19))

    This based on https://github.com/es-tooling/module-replacements v`2.1.0`.

    It can also toggled individually via:
    - `--relief-native`
    - `--relief-micro`
    - `--relief-preferred`

