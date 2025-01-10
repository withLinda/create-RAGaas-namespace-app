import { api } from './config'
import type { NamespaceConfig } from './types'

export async function createNamespace(embeddingProvider: 'OPENAI' | 'JINA'): Promise<any> {
  const jinaApiKey = import.meta.env.VITE_JINA_API_KEY
  
  // Validate JINA API key if JINA is selected
  if (embeddingProvider === 'JINA' && !jinaApiKey) {
    throw new Error('JINA API key is required when using JINA embeddings')
  }

  const config: NamespaceConfig = {
    name: 'general-docs',
    description: 'Just a general namespace for documentation',
    fileStorageConfig: {
      type: 'S3_COMPATIBLE',
      bucket: import.meta.env.VITE_R2_BUCKET_NAME,
      endpoint: import.meta.env.VITE_R2_ENDPOINT_URL,
      region: 'auto',
      credentials: {
        accessKeyId: import.meta.env.VITE_R2_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_R2_SECRET_ACCESS_KEY,
      },
    },
    vectorStorageConfig: {
      provider: 'PINECONE',
      apiKey: import.meta.env.VITE_PINECONE_API_KEY,
      indexHost: import.meta.env.VITE_PINECONE_INDEX_HOST,
    },
    embeddingModelConfig: embeddingProvider === 'OPENAI' 
      ? {
          provider: 'OPENAI' as const,
          model: 'text-embedding-3-small',
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        }
      : {
          provider: 'JINA' as const,
          model: 'jina-embeddings-v3',
          apiKey: jinaApiKey!, // We can use ! here because we validated it above
          dimensions: 1024,
          task: 'retrieval.passage',
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
