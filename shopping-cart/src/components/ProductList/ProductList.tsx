import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../type/Type";

const ProductList = () => {
  const images: string[] = [
    "https://znews-photo.zingcdn.me/w660/Uploaded/neg_etpyole/2023_06_04/2023_06_03T192929Z_1465924169_UP1EJ631I530A_RTRMADP_3_SOCCER_FRANCE_PSG_CLE_REPORT_1_.JPG",
    "https://cdn.bongdaplus.vn/Assets/Media/2019/12/19/70/ronaldo1.jpg",
  ];
  const productList: Product[] = [
    {
      productId: "1",
      productName: "True Skin Vitamin C",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 23.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[1],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[1],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    {
      productId: "2",
      productName: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      imageUrl: images[0],
      price: 17.99,
    },
    // {
    //     "productId": "3",
    //     "productName": "Aichun beauty",
    //     "description": "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
    //     "imageUrl": "https://res.cloudinary.com/dyotzt92h/image/upload/v1632909875/Fsoft-academy/c5e83bbc7b60fc7d61da7bc07ec129dd31fc0d9b_original_nxatos.jpg",
    //     "price": 24.99
    // },
  ];
  return (
    <div className="grid grids-col-12 gap-3 h-auto overflow-auto">
      {productList.map((product, i) => (
        <ProductCard
          key={i}
          productName={product.productName}
          productId={product.productId}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
