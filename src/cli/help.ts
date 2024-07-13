export const help_text = `

pkg-fence

  Reading the NPM lockfile from stdin and filtering pkg name by rules.
  Exit code: 0 for empty results, 1 for anything matched.



Usage:

                      cat   package-lock.json | pkg-fence <cmd>

    npm shrinkwrap && cat npm-shrinkwrap.json | pkg-fence <cmd>



Builtin Presets:

    --lodash

    --nolyfill                    (via SukkaW/nolyfill)

    --relief                      (via es-tooling/module-replacements)
        --relief-native
        --relief-micro
        --relief-preferred



Options:

    --extra  foo    --extra  bar     --extra=abc,def

    --ignore foo    --ignore bar    --ignore=abc,def

`;

