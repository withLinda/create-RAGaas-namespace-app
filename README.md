# 🚀 RAGaaS Namespace Creator
<img width="1006" alt="namespace" src="https://github.com/user-attachments/assets/e6cef13c-f8c0-475c-938c-f12d165e95eb" />

A modern React + TypeScript application that helps you create RAGaaS Namespace with your choice of embedding models through the RAGaaS API.

## 🎯 What Does It Do?

This app creates RAGaaS Namespace for your RAG system with:
- Cloudflare R2 for document storage
- Pinecone for vector storage
- Choice of embedding models:
  - OpenAI (`text-embedding-3-small`)
  - JINA AI (`jina-embeddings-v3`)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install   # or yarn, or pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file with these required values:
```env
VITE_RAGAAS_API_KEY=your_key_here

# Cloudflare R2 Configuration
VITE_R2_BUCKET_NAME=your_bucket_name
VITE_R2_ENDPOINT_URL=your_endpoint_url
VITE_R2_ACCESS_KEY_ID=your_access_key
VITE_R2_SECRET_ACCESS_KEY=your_secret_key

# Pinecone Configuration
VITE_PINECONE_API_KEY=your_pinecone_key
VITE_PINECONE_INDEX_HOST=your_pinecone_host

# Embedding Model API Keys
VITE_OPENAI_API_KEY=your_openai_key
VITE_JINA_API_KEY=your_jina_key  # Optional, only if using JINA embeddings
```

### 3. Run the App
```bash
npm run dev
```

## 💡 Usage

1. Start the application
2. Select your preferred embedding model:
   - OpenAI: Uses `text-embedding-3-small` model
   - JINA: Uses `jina-embeddings-v3` model with 1024 dimensions
3. Click the "Create Namespace" button
4. View the API response or any error messages

## 🔍 Embedding Models

### OpenAI
- Model: `text-embedding-3-small`
- Best for: General purpose text embeddings
- Requires: OpenAI API key

### JINA
- Model: `jina-embeddings-v3`
- Features:
  - 1024 dimensions (default)
  - Supports multiple languages
  - Optimized for retrieval tasks
- Requires: JINA AI API key

## ⚠️ Error Handling

The app provides detailed error messages for:
- Missing API keys
- Invalid configurations
- API request failures
- Network issues

## 🛠️ Technical Stack

- React 18
- TypeScript
- Vite
- Modern UI with responsive design
- Real-time error handling and feedback

## 🔒 Security Notes

- All API keys are handled securely through environment variables
- No sensitive data is stored in the browser
- API requests are proxied through the development server

---

Built with React + TypeScript + Vite 🛠️

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## 📝 License

MIT License - feel free to use this code in your own projects!
