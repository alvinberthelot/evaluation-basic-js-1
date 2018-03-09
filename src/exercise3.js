var applyMap = function(inputValues, inputMaps) {
  var result = []
  if (inputMaps) {
    for (let i = 0; i < inputMaps.length; i++) {
      var mapFunction = inputMaps[i]
      var mapResult = []
      for (let j = 0; j < inputValues.length; j++) {
        var value = inputValues[j]
        var valueMapped = mapFunction(value)
        mapResult.push(valueMapped)
      }
      result.push(mapResult)
    }
  }
  return result
}

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
