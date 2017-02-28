import { getStuffedArray } from './FormDesignerHelper'

test('turn [1,4] into [1,3,4]', () => {
    const expected = [1,3,4]
    const result = getStuffedArray([1,4])

    expect(result).toEqual(expected)
})

test('turn [1,1,4] into [1,1,2,4]', () => {
    const expected = [1,1,2,4]
    const result = getStuffedArray([1,1,4])

    expect(result).toEqual(expected)
})

test('turn [1,1,1,4] into [1,1,1,1,4]', () => {
    const expected = [1,1,1,1,4]
    const result = getStuffedArray([1,1,1,4])

    expect(result).toEqual(expected)
})

test('turn [1,2,4] into [1,2,1,4]', () => {
    const expected = [1,2,1,4]
    const result = getStuffedArray([1,2,4])

    expect(result).toEqual(expected)
})

test('turn [3,4] into [3,1,4]', () => {
    const expected = [3,1,4]
    const result = getStuffedArray([3,4])

    expect(result).toEqual(expected)
})

test('turn [4,1,4] into [4,1,3,4]', () => {
    const expected = [4,1,3,4]
    const result = getStuffedArray([4,1,4])

    expect(result).toEqual(expected)
})

test('turn [1,3,4] into [1,3,4]', () => {
    const expected = [1,3,4]
    const result = getStuffedArray([1,3,4])

    expect(result).toEqual(expected)
})

test('turn [4,4,4] into [4,4,4]', () => {
    const expected = [4,4,4]
    const result = getStuffedArray([4,4,4])

    expect(result).toEqual(expected)
})

test('turn [1,2,3,4,3,2,1] into [1,2,1,3,1,4,3,1,2,1]', () => {
    const expected = [1,2,1,3,1,4,3,1,2,1]
    const result = getStuffedArray([1,2,3,4,3,2,1])

    expect(result).toEqual(expected)
})

test('turn [4,3,2,1,2,3,4] into [4,3,1,2,1,1,2,2,3,1,4]', () => {
    const expected = [4,3,1,2,1,1,2,2,3,1,4]
    const result = getStuffedArray([4,3,2,1,2,3,4])

    expect(result).toEqual(expected)
})

test('turn [4,3,2,1,4,3,2,1] into [4,3,1,2,1,1,4,3,1,2,1]', () => {
    const expected = [4,3,1,2,1,1,4,3,1,2,1]
    const result = getStuffedArray([4,3,2,1,4,3,2,1])

    expect(result).toEqual(expected)
})
