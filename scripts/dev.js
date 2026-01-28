// Unset proxy environment variables to fix Google Fonts download issue
delete process.env.HTTP_PROXY;
delete process.env.HTTPS_PROXY;
delete process.env.http_proxy;
delete process.env.https_proxy;

// Spawn next dev
const { spawn } = require('child_process');
const next = spawn('next', ['dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

next.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

process.on('SIGINT', () => {
  next.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  next.kill('SIGTERM');
  process.exit(0);
});

