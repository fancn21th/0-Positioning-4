export const getStuffedArray = (gapArray) => {
    const stuffedArray = []
    let sum = 4, lastSum = sum

    const stuffing = (stuff) => {
        stuffedArray.push(stuff)
    }

    gapArray.forEach((element, index, array)=> {
        sum -= element
        if(element == 4 && sum != 0){
            sum = 4
            stuffing(lastSum)
        }else if(sum == 0){
            sum = 4
        }else if(sum < 0){
            stuffing(-sum)
            sum = 4
        }
        stuffedArray.push(element)
        lastSum = sum
    })

    return stuffedArray;
}