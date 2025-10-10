import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const studioHost = process.env.SANITY_STUDIO_STUDIO_HOST

if (!projectId) {
  throw new Error('SANITY_STUDIO_PROJECT_ID environment variable is required')
}
if (!dataset) {
  throw new Error('SANITY_STUDIO_DATASET environment variable is required')
}
if (!studioHost) {
  throw new Error('SANITY_STUDIO_STUDIO_HOST environment variable is required')
}

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  },
  studioHost: studioHost,
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: {
    autoUpdates: true
  },
})
