import * as esbuild from "esbuild";
// import * as sass from "sass";
// import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "esbuild-postcss";

let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ["src/client/index.tsx"],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: "public/static/bundle.js",
    // plugins: [
    //   sassPlugin({
    //     type: "style",
    //     logger: sass.Logger.silent,
    //     quietDeps: true,
    //   }),
    // ],
    plugins: [postcss()],
    define: {
      "process.env.NODE_ENV": "'development'",
    },
  });

  await ctx.watch(); // watching files for changes + automatically recompile, rebundle, reoutput a new static/bundle.js (only needed for development)

  console.log("Watching client...");

  const { host, port } = await ctx.serve({
    servedir: "public",
    fallback: "public/index.html",
  });

  console.log(`Hot refresh at http://${host}:${port}`);
} catch (error) {
  console.error("An error occurred:", error);
  process.exit(1);
}
