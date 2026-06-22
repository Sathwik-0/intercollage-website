import { execSync } from 'child_process';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
const lines = envFile.split('\n').filter(l => l.trim() && !l.startsWith('#'));

for (const line of lines) {
  const [k, ...vParts] = line.split('=');
  const v = vParts.join('=').trim();
  
  if (k) {
    console.log(`Adding ${k} to production...`);
    try {
      try {
        execSync(`npx vercel env rm ${k} production -y`, { stdio: 'ignore' });
      } catch (e) {}
      execSync(`npx vercel env add ${k} production --value "${v}"`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`Failed to add ${k}`);
    }
  }
}
console.log('Done uploading envs!');
