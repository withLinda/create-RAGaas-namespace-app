# 🚀 RAGaas Namespace Creator

A simple React + TypeScript application that helps you create RAGaas Namespace from the RAGaaS API.

## 🎯 What Does It Do?

This app does one thing and does it well: creates RAGaas Namespace from the RAGaaS API for your RAG system with:
- Cloudflare R2 for document storage
- Pinecone for vector storage
- OpenAI for embeddings

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install   # or yarn, or pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file with these required values:
```env
VITE_RAGAAS_API_KEY=your_key_here
VITE_R2_BUCKET_NAME=your_bucket_name
VITE_R2_ENDPOINT_URL=your_endpoint_url
VITE_R2_ACCESS_KEY_ID=your_access_key
VITE_R2_SECRET_ACCESS_KEY=your_secret_key
VITE_PINECONE_API_KEY=your_pinecone_key
VITE_PINECONE_INDEX_HOST=your_pinecone_host
VITE_OPENAI_API_KEY=your_openai_key
```

### 3. Run the App
```bash
npm run dev
```

## 💡 Usage

1. Start the application
2. Click the "Create Namespace" button
3. View the API response or any error messages

That's it! The namespace will be created with your specified configuration.

## 🔍 Response Example

On success, you'll receive a namespace ID that you can use in your RAG applications.

## ⚠️ Error Handling

The app will display detailed error messages if something goes wrong, making it easy to troubleshoot configuration issues.

---

Built with React + TypeScript + Vite 🛠️
```