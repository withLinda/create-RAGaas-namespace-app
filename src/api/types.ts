export interface FileStorageConfig {
    type: 'S3_COMPATIBLE'  // This one uses 'type'
    bucket: string
    endpoint: string
    region: string
    credentials: {
      accessKeyId: string
      secretAccessKey: string
    }
  }
  
  export interface VectorStorageConfig {
    provider: 'PINECONE'  // This one uses 'provider'
    apiKey: string
    indexHost: string
  }
  
  export interface OpenAIEmbeddingConfig {
    provider: 'OPENAI'
    model: string
    apiKey: string
}

export interface JINAEmbeddingConfig {
    provider: 'JINA'
    model: string
    apiKey: string
    dimensions: number
    task: string
}

export type EmbeddingModelConfig = OpenAIEmbeddingConfig | JINAEmbeddingConfig
  
  export interface NamespaceConfig {
    name: string
    description: string
    fileStorageConfig: FileStorageConfig
    vectorStorageConfig: VectorStorageConfig
    embeddingModelConfig: EmbeddingModelConfig
  }

  
  
  