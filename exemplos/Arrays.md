# Arrays :page_with_curl:

```
var averageTemp = []

averageTemp[0] = []
averageTemp[0][0] = 72
averageTemp[0][1] = 75
averageTemp[0][2] = 79
averageTemp[0][3] = 79
averageTemp[0][4] = 81
averageTemp[0][5] = 81

averageTemp[1] = []
averageTemp[1][0] = 81
averageTemp[1][1] = 79
averageTemp[1][2] = 75
averageTemp[1][3] = 72
averageTemp[1][4] = 73
averageTemp[1][5] = 72

function printMatrix(myMatrix) {
  for (var i = 0; i < myMatrix.length; i++) {
    for (var j = 0; j < myMatrix[i]; j++) {
      console.log(myMatrix[i][j])
    }
  }
}

printMatrix(averageTemp)
```

## Juntando vários arrays

```
var zero = 0
var positiveNumbers = [1, 2, 3, 4]
var negativeNumbers = [-4, -3, -2, -1]

var numbersList = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbersList)
```

