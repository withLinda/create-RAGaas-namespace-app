import { api } from './config'
import type { NamespaceConfig } from './types'

export async function createNamespace(): Promise<any> {
  const config: NamespaceConfig = {
    name: 'product-docs',
    description: 'Product documentation and FAQs',
    fileStorageConfig: {
      type: 'S3_COMPATIBLE',      // Uses 'type'
      bucket: import.meta.env.VITE_R2_BUCKET_NAME,
      endpoint: import.meta.env.VITE_R2_ENDPOINT_URL,
      region: 'auto',
      credentials: {
        accessKeyId: import.meta.env.VITE_R2_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_R2_SECRET_ACCESS_KEY,
      },
    },
    vectorStorageConfig: {
      provider: 'PINECONE',       // Uses 'provider'
      apiKey: import.meta.env.VITE_PINECONE_API_KEY,
      indexHost: import.meta.env.VITE_PINECONE_INDEX_HOST,
    },
    embeddingModelConfig: {
      provider: 'OPENAI',         // Uses 'provider'
      model: 'text-embedding-3-small',
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    },
  }

  try {
    const response = await fetch('/v1/namespaces', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${api.key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config),
      credentials: 'include',
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('API Error Details:', errorData)
      
      // Enhanced error message formatting
      const errorDetails = errorData.error?.details?.errors
        ?.map((e: any) => `${e.path.join('.')}: ${e.message}`)
        ?.join('\n') || JSON.stringify(errorData)
      
      throw new Error(`API error (${response.status}):\n${errorDetails}`)
    }

    return response.json()
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}
