/* eslint-disable */

module.exports = {
    parser: require('postcss-scss'),
    plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
   ],
};