let arr =[3,5,6,7,1,7,9,3]
const getUniqueValues = (array) => (
    array.reduce((accumulator, currentValue) => (
      accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue]
    ), [])	
  )
  console.log(getUniqueValues(arr))

