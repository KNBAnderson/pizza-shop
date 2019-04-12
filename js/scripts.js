function PizzaOrder(pizzaObject) {
  this.pizzas = []
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza)
}

PizzaOrder.prototype.getTotal = function() {
  var total = 0;
  console.log(this.pizzas);
  this.pizzas.forEach(function(pizzaObject) {
    total += pizzaObject.price;
    console.log(pizzaObject.price);
  });
  // console.log(total);
  return total;
}

function Pizza(size, sauce, cheese, toppingsArray) {
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.toppings = toppingsArray
}

Pizza.prototype.getPrice = function () {
  var pizzaPrice = 5;
  console.log(pizzaPrice);
  if (this.size === 'small') {
    pizzaPrice += 2;
  } else if (this.size === 'medium') {
    pizzaPrice += 4;
  } else if (this.size === 'large') {
    pizzaPrice += 7;
    console.log(pizzaPrice);
  } else if (this.size === 'x-large') {
    pizzaPrice += 10;
  }
  if(this.cheese === 'cheese' || this.cheese === 'extra cheese') {
    pizzaPrice += 1;
    console.log(pizzaPrice);
  }
  pizzaPrice += (this.toppings.length * 1.5);
  if (this.toppings.some(function(topping){return topping === 'gold'})) {
    pizzaPrice += 3000 - 1.5;
    console.log(pizzaPrice);
  }
  console.log(pizzaPrice);
  return this.price = pizzaPrice;
};

Pizza.prototype.printToppings = function() {
  var toppingsList = '';
  for (let i = 0; i < this.toppings.length - 1; i++) {
    toppingsList += this.toppings[i] + ', ';
  }
  toppingsList += 'and ' + this.toppings[this.toppings.length - 1];
  console.log(toppingsList);
  return toppingsList;
}

$(function() {
  var pizzaOrder = new PizzaOrder();
  $('form').submit(function(e) {
    e.preventDefault();
    var size = $('input:radio[name=size]:checked').val();
    var sauce = $('input:radio[name=sauce]:checked').val();
    var cheese = $('input:radio[name=cheese]:checked').val();
    var toppings = []; $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
    });
    if (size && sauce && cheese) {
      var pizza = new Pizza(size, sauce, cheese, toppings);
      pizza.getPrice();
      pizzaOrder.addPizza(pizza);

      if (toppings = []) {
        $('#order').append('<p>1 ' + size + ' sized pizza with ' + sauce + ' sauce, and ' + cheese + '</p><p calls="right-align">Price: $' + pizza.price.toFixed(2) + '</p>');
      } else {
        $('#order').append('<p>1 ' + size + ' sized pizza with ' + sauce + ' sauce, ' + cheese + ', and topped with ' + pizza.printToppings() + '</p><p calls="right-align">Price: $' + pizza.price.toFixed(2) + '</p>');
      }
    } else {
      alert('Please select a size, sauce, and cheese option to conitue')
    }
  })
    var total = pizzaOrder.getTotal().toFixed(2);
    $('#total').text(total);
    console.log(total);
    //need to show price div and put price into span there


})
