import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, test, expect, vi } from 'vitest'

import Button from './Button'

describe("Components :: Button", () => {
  test("Should be render", () => {
    const mockBtnText = "Hello World"

    const { getByText } = render(<Button>{mockBtnText}</Button>)

    expect(getByText(mockBtnText)).toBeInTheDocument()
  })

  test("Should be able to fire event", () => {
    const handleClick = vi.fn()

    const { getByTestId } = render(<Button onClick={handleClick} />)

    fireEvent.click(getByTestId('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})