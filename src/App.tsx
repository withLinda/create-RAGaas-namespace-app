import { useState } from 'react'
import { createNamespace } from './api/namespace'

function App() {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<'OPENAI' | 'JINA'>('OPENAI')

  const handleCreateNamespace = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await createNamespace(selectedProvider)
      setResult(data)
    } catch (err) {
      console.error('Error details:', err)
      setError(err)
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusMessage = () => {
    if (result) return "✨ Namespace created successfully! You can now use it in your RAG application."
    if (error) return "❌ There was an error creating the namespace. Please check the details below."
    return "✨ Choose your embedding provider and create a namespace for your RAG application."
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#1a1a1a',
          marginBottom: '16px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>
          RAGaas Namespace Creator
        </h1>

        <p style={{
          color: result ? '#047857' : error ? '#dc2626' : '#666',
          fontSize: '1.1rem',
          marginBottom: '40px',
          transition: 'color 0.3s ease'
        }}>
          {getStatusMessage()}
        </p>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          marginBottom: '24px'
        }}>
          <div style={{
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <label style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#374151'
            }}>
              Embedding Provider:
            </label>
            <select 
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value as 'OPENAI' | 'JINA')}
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                backgroundColor: '#f9fafb',
                fontSize: '1rem',
                color: '#1f2937',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
            >
              <option value="OPENAI">OpenAI</option>
              <option value="JINA">JINA</option>
            </select>
          </div>

          <button 
            onClick={handleCreateNamespace}
            disabled={isLoading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              cursor: isLoading ? 'wait' : 'pointer',
              backgroundColor: isLoading ? '#60a5fa' : isHovered ? '#0051a8' : '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontWeight: '500'
            }}
          >
            {isLoading ? 'Creating Namespace...' : 'Create Namespace'}
          </button>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fff1f2',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #fecdd3',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              color: '#be123c',
              marginBottom: '12px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Error Details:
            </h3>
            <pre style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              margin: 0,
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#be123c',
              backgroundColor: '#ffe4e6',
              padding: '12px',
              borderRadius: '8px'
            }}>
              {error.message || JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}

        {result && (
          <div style={{
            backgroundColor: '#f0fdf4',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #86efac',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'left'  // Added this to ensure left alignment
          }}>
            <h3 style={{
              color: '#047857',
              marginBottom: '12px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Success Response:
            </h3>
            <pre style={{
              backgroundColor: '#ffffff',
              color: '#1f2937',
              padding: '16px',
              borderRadius: '8px',
              overflowX: 'auto',
              border: '1px solid #d1fae5',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              margin: 0,  // Remove default margins
              textAlign: 'left'  // Ensure left alignment for the JSON
            }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

// Let's also apply the same alignment fix to the error message for consistency
        {error && (
          <div style={{
            backgroundColor: '#fff1f2',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #fecdd3',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'left'  // Added this to ensure left alignment
          }}>
            <h3 style={{
              color: '#be123c',
              marginBottom: '12px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Error Details:
            </h3>
            <pre style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              margin: 0,
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#be123c',
              backgroundColor: '#ffe4e6',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'left'  // Ensure left alignment for the error message
            }}>
              {error.message || JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
