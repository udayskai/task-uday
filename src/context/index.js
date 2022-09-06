import React, { useState } from "react";
const MyContext = React.createContext();

function MyProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider
      value={{
        items: cart,
        addCart: (selectedID) => {
          setCart([...cart, selectedID]);
        },
        removeCart: (selectedID) => {
          setCart(cart?.filter((id) => id != selectedID));
        },
        isItemAdded: (id) => {
          return cart?.includes(id);
        },
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;

export { MyContext };
