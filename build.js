import * as esbuild from "https://deno.land/x/esbuild@v0.14.43/mod.js";

const result = await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  outfile: "./dist/app.js",
  write: true,
  watch: true,
  target: ["safari11"],
});

console.log(result);

// Disable if you want to "watch for changes!"
// Enable for normal builds

// esbuild.stop();
