import React from "react";
import { Text } from "../typography";
import { Image } from "../image";
import { ButtonPrimary,ButtonSecondary } from "../button";
import {  Link } from "react-router-dom";



export const ProductCard = ({ name, price, imgUrl, id ,hideAddCard=false,handleAddCart,handleRemoveCart,isRemove=false}) => {
  return (
    <div>
  <Link style={{textDecoration:'none',color:'inherit'}} to={`/product/${id}`}>
      <div className="item-card m1 p2 ">
      <div className="flex jc-sb">
      {name}
    
      </div>
      <Text type="h2">{price}</Text>
      <Image src={imgUrl} alt={name} />
    </div>
    </Link>

    {
        !hideAddCard&&(
          <div className="mb3">
            {
              isRemove?
              <ButtonSecondary onClick={handleRemoveCart}>Remove</ButtonSecondary>
              :
              <ButtonPrimary onClick={handleAddCart}>Add to Cart</ButtonPrimary>
            }
          </div>
        )
      }
    </div>
  
  );
};
