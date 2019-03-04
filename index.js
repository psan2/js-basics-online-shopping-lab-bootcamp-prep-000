var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: getRandomPrice()}
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function getRandomPrice(){
  var min = 0
  var max = 100
  return Math.floor(Math.random() * (max-min)) + min
}

function viewCart() {
  var i
  var cartList = []
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  for (i=0; i<cart.length; i++){
      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)

//    else if (cart.length === 2){
//      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
//      return `In your cart, you have ${cartList}.`
    }
  if (cartList.length === 1){
    return `In your cart, you have ${cartList}.`
  }
  else if (cartList.length === 2){
    return `In your cart, you have ${cartList[0]}, and ${cartList[1]}.`
  }
  else{
    return `In your cart, you have ${cartList.slice(0,cartList.length-1).join(', ')}, and ${cartList[cartList.length-1]}.`
  }
}

function total() {
  var total = cart.reduce((a,{itemPrice}) => a + itemPrice, 0)
  return total
}

function removeFromCart(item) {
  var inCart = cart.some(x => item === cart.itemName)
  if (inCart = false){
    return "That item is not in your cart."
  }
  else {
    delete cart[item]
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
