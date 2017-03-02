import { insert } from './Utils'

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

export const getStuffedInfoArray = (gapArray) => {
    const stuffedInfoArray = [], gapArray2 = gapArray || []
    let sum = 0, lastSum = 0

    gapArray2.forEach((element, index, array)=> {
        lastSum = sum
        sum += element

        if(sum == 4){ // current element has no gap to next element
            sum = 0
        }else if(sum > 4){ // current element has gap to next element then fill it
            stuffedInfoArray.push({
                insertedIndex: index,
                value: 4 - lastSum
            })

            if(element == 4){ // current element is equal to 4 then reset sum to 0
                sum = 0
            }else { // otherwise reset sum to current element
                sum = element
            }
        }
    })

    return stuffedInfoArray;
}

export const getStuffedFields = (fields) => {
    const gapIndexFields = getGapIndexFields(fields)
    const stuffedInfoArray = getStuffedInfoArray(gapIndexFields)
    let getStuffedFields = [...fields]
    let offset = 0, index = 0

    fields.forEach((element, index, array)=>{
        element.index = index++
    })

    stuffedInfoArray.forEach((element, index, array)=> {
        getStuffedFields = insert(getStuffedFields, element.insertedIndex + (offset++), {
            id: Date.now()+ offset + 'S',
            text: 'Stuffed',
            colSpan: element.value,
            type: 'stuffed',
            insertedIndex: element.insertedIndex
        })
    })

    return getStuffedFields
}

export const getGapIndexFields = (fields) => {
    return fields.map(field => field.colSpan)
}