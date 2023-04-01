import "@testing-library/jest-dom"

import { render } from "@testing-library/react"
import { describe, test, expect } from 'vitest'

import Loader from './Loader'

describe("Components :: Loader", () => {
  test("Should be render", () => {

    const { container } = render(<Loader />)

    expect(container).toBeInTheDocument()
  })
})