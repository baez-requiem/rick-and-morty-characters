import { expect, test } from 'vitest'

import { removeEmptyFields } from './object.utils'

describe("Utils :: object :: removeEmptyFields", () => {
  test("Should remove empty fields", () => {
    const mockObj = {
      name: 'John Due',
      age: '',
      height: ''
    }
  
    const newMockObj = removeEmptyFields(mockObj)
  
    expect(newMockObj.height).toBe(undefined)
    expect(newMockObj.age).toBe(undefined)
    expect(newMockObj.name).toBe('John Due')
  })

})