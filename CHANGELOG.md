# Changelog

## Unreleased

### Changed

- **Breaking:** `collect({})` format default to non format

    Old behavior now under `collect({ format: 'npm' })`.

### Added

- CLI to support `--no-npm` toggle ([#26](https://github.com/imcotton/pkg-fence/pull/26))

    i.e. plain input other than `package-lock.json`, one name per line.





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

