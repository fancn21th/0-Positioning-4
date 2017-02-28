export const getStuffedArray = (gapArray) => {
    const stuffedArray = [], gapArray2 = gapArray || []
    let sum = 0, lastSum = 0

    const stuffing = (stuff) => {
        stuffedArray.push(stuff)
    }

    gapArray2.forEach((element, index, array)=> {
        lastSum = sum
        sum += element

        if(sum == 4){ // current element has no gap to next element
            sum = 0
        }else if(sum > 4){ // current element has gap to next element then fill it
            stuffing(4 - lastSum)
            if(element == 4){ // current element is equal to 4 then reset sum to 0
                sum = 0
            }else { // otherwise reset sum to current element
                sum = element
            }
        }

        stuffedArray.push(element)
    })

    return stuffedArray;
}

export const getStuffedIndexArray = (gapArray) => {
    const stuffedIndexArray = []
    let sum = 0, lastSum = 0

    gapArray.forEach((element, index, array)=> {
        lastSum = sum
        sum += element

        if(sum == 4){ // current element has no gap to next element
            sum = 0
        }else if(sum > 4){ // current element has gap to next element then fill it
            stuffedIndexArray.push({
                index: index,
                value: 4 - lastSum
            })

            if(element == 4){ // current element is equal to 4 then reset sum to 0
                sum = 0
            }else { // otherwise reset sum to current element
                sum = element
            }
        }
    })

    return stuffedIndexArray;
}

export const getStuffedFields = (fields) => {
    return fields.map(field => field.colSpan)
}