const prettierConfig = {
    plugins: [
        './node_modules/prettier-plugin-multiline-arrays', // plugin added here
    ],
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    multilineArrayWrapThreshold: 3,
    multilineArrayElementsPerLine: "3",
  };
  
  module.exports = prettierConfig;