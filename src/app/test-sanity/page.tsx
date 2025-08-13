'use client'

import { useEffect, useState } from 'react'
import { testSanityConnection } from '@/lib/sanity.test'

export default function TestSanityPage() {
  const [testResult, setTestResult] = useState<{ success: boolean; data?: unknown; error?: unknown } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function runTest() {
      setLoading(true)
      const result = await testSanityConnection()
      setTestResult(result)
      setLoading(false)
    }
    runTest()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sanity Connection Test
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Connection Details</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Project ID:</strong> ugc97ccx</p>
            <p><strong>Dataset:</strong> production</p>
            <p><strong>API Version:</strong> 2025-01-01</p>
            <p><strong>CDN:</strong> Enabled</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Connection Test</h2>
          
          {loading ? (
            <div className="text-blue-600">Testing connection...</div>
          ) : testResult ? (
            <div>
              {testResult.success ? (
                <div className="text-green-600">
                  ✅ Connection successful!
                  <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(testResult.data, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="text-red-600">
                  ❌ Connection failed
                  <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(testResult.error, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2">Next Steps</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• If connection is successful, you can start using the CMS</li>
            <li>• If connection fails, check your project ID and dataset</li>
            <li>• Make sure you have access to the client&apos;s Sanity project</li>
            <li>• Check the browser console for detailed error messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
