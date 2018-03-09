var removeNegativeValue = function(values) {
  var result = []
  if (values) {
    for (let i = 0; i < values.length; i++) {
      var value = values[i]
      if (value >= 0) {
        result.push(value)
      }
    }
  }
  return result
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
