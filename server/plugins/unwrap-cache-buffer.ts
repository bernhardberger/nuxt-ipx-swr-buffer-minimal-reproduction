import { Readable } from "node:stream";

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('beforeResponse', (event, { body }) => {
    console.log('before')
    if (typeof body === 'object' && body?.type === 'Buffer') {
      console.log('decode')
      const buffer = Buffer.from(body);
      const readable = Readable.from(buffer);
      return sendStream(event, readable);
    }
      return event.node.res
  });
});
