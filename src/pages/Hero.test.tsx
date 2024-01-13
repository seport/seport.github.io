import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '@/pages/Hero'

test('Hero Section', () => {
    render(<Hero />)
    expect(screen.getByText(/Hi\, I\'m Sarah/)).toBeInTheDocument()

})
