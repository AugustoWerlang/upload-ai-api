import { FastifyInstance } from "fastify";
import { openai } from "../lib/openai"

export async function getImageRoute(app: FastifyInstance) {
  app.get('/image', async () => {
    const response = await openai.images.generate({ prompt: "Magic otter exploding in power in the wild" });

    // QUE MASSA!!!

    return response
  })
}