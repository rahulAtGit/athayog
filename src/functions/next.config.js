"use strict";

module.exports = {
  distDir: "../functions/next",
  overrides: [
    {
      test: "**/*.jsx",
      presets: [
        [
          "next/babel",
          {
            "preset-env": {
              useBuiltIns: "usage",
              // `useBuiltIns` adds `import` statements for polyfills,
              // but webpack does not allow assigning `module.exports` if a file
              // contains `import`, so transpile those added `import`s to
              // `require`.
              modules: "commonjs"
            }
          }
        ]
      ]
    }
  ]
};
