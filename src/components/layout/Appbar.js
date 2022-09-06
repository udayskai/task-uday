import React, { useContext } from "react";
import {Text} from "../../components/global/typography/index"
import { MyContext } from "../../context/index";

export default function Appbar() {
  const {  items } = useContext(MyContext);
  return (
    <div className='appbar flex jc-sb'>
   <Text type="h3" className='ml2'>{items?.length}</Text>
    </div>
  )
}
