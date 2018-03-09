var i18nText = function(functionText, text) {
  if (!functionText) {
    throw new Error('A Text function is required')
  }
  return function(name) {
    return functionText(text, name)
  }
}

module.exports = {
  title: 'Exercise 4',
  run: i18nText
}
