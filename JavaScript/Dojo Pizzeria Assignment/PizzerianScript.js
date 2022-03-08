function pizzaOven(crustType,SauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType,
    pizza.SauceType=SauceType,
    pizza.cheeses=cheeses,
    pizza.toppings=toppings;
    return pizza;
}
var pizza1=pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
console.log(pizza1);
var pizza2=pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);
var pizza3=pizzaOven("thin crust","barbeque","shedder","onion");
console.log(pizza3);
var pizza4=pizzaOven("cheese-stuffed","bafalo","mozzarella","pickles");
console.log(pizza4);

