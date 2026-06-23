import { execSync } from 'child_process';

const envVars = [
  { name: 'ELEVENLABS_API_KEY', value: 'sk_d4cf92e5477ae2ca6d8b5838afcec758c0f8034a0cfc4ab8' },
  { name: 'NEXT_PUBLIC_ELEVENLABS_AGENT_ID', value: 'agent_5401kvrkptkkfa5rt1za576tttm0' },
  { name: 'NEXT_PUBLIC_ELEVENLABS_VOICE_ID', value: 'cjVigY5qzO86Huf0OWal' },
  { name: 'NEXT_PUBLIC_GROQ_MODEL', value: 'llama-3.3-70b-versatile' },
];

for (const { name, value } of envVars) {
  console.log(`Removing existing ${name}...`);
  try {
    execSync(`npx vercel env rm ${name} production -y`, { stdio: 'ignore' });
  } catch (e) {}

  console.log(`Adding ${name} to production...`);
  try {
    execSync(`npx vercel env add ${name} production --value "${value}"`, { stdio: 'inherit' });
    console.log(`✓ ${name} added`);
  } catch (e) {
    console.error(`✗ Failed to add ${name}`);
  }
}
console.log('Done!');
