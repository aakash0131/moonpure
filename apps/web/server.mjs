import { serve } from '@hono/node-server';
import serverDefault from './build/server/index.js';

const port = Number(process.env.PORT) || 4000;

// serverDefault can be a fetch handler or an object with a fetch method
const fetchHandler = typeof serverDefault === 'function'
  ? serverDefault
  : (serverDefault && typeof serverDefault.fetch === 'function')
    ? serverDefault.fetch.bind(serverDefault)
    : null;

if (!fetchHandler) {
  console.error('Could not find a fetch handler on the server build export.');
  process.exit(1);
}

serve({ fetch: fetchHandler, port });

console.log(`Server listening on http://localhost:${port}`);
