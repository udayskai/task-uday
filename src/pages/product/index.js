import React from "react";
import { useParams } from "react-router-dom";
import { getProductObject } from "../../utils/format";
import { ButtonPrimary } from "../../components/global/button";
import { ProductCard } from "../../components/global/card/ProductCard";
import { Link } from "react-router-dom";

export default function Product(props) {
  let { id } = useParams();

  const { name, price, imgUrl } = getProductObject(Number(id));
  return (
    <div className="center-child">
      <div>
        <Link to={"/"}>
          <ButtonPrimary>Back</ButtonPrimary>
        </Link>
        <ProductCard
          hideAddCard={true}
          name={name}
          price={price}
          imgUrl={imgUrl}
        />
      </div>
    </div>
  );
}
