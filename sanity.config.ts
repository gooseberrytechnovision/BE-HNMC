import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const studioHost = process.env.SANITY_STUDIO_STUDIO_HOST
const title = process.env.SANITY_STUDIO_TITLE

if (!projectId) {
  throw new Error('SANITY_STUDIO_PROJECT_ID environment variable is required')
}
if (!dataset) {
  throw new Error('SANITY_STUDIO_DATASET environment variable is required')
}
if (!studioHost) {
  throw new Error('SANITY_STUDIO_STUDIO_HOST environment variable is required')
}

export default defineConfig({
  name: 'default',
  title: title || studioHost,
  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
