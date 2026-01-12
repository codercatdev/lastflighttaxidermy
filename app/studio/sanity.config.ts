import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import schemas from './schemas/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gj7uitls'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: `${baseUrl}/api/draft-mode/enable`,
        },
      },
    }),
  ],
  schema: {
    types: schemas,
  },
})
