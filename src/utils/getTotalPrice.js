export const getTotalPrice = (inCart) => {
  const products = inCart.reduce((acc, item) => (acc += Number(item.cart)), 0);
  const totalPrice = inCart.reduce(
    (acc, item) => (acc += item.price * item.cart),
    0
  );
  let priceDelivery = 0;
  if (totalPrice > 100000) {
    priceDelivery = 0;
  } else if (totalPrice > 50000) {
    priceDelivery = 1500;
  } else {
    priceDelivery = 5000;
  }
  return [products, totalPrice, priceDelivery];
};
