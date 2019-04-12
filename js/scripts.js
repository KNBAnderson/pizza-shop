function Pizza(sauce, cheese, toppingsArray) {
  this.sauce = sauce,
  this.cheese = cheese,
  this.toppings = toppingsArray
}

Pizza.prototype.getPrice = function () {
  var pizzaPrice = 8;
  if(this.cheese === 'yes-cheese' || this.cheese === 'extra-cheese') {
    pizzaPrice += 3;
  }
  pizzaPrice += (this.toppings.length * 1.5)
  if (this.toppings.some(function(topping){return topping === 'gold'})) {
    pizzaPrice += 3000;
  }
  return this.price = pizzaPrice;
};

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var sauce = $('input:radio[name=sauce]:checked').val()
    var cheese = $('input:radio[name=cheese]:checked').val();
    var toppings = []; $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
    });
    var pizza = new Pizza(sauce, cheese, toppings);
    pizza.getPrice();

    $('#price').text(pizza.price);
    //need to show price div and put price into span there
  })


})
