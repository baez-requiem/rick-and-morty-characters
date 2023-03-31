import "@testing-library/jest-dom"

import { render } from "@testing-library/react"
import { describe, test, expect } from 'vitest'

import Flex from './Flex'

describe("Components :: Flex", () => {
  test("Should be render", () => {

    const { container } = render(<Flex />)

    expect(container).toBeInTheDocument()
  })
})