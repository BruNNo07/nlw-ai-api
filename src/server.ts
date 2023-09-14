import { fastify } from "fastify";
import { getAllPrompts } from "./routes/get-all-prompts";
import { uploadVideo } from "./routes/upload-video";
import { createTranscription } from "./routes/create-transcription";
import { genereteAICompletion } from "./routes/generate-ia-completion";
import fastifyCors from "@fastify/cors";

const app = fastify()

app.register(fastifyCors,{
  origin: '*',
})

app.register(getAllPrompts)
app.register(uploadVideo)
app.register(createTranscription)
app.register(genereteAICompletion)

app.listen({
  port: 3333,
}).then(()=>{
  console.log("HTTP server running")
})