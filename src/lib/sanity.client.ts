import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ugc97ccx', // client's project
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})
