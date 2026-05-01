import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginPage } from '../pages/auth/LoginPage'

const queryClient = new QueryClient()

describe('LoginPage', () => {
  it('renders login form', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <LoginPage />
        </QueryClientProvider>
      </BrowserRouter>
    )
    expect(screen.getByText(/counselor login/i)).toBeInTheDocument()
  })
})
