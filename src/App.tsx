import { useState } from 'react'
import { createNamespace } from './api/namespace'

function App() {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateNamespace = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await createNamespace()
      setResult(data)
    } catch (err) {
      console.error('Error details:', err)
      setError(err)
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',  // Light gray background for the entire app
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#1a1a1a' }}>RAG Cloudflare Setup</h1>
      
      <button 
        onClick={handleCreateNamespace}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isLoading ? 'wait' : 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        {isLoading ? 'Creating Namespace...' : 'Create Namespace'}
      </button>
      
      {error && (
        <div style={{ 
          color: '#d32f2f', 
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#fef2f2',
          borderRadius: '8px',
          border: '1px solid #fecaca',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Error Details:</h3>
          <pre style={{ 
            whiteSpace: 'pre-wrap', 
            wordBreak: 'break-word',
            margin: 0,
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#dc2626'  // Darker red for better readability
          }}>
            {error.message || JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}
      
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ color: '#047857' }}>Success Response:</h3>
          <pre style={{ 
            backgroundColor: '#ffffff',  // White background
            color: '#1e293b',           // Dark text color for contrast
            padding: '1rem',
            borderRadius: '8px',
            overflowX: 'auto',
            border: '1px solid #e2e8f0',
            fontFamily: 'monospace',
            fontSize: '14px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            lineHeight: '1.5'
          }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {/* Optional: Add a footer with helpful information */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        borderTop: '1px solid #e2e8f0',
        color: '#666'
      }}>
        <p>✨ Namespace successfully created! You can now use this namespace for your RAG application.</p>
      </div>
    </div>
  )
}

export default App
