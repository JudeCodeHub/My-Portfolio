import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// Mounts api/chat.js directly into Vite's dev server so `npm run dev` alone
// can exercise the chat endpoint locally — no Vercel CLI/account needed.
// (Vite itself has no server for production; this middleware only runs in
// dev, and has no effect on `vite build`/the deployed site.)
function chatApiDevPlugin() {
  return {
    name: 'chat-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        const { default: handler } = await import('./api/chat.js');
        try {
          await handler(req, res);
        } catch (err) {
          console.error('api/chat.js dev handler error:', err);
          if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
          }
          res.end(JSON.stringify({ error: 'Chat is temporarily unavailable.' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Loads .env (unprefixed, not just VITE_*) into process.env so
  // api/chat.js can read GEMINI_API_KEY when run via this dev middleware.
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };

  return {
    plugins: [react(), tailwindcss(), chatApiDevPlugin()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
