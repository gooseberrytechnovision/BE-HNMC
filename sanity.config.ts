import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hnmc-fibroids',

  projectId: 'rl2j4kml',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  api: {
    projectId: 'rl2j4kml',
    dataset: 'production',
    cors: {
      credentials: true,
      origin: [
        'https://main.d18il6sr3z7ps.amplifyapp.com',
      ],
    },
  },
})
