import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompleationRoute } from './routes/generate-ai-completion'
import { getImageRoute } from './routes/teste-imagem'

const app = fastify()

app.register(fastifyCors, {
  origin: "*",
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompleationRoute)
app.register(getImageRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('Server listening on port 3333...')
})