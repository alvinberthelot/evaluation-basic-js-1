var mapCustomer = function(customer) {
  if (!customer) {
    throw new Error('A customer must be defined')
  } else {
    var result = {
      firstname: customer.firstname || 'John',
      lastname: customer.lastname || 'Doe',
      products: customer.products || [],
      moneySpent: 0
    }
    for (let i = 0; i < result.products.length; i++) {
      var value = result.products[i].price
      result.moneySpent += value
    }
    return result
  }
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
