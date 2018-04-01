var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100 + 1); 
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  let shopCart = `In your cart, you have`;
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1){
    for (let i = 0; i < cart.length; i++){
   console.log(`${shopCart} ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`); 
    }
  } else if (cart.length === 2){
    for (let i = 0; i < cart.length; i++){
   console.log(`${shopCart} ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`); 
    }
  }else{
    let cartThreeAndMore = []; 
    for (let i = 0; i < cart.length-1; i++){
      cartThreeAndMore.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`); 
      console.log(cartThreeAndMore)
      var join = cartThreeAndMore.join(`,`);
      console.log(cartThreeAndMore)
    }
    cartThreeAndMore.push(` and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
    console.log(`In your cart, you have ${cartThreeAndMore}`)
  }
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
