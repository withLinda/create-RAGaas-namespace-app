/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_RAGAAS_API_KEY: string
    readonly VITE_R2_BUCKET_NAME: string
    readonly VITE_R2_ENDPOINT_URL: string
    readonly VITE_R2_ACCESS_KEY_ID: string
    readonly VITE_R2_SECRET_ACCESS_KEY: string
    readonly VITE_PINECONE_API_KEY: string
    readonly VITE_PINECONE_INDEX_HOST: string
    readonly VITE_OPENAI_API_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }