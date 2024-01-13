import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Hero from '@/pages/Hero'

const mockSetBackground = jest.fn()
jest.mock('@/contexts/backgroundContext', () => ({
    'useBackground': () => ({
        color: null,
        setBackground: mockSetBackground
    })
}))

test('Hero Section changes background color on scroll', () => {
    jest.useFakeTimers().setSystemTime(1705110114831)
    // mock scrollHeight value
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 300,
    });
    
    render(<Hero />)
    
    expect(mockSetBackground).toHaveBeenCalledWith("rgba(242,230,234,1)")
    expect(screen.getByText(/Hi\, I\'m Sarah/)).toBeInTheDocument()
    
    // wait 20ms so scroll event doesn't get throttled
    jest.useFakeTimers().setSystemTime(1705110114851)
    fireEvent.scroll(window, { target: { scrollY: 150 } })
    
    expect(mockSetBackground).toHaveBeenCalledWith("rgba(242,230,234,0.5)")
})
