import React, { useContext } from "react";
import ProductListData from "../../lib/product-list.json";
import { ProductCard } from "../../components/global/card/ProductCard";
import { MyContext } from "../../context/index";

export default function ProductList() {
  const { addCart, removeCart, items ,isItemAdded} = useContext(MyContext);
  const data = ProductListData?.arrayOfProducts;
  const handleCart = (id) => {
    addCart(id);
  };

  return (
    <div className="flex wrap jc-even">
      {data?.map(({ id, name, price, imgUrl }) => (
        <ProductCard
          handleRemoveCart={() => removeCart(id)}
          handleAddCart={() => handleCart(id)}
          key={id}
          id={id}
          name={name}
          price={price}
          imgUrl={imgUrl}
          isRemove={isItemAdded(id)}
        />
      ))}
    </div>
  );
}
