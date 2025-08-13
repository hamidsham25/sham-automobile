import { client } from './sanity.client'

// Test function to verify connection to client's Sanity project
export async function testSanityConnection() {
  try {
    // Try to fetch a simple query to test the connection
    const result = await client.fetch('*[_type == "car"][0...1]')
    console.log('✅ Sanity connection successful!')
    console.log('Project ID:', 'ugc97ccx')
    console.log('Dataset:', 'production')
    console.log('Sample result:', result)
    return { success: true, data: result }
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    return { success: false, error }
  }
}
