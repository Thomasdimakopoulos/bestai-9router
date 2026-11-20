import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    "@tailwindcss/postcss": {
      base: projectRoot,
    },
  },
};
