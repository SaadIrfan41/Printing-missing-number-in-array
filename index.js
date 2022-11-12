const arr = [11, 15, 17, 18, 19]
arr.sort(function (a, b) {
  return a - b
})
console.log('Sorted Array', arr)
const maxNumber = arr[arr.length - 1]
console.log('Maximum Number ', maxNumber)
const minNumber = arr[0]
console.log('Minimum Number ', minNumber)
const fun = () => {
  for (let i = 0; i < maxNumber - minNumber; i++) {
    if (arr[i + 1] !== minNumber + i + 1) {
      arr.splice(i + 1, 0, minNumber + i + 1)

      console.log(
        `The Number ${minNumber + i + 1} is missing at index ${i + 1}`
      )
    }
  }
}
fun()
console.log('Modified Array', arr)
