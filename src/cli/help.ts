export const help_text = `

pkg-fence

  Exit code: 0 for empty results, 1 for anything matched.



Usage:

         cat   package-lock.json | pkg-fence <cmd>
         cat npm-shrinkwrap.json | pkg-fence <cmd>

        deno info npm:<pkg name> | pkg-fence <cmd>



Builtin Presets:

    --all

    --lodash

    --nolyfill                    (via SukkaW/nolyfill v1.0.34)

    --relief                      (via es-tooling/module-replacements v2.4.0)
        --relief-native
        --relief-micro
        --relief-preferred



Options:

    --extra  foo    --extra  bar     --extra=abc,def

    --ignore foo    --ignore bar    --ignore=abc,def

    -v, --invert

`;

