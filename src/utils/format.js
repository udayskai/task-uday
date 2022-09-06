import ProductListData from "../lib/product-list.json";


export const getProductObject =(id)=>{
  return ProductListData?.arrayOfProducts?.find((data)=>data?.id===id)
}