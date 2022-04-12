export function addToCart(data){
  console.log(data);
  return{
    type : "ADD_TO_CART",
    value : data
  }
}
