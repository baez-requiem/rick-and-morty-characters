import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, test, expect, vi } from 'vitest'

import IconButton from './IconButton'

describe("Components :: IconButton", () => {
  test("Should be render", () => {
    const mockBtnText = "AAA"

    const { getByText } = render(<IconButton>{mockBtnText}</IconButton>)

    expect(getByText(mockBtnText)).toBeInTheDocument()
  })

  test("Should be able to fire event", () => {
    const handleClick = vi.fn()

    const { getByTestId } = render(<IconButton onClick={handleClick} />)

    fireEvent.click(getByTestId('icon-button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})