export type Product = {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
};
export type CartItemm = {
  product: Product;
  quantity: number;
};
