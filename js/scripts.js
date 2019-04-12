function PizzaOrder(pizzaObject) {
  this.pizzas = [],
}

PizzaObject.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza)
}

PizzaObject.prototype.getTotal = function() {
  var total = 0;
  this.pizzas.forEach(pizzaObject) {
    total += pizzaObject.price;
  }
  console.log(total);
  return total;
}

function Pizza(size, sauce, cheese, toppingsArray) {
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.toppings = toppingsArray
}

Pizza.prototype.getPrice = function () {
  var pizzaPrice = 8;
  console.log('8')
  if(this.cheese === 'yes-cheese' || this.cheese === 'extra-cheese') {
    pizzaPrice += 3;
    console.log('cheese + 3')
  }
  pizzaPrice += (this.toppings.length * 1.5)
  console.log(this.toppings.length, this.toppings.length * 1.5);
  if (this.toppings.some(function(topping){return topping === 'gold'})) {
    pizzaPrice += 3000;
    console.log('gold + 3,000')
  }
  return this.price = pizzaPrice;
};

$(function() {
  // var pizzaOrder =
  $('form').submit(function(e) {
    e.preventDefault();
    var size = $('input:radio[name=size]:checked').val();
    var sauce = $('input:radio[name=sauce]:checked').val();
    var cheese = $('input:radio[name=cheese]:checked').val();
    var toppings = []; $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
    });
    var pizza = new Pizza(size, sauce, cheese, toppings);
    pizza.getPrice();

    $('#price').text(pizza.price);
    //need to show price div and put price into span there
  })


})
