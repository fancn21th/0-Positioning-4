export const insert = (array, index, element) => {
    return [
        ...array.slice(0, index),
        element,
        ...array.slice(index)
    ]
}