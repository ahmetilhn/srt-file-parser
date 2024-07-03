import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
export default {
  input: "lib/index.js",
  output: {
    file: "build/index.js",
    format: "umd",
    name: "srtFileParser",
  },
  plugins: [
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
};
