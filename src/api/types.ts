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
  
  export interface EmbeddingModelConfig {
    provider: 'OPENAI' | 'COHERE'  // This one uses 'provider' and supports multiple options
    model: string
    apiKey: string
  }
  
  export interface NamespaceConfig {
    name: string
    description: string
    fileStorageConfig: FileStorageConfig
    vectorStorageConfig: VectorStorageConfig
    embeddingModelConfig: EmbeddingModelConfig
  }
  
  