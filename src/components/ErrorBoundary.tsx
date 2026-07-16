import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

// Without this, any error thrown while rendering unmounts the whole React
// tree and leaves an empty <div id="root"> — a silent blank white page.
// This boundary catches that and shows the actual error instead.
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            fontFamily: 'monospace',
            padding: '32px',
            maxWidth: '720px',
            margin: '40px auto',
            background: '#FDEDEC',
            border: '1px solid #E5A9A0',
            borderRadius: '8px',
            color: '#5A1F17',
          }}
        >
          <h1 style={{ fontSize: '16px', marginBottom: '12px' }}>
            Something broke while rendering the page
          </h1>
          <p style={{ fontSize: '13px', marginBottom: '10px' }}>{this.state.error.message}</p>
          <p style={{ fontSize: '12px', color: '#7A342A' }}>
            Full details are in your browser's developer console (F12 → Console tab).
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
