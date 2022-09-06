
import {
  Routes,
  Route,
  Switch
} from "react-router-dom";
import { ProductList, Product } from "./pages";
import { ROUETS_URL } from "./lib/route-constant";
import MyProvider from "./context"
import Appbar from "./components/layout/Appbar";

function App() {
  return (
    <MyProvider>

    <div className="App">
    <Appbar/>
        <Routes>
          <Route  path={'/'} element={<ProductList/>} />
          <Route  path={ROUETS_URL.PRODUCT} element={<Product />} />
        </Routes>
      {/* footer */}
    </div>
    </MyProvider>

  );
}

export default App;
