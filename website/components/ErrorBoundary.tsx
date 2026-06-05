'use client'

import { Component, ReactNode, ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[NARAÈ ErrorBoundary]', error.message, errorInfo.componentStack)
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-cream p-6" role="alert" aria-label="Application error">
          <div className="max-w-md w-full text-center p-12 rounded-3xl bg-white shadow-xl border border-gold/10">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9B896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Terjadi Kesalahan
            </h2>
            <p className="text-gray-warm text-sm mb-2">
              Aplikasi mengalami error yang tidak terduga. Silakan coba lagi.
            </p>
            {this.state.error && (
              <p className="text-charcoal/40 text-xs mb-6 font-mono">
                {this.state.error.message}
              </p>
            )}
            <button
              onClick={this.handleRetry}
              className="px-8 py-3 bg-charcoal text-cream rounded-full text-sm font-bold tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
              aria-label="Try again"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
