import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool, defineLocations } from 'sanity/presentation'
import { table } from '@sanity/table'
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
    table(),
    presentationTool({
      allowOrigins: ['http://localhost:3000'],
      previewUrl: {
        draftMode: {
          enable: `${baseUrl}/api/draft-mode/enable`,
        },
      },

      resolve: {
        locations: {
          advanced: defineLocations({
            select: {
              title: 'title',
              stackbit_url_path: 'stackbit_url_path',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `${doc?.stackbit_url_path || ''}`,
                },
              ],
            }),
          }),
          page: defineLocations({
            select: {
              title: 'title',
              stackbit_url_path: 'stackbit_url_path',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `${doc?.stackbit_url_path || ''}`,
                },
              ],
            }),
          }),
        }
      }
    }),
  ],
  schema: {
    types: schemas,
  },
})
