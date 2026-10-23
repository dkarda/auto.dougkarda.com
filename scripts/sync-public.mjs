import { cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const pub = 'public';
const builtIndex = join(dist, 'index.html');
const builtAssets = join(dist, 'assets');

if (!existsSync(builtIndex)) {
  throw new Error('dist/index.html is missing. Run npm run build first.');
}

cpSync(builtIndex, join(pub, 'index.html'));

if (existsSync(builtAssets)) {
  rmSync(join(pub, 'assets'), { recursive: true, force: true });
  cpSync(builtAssets, join(pub, 'assets'), { recursive: true });
}

console.log('Copied dist/index.html and dist/assets into public/');
